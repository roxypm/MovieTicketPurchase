import './index.scss';
import YingYuanXq from './YingYuanXq';
import MovingList from './MovingList';
import SomeCinema from './SomeCinema';
import { CaretRightFilled,CaretLeftFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import DataList from './DataList'
import { useRef } from 'react';

function CinemaDetails() {

    // 获取影院ID
    let cmId = useParams();
    const [data, setData] = useState('');
    //当前影片的下标
    const [isIndex, setIsIndex] = useState(0);
    //影片盒子的页数
    let [isPage, setIsPage] = useState(1);
    const location = useLocation();
    //ref获取影片盒子
    const mm = useRef();
    //选中影片时的样式
    const isTrue = {
        height: '236px',
        width: '170px',
        border: '4px solid #f00'
    }
    //获取放映列表电影的个数
    // console.log(data.dataList.length);

    //加载组件发起一次请求
    useEffect((e) => {
        getData();
        
    }, [])

    async function getData() {
        let pre = axios.get('http://localhost:8080/cinema', { params: { cmId: cmId.id } });
        let haha = await pre.then((e) => {
            setData(e.data.msg);
        });
    }

    //点击影片盒子左右按钮切换，改变margin
    function btnClick(e) {
        //点击向右移动
        if (e == 'add') {
            //设置盒子的margin值
            mm.current.style.marginLeft = -(isPage) * 1020 + 'px';
            if (isPage + 1 >= parseInt(data.dataList.length / 7) + 1) {
                mm.current.style.marginLeft = -(parseInt(data.dataList.length / 7)) * 1020 + 'px';
                setIsPage(parseInt(data.dataList.length / 7));
                setIsIndex(parseInt(data.dataList.length / 7) * 7 - parseInt(data.dataList.length / 7));
                return;
            }
            isPage++;
            setIsPage(isPage);
            setIsIndex((isPage - 1) * 6);
            return;
        }
        //点击向左移动
        if (e == 'acc') {
            mm.current.style.marginLeft = -((isPage - 1) * 1020) + 'px';
            if (isPage == 1) {
                mm.current.style.marginLeft = '0';
                setIsPage(1);
                setIsIndex(0);
                return
            }
            isPage--;
            setIsPage(isPage);
            setIsIndex(isPage * 6);
        }
    }

    //显示影片的盒子函数
    function ImgShow() {
        if (data == '') {
            return
        }
        // console.log(data.dataList.length);
        //影片图片盒子
        return (
            <>
                {
                    data.dataList.map((item, i) => {
                        return (
                            <div className="ypimgbox" key={item.id}>
                                <div className="ypimgbox1">
                                    <img src={item.movie_img}
                                        onClick={e => { setIsIndex(i) }}
                                        style={i == isIndex ? isTrue : null}
                                        alt="" />
                                </div>
                            </div>)
                    })
                }
            </>
        );
    }

    console.log(data);
    return (
        <DataList.Provider value={{ data, isIndex }}>
            {/* 影院详情盒子背景 */}
            <div className="bgbox"></div>
            <div className='content'>
                {/* 影院详情头部 */}
                <div className="yybox">
                    <YingYuanXq />
                </div>

                {/* 影片详情列表 */}
                <div className="dybox">
                    <div className="navboox">
                        猫眼电影 &gt; 影院 &gt; {data == '' ? '' : data.r[0].name}
                    </div>
                    {/* 影片列表 */}
                    <div className="dyy11">
                        {/* 左右箭头 */}
                        <div className="leftboxjt hh" onClick={btnClick.bind(null, 'acc')}><CaretLeftFilled /></div>
                        <div className="rigthboxjt hh" onClick={btnClick.bind(null, 'add')}><CaretRightFilled /></div>
                        <div className="dylist" ref={mm}>
                            {ImgShow()}
                        </div>
                    </div>
                    {/* 影片放映时间及介绍 */}
                    <MovingList />
                </div>
                {/* 相关影院 */}
                <SomeCinema />
            </div>
            <div className="bottom"></div>
        </DataList.Provider>
    )
}

export default CinemaDetails;