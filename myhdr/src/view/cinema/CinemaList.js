import '../../sass/cinema/CinemaList.scss'
import { FilterOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CinemaList() {

    const[data, setData] = useState([]);

	function getData() {
		axios.get("http://127.0.0.1:80/getCinema")
		.then(function(res){
			setData(res.data);
            let data = res.data;
            console.log(data);
            // console.log(res.data[0].id);
		})
	}
	
   useEffect(function(){
		getData();
	}, [])

    return(
        <div>
             <div className='cinema-list'>
                <span className='list'>影院列表</span>
                <span className='choice'><FilterOutlined /> 筛选</span>
            </div>
            {
               data.map((v,i)=>{
                   return(
                    <div className='list-detail' key={v.id}>
                    <div className='detail1'>
                        <a href="">{v.name}</a>
                        <p>地址：{v.address}</p>
                        <div className='tag'>
                        <span>{v.tag1}</span>
                        <span>{v.tag2}</span>
                        <span>{v.tag3}</span>
                        </div>
                    </div>
                    <div className='detail3'>
                        <button>选座购票</button>
                    </div>
                    <div className='detail2'>
                        <div className='pricebox'>
                            <div className='price'>
                            <span className='price1'>￥
                               <span className='price2'>{v.price}
                                  <span className='price3'>起</span>
                            </span></span>
                            
                            {/* <span className='price3'></span> */}
                            {/* <span className='qi'>起</span> */}
                            </div>
                        <span className='price4'>{v.distance}km</span>
                        </div>
                    </div>
                </div>
                   );
               })
            }

            {/* <div className='list-detail'>
                <div className='detail1'>
                    <a href="">339影城</a>
                    <p>地址：成华区猛追湾街道猛追湾街94号339欢乐颂3层</p>
                    <div className='tag'>
                    <span>改签</span>
                    <span>折扣卡</span>
                    <span>杜比全景声厅</span>
                    </div>
                </div>
                <div className='detail3'>
                    <button>选座购票</button>
                </div>
                <div className='detail2'>
                    <div className='price'>
                    <span className='price1'>￥</span>
                    <span className='price2'>29.5</span>
                    <span className='price3'>起</span>
                    </div>
                    <span className='price4'>7.7km</span>
                </div>
            </div> */}
            {/* <div className='test'>
                111
            </div> */}
        </div>
    )
}

export default CinemaList;