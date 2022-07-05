
import { useEffect } from 'react';
import { useContext, useState } from 'react'
import DataList from './DataList';
import Mvmq from './Mvmq';
import Mvyd from './Mvyd';
import Mvpb from './Mvpb';

function MovingList() {

    //获取Context里的数据电影及下标
    const { data, isIndex } = useContext(DataList);
    //当前时间设置参数
    const [nowTime, setNowTime] = useState('');
    //目前点击所在的时间
    const [nowClickTime, setNowClickTime] = useState('');

    //组件加载后获取当前时间
    useEffect(() => {
        setNowClickTime(getDate());
        setNowTime(getDate());
    }, [])
    //判断当data数据为空时跳出
    if (data == '') {
        return;
    }

    //获取系统当前时间函数有格式
    function getDate() {
        var datetime = new Date();
        // console.log('秒',parseInt(datetime.getTime()/1000));
        var year = datetime.getFullYear();//获取完整的年份(4位,如:1970)
        var month = datetime.getMonth() + 1;//获取月份(返回0-11,0代表1月,用的时候记得加上1)
        var date = datetime.getDate();//获取日(返回1-31)
        //判断小于等于9月的时候在月份前加一个"0"
        if (month <= 9) {
            month = "0" + month;
        }
        //判断小于等于9号的时候在天数前加一个"0"
        if (date <= 9) {
            date = "0" + date;
        }
        const dateToday = year + "-" + month + "-" + date;
        // console.log(dateToday);
        return dateToday;
    }

    return (
        <div className="xqbox">
            {/* 电影名字及简介 */}
            <Mvmq data={data.dataList[isIndex]} />

            {/* 预定日期 观影时间 */}
            <Mvyd nowTime={nowTime} setNowClickTime={setNowClickTime} nowClickTime={nowClickTime} />

            {/* 排班列表 */}
            <Mvpb pb={{ data: data.list[isIndex], isIndex, nowClickTime, nowTime }} />
        </div>
    )
}

export default MovingList;