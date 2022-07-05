
import { useEffect } from 'react';
import { useContext, useState } from 'react'
import DataList from './DataList';
import imgsrc from '../../img/over.png'

function MovingList() {

    //接收观影时间天数
    const [timeList, setTimeList] = useState([]);
    //获取Context里的数据电影及下标
    const { data, isIndex } = useContext(DataList);
    //当前时间设置参数
    const [nowTime, setNowTime] = useState('');
    //目前点击所在的时间
    const [nowClickTime, setNowClickTime] = useState('');

    // const [isOver,setIsOver] = useState(true);
    let isOver = true;

    //组件加载后获取当前时间
    useEffect(() => {
        setNowClickTime(getDate());
        setNowTime(getDate());
    }, [])
    //判断当data数据为空时跳出
    if (data == '') {
        return;
    }
    //解构
    const { movie_name, score, movie_want, movie_type, star } = data.dataList[isIndex];
    //电影时长
    const time = 140;
    //打印电影当天排班列表长度
    // console.log(data.list[isIndex].length);//movie_type


    //当列表有长度时获取不同的天次
    //获取每一个影片
    const mvlist = data.list[isIndex];
    //判断当天班次放完以后显示特殊图片提示
    //当前系统时间
    const dd = new Date().toString();
    let isShow = false;

    if (mvlist.length) {
        mvlist.map((item) => {
            //判断影片排班的日期
            if (parseInt(item.start_time.substring(8, 10)) >= parseInt(nowTime.substring(8, 10))) {
                timeList.push(item.start_time.substring(0, 10));

                // console.log(parseInt(item.start_time.substring(11, 13)) , parseInt(dd.substring(16, 18)));
                if (parseInt(item.start_time.substring(11, 13)) <= parseInt(dd.substring(16, 18))) {
                    if (nowTime == nowClickTime) {
                        isShow = true;
                    }
                }
            }
        })
    }
    //观影时间数组
    const st = [...new Set(timeList)]
    // console.log(st);

    console.log(data.list[isIndex].length);
    //有值正常显示
    if (data.list[isIndex].length) {
        console.log(nowTime, nowClickTime);
        if (nowTime == nowClickTime) {
            isOver = true;
            // setIsOver(true)
            console.log(1111);
        } else {
            isOver = false;
            // setIsOver(false)
            console.log(2222);
        }
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

    //处理电影排班列表
    function TrShow() {

        return (
            <>
                {
                    data.list[isIndex].map((item, i) => {
                        //获取电影开始的小时和分钟
                        const hh = item.start_time.substring(11, 13);
                        const mm = item.start_time.substring(14, 16);

                        //获取电影结束时间
                        const h1 = (time % 60 + parseInt(mm) >= 60) ? (parseInt((time % 60 + parseInt(mm)) / 60) + parseInt(hh)) : (parseInt(time / 60) + parseInt(hh));
                        const m1 = (time % 60 + parseInt(mm) >= 60) ? (time % 60 + parseInt(mm) == 60) ? 0 : (parseInt((time % 60 + parseInt(mm)) % 60) - parseInt(mm)) : time % 60 + parseInt(mm);

                        const h3 = h1 <= 24 ? h1 : parseInt(h1 / 24);

                        const h2 = h3 < 10 ? '0' + h3 : h3;
                        const m2 = m1 < 10 ? '0' + m1 : m1;

                        //判断当天时间与播放时间
                        if (nowClickTime == nowTime) {
                            if (nowClickTime == item.start_time.substring(0, 10) && dd.substring(16, 18) < hh) {
                                return (
                                    <tr key={item.start_time}>
                                        <td>
                                            <span className='tdspan'>{hh}:{mm}</span>
                                            <span className='tdspan1'>{h2}:{m2}散场</span>
                                        </td>
                                        <td>{item.mv_lang}</td>
                                        <td>{item.mv_addr}</td>
                                        <td style={{ color: '#f03d37', fontSize: '18px', fontWeight: 700 }}>¥{item.mv_money}</td>
                                        <td><button onClick={e => { console.log(item) }}>选座购票</button></td>
                                    </tr>
                                )
                            }
                        } else {
                            if (nowClickTime == item.start_time.substring(0, 10)) {
                                return (
                                    <tr key={item.start_time}>
                                        <td>
                                            <span className='tdspan'>{hh}:{mm}</span>
                                            <span className='tdspan1'>{h2}:{m2}散场</span>
                                        </td>
                                        <td>{item.mv_lang}</td>
                                        <td>{item.mv_addr}</td>
                                        <td style={{ color: '#f03d37', fontSize: '18px', fontWeight: 700 }}>¥{item.mv_money}</td>
                                        <td><button onClick={e => { console.log(item) }}>选座购票</button></td>
                                    </tr>
                                )
                            }
                        }
                    })
                }
            </>
        )
    }

    //电影名字及简介
    function mvmq() {
        return (
            <div className="tilbox">
                <span>{movie_name}</span>
                <p style={{ fontSize: '26px', marginRight: '6px' }}>{score == 0 ? movie_want == 0 ? '' : movie_want : score}</p>
                <p>{score == 0 ? movie_want == 0 ? '暂无评分' : '少人想看' : '分'}</p>
                <div className='tt'>
                    <span>时长 : &nbsp;</span><p>{time}分钟</p>
                    <span>类型 : &nbsp;</span><p>{movie_type}</p>
                    <span>主演 : &nbsp;</span><p>{star}</p>
                </div>
            </div>
        )
    }

    function mvyd() {

        return (<div className="timebox">
            观影时间 :
            {
                st.map((item, i) => {
                    const tt = ['今天', "明天", "后天"];
                    let day = parseInt(nowTime.substring(8, 10)) + i < 10 ? '0' + (parseInt(nowTime.substring(8, 10)) + i) : parseInt(nowTime.substring(8, 10)) + i;
                    return (<span
                        style={nowClickTime == item ? { backgroundColor: '#f03d37', color: '#fff' } : null} key={item}
                        onClick={e => { setNowClickTime(nowTime.substring(0, 8) + day) }}
                    >{tt[i]}{nowTime.substring(5, 7)}月{day}日</span>
                    )
                })
            }
        </div>)
    }

    return (
        <div className="xqbox">
            {/* 电影名字及简介 */}
            {mvmq()}

            {/* 预定日期 观影时间 */}
            {mvyd()}

            <div className="timelist" style={isOver ? { display: 'none' } : null}>
                <table style={isShow ? { display: 'none' } : null}>
                    <thead>
                        <tr>
                            <th>放映时间</th>
                            <th>语言版本</th>
                            <th>放映厅</th>
                            <th>售价（元）</th>
                            <th>选座购票</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TrShow()}
                    </tbody>
                </table>
                <div className="over" style={!isShow ? { display: 'none' } : null}>
                    <img src={imgsrc} alt="" />
                    <p>当日场次已放映完</p>
                </div>
            </div>
            <div className="timelist" style={!isOver ? { display: 'none' } : null}>
                <div className="over">
                    <img src={imgsrc} alt="" />
                    <p>当日场次暂未安排</p>
                </div>
            </div>
        </div>
    )
}

export default MovingList;