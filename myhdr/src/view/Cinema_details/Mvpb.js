import imgsrc from '../../img/over.png';
import TrShow from './TrShow';

function Mvpb({ pb }) {

    //内外盒子显示是否已经买完了
    let isOver = true;
    let isShow = true;
    const { data, nowClickTime, nowTime } = pb;
    //当前系统时间
    const dd = new Date().toString();

    function getTime(item,time) {
        //获取电影开始的小时和分钟
        const hh = item.start_time.substring(11, 13);
        const mm = item.start_time.substring(14, 16);
        //获取电影结束时间
        const h1 = (time % 60 + parseInt(mm) >= 60) ? (parseInt((time % 60 + parseInt(mm)) / 60) + parseInt(hh)) : (parseInt(time / 60) + parseInt(hh));
        const m1 = (time % 60 + parseInt(mm) >= 60) ? (time % 60 + parseInt(mm) == 60) ? 0 : (parseInt((time % 60 + parseInt(mm)) % 60) - parseInt(mm)) : time % 60 + parseInt(mm);
        const h3 = h1 <= 24 ? h1 : parseInt(h1 / 24);
        const h2 = h3 < 10 ? '0' + h3 : h3;
        const m2 = m1 < 10 ? '0' + m1 : m1;

        return { hh, mm, h2, m2 };
    }

    //定义今天的电影列表数组和其它天的
    let dayArr = [];
    let otherArr = [];
    data.map((item, i) => {
        if (nowClickTime == item.start_time.substring(0, 10)) {
            dayArr.push(item);
        } else {
            otherArr.push(item.start_time.substring(0, 10));
        }
    })

    //isShow --》 true   当今天有排班
    if (dayArr.length) {
        isShow = true;
        //isOver --》 true   当今天有排班,仅限现在
        const time12 = dayArr[dayArr.length - 1].start_time;
        const time1 = parseInt(dayArr[dayArr.length - 1].start_time.substring(11, 13));
        const time2 = parseInt(dd.substring(16, 18));

        if (time12.substring(0, 10) == nowTime) {
            if (time1 < time2) {
                isOver = true;
            }
        }else {
            isOver = false;
        }
    }
    //isShow --》 false   今天没有排班
    if (!dayArr.length) {
        isShow = false;
    }

    return (
        <>
            <div className="timelist" style={isShow ? null : { display: 'none' }}>
                <table style={!isOver ? null : { display: 'none' }}>
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
                        <TrShow pb={{ data, nowClickTime, nowTime, getTime }} />
                    </tbody>
                </table>
                <div className="over" style={isOver ? null : { display: 'none' }}>
                    <img src={imgsrc} alt="" />
                    <p>当日场次已放映完</p>
                </div>
            </div>
            <div className="timelist" style={!isShow ? null : { display: 'none' }}>
                <div className="over">
                    <img src={imgsrc} alt="" />
                    <p>当日场次暂未安排</p>
                </div>
            </div>
        </>
    )
}

export default Mvpb;