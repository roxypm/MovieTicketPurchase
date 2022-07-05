import { getValue } from '@testing-library/user-event/dist/utils';
import '../../sass/cinema/CinemaDetail.scss'
import CinemaList from './CinemaList'
import React, { useState, useEffect } from 'react';
function CinemaDetail() {
    
    const [state1,setState1]=useState(0);
    const [state2,setState2]=useState(0);
    const [state3,setState3]=useState(0);
    const [state4,setState4]=useState(0);
    const [state5,setState5]=useState(0);
    console.log(state1);
    const arr1 = ['今天 7月4','周二 7月5','周三 7月6'];
    const arr2 = ['全部','太平洋电影城','万达影城','CGV影城','横店影视','橙天嘉禾影城','UME国际影城',
                  '保利万和国际影城','卢米埃影城','星光影城','金逸影城','EVO艺威影院','幸福蓝海国际影城',
                  '中影南方国际影城','苏宁影城','橙天国际影城','沃美影城','保利国际影城','博纳国际影城',
                  '星轶starx影城','恒大嘉凯影城','百老汇影城','中影嘉莱国际影城','大地影院','百丽宫影城',
                  'SFC上影影城','中影星美国际影城','中影泰得影城','烽禾影城','完美世界影城','九州森美国际影城',
                  '星河国际影城','英皇ua电影城','维多利影城','海逸影城','上影国际影城','华联影城','UA影院',
                  'ACTO梦空间影城','中影UL城市影院','嘉裕国际影城','嘉美国际影城','欢乐小马电影城','左岸国际影城',
                  '海上国际影城','至潮主题影城','耀莱成龙国际影城','其他' ];
    const arr3 = ['全部','地铁附近','武侯区','双流区','成华区','郫都区','新都区','锦江区','金牛区','青羊区',
                  '龙泉驿区','温江区','都江堰市','金堂县','崇州市','青白江区','彭州市','邛崃市','大邑县','新津区',
                  '简阳市','蒲江县'];
    const arr4 = ['全部','IMAX厅','CGS中国巨幕厅','杜比全景声厅','Dolby Cinema厅','RealD厅','RealD 6FL厅','LUXE巨幕厅',
                  '4DX厅','DTS:X 临境音厅','儿童厅','4K厅','4D厅','60帧厅','120帧/4K厅','巨幕厅','CINITY厅','MX4D厅',
                  '激光厅','ALPD Pro高亮厅'];
    const arr5 = ['全部','可改签','可退票'];

    const istrue={
        backgroundColor:'#F34D41',
        color:'#fff',
        
    }
    useEffect(()=>{
        // setstate1(0);
        // setstate2(0);
        // setstate3(0);
        // setstate4(0);
        // setstate5(0);
    },[])
    function getmyDate() {
        var date = new Date();

        // var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day = date.getDate().toString();//转为字符串类型，只能进行字符串的拼接
        var day1 = date.getDate();//number类型，可以进行数字加减
        // var hour =  date.getHours().toString();
        // var minute = date.getMinutes().toString();
        var dataobj= [month,day,day1]
        // console.log(day1);
        // return month+'月'+day+'日';
        return dataobj;
    };
    // console.log(getmyDate());
    var nowdata = getmyDate();

    // function getmsg(e){
    //     console.log(arr1[e]);
    //   }
      function setstate(e,type){
        if (type=='state1') {
            console.log(e);
            setState1(e);
            // console.log(setState1(e));
            // console.log(state1,arr1[e],arr1[state1]);
        }else if(type=='state2'){
            setState2(e)
        }else if(type=='state3'){
            setState3(e)
        }else if(type=='state4'){
            setState4(e)
        }else if(type=='stateS5'){
            setState5(e)
        } 
      }
      console.log(arr1[state1],arr2[state2],arr3[state3],arr4[state4],arr5[state5]);
    return (
        <div>
            <div className="cinema-detail-box">
                <div className='data'>日期：
                    {
                        arr1.map((v,i)=>{
                            return(
                                <li style={state1==i?istrue : null} onClick={setstate.bind(null,i,"state1")} key={v}>{v}</li>
                            )
                        })
                    }

                </div>
                <div className='brand'>品牌：
                <div className='cinema-name'>
                    {
                        arr2.map((v,i)=>{
                            return(
                                <li key={v} style={state2==i?istrue : null} onClick={setstate.bind(null,i,"state2")}>{v}</li>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='place'>行政区：
                    <div className='place-name'>
                        {
                        arr3.map((v,i)=>{
                            return(
                                <li key={v} style={state3==i?istrue : null} onClick={setstate.bind(null,i,"state3")}>{v}</li>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='type'>影厅类型：
                    <div className='type-name'>
                    {
                        arr4.map((v,i)=>{
                            return(
                                <li key={v} style={state4==i?istrue : null} onClick={setstate.bind(null,i,"state4")}>{v}</li>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='service'>影院服务：
                    <div className='service-type'>
                    {
                        arr5.map((v,i)=>{
                            return(
                                <li key={v} style={state5==i?istrue : null} onClick={setstate.bind(null,i,"state5")}>{v}</li>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <CinemaList/>
        </div>
    )
}
export default CinemaDetail;