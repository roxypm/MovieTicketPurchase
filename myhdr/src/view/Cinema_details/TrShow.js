
//处理电影排班列表
function TrShow({ pb }) {

    const {  data, nowClickTime, nowTime,getTime } = pb;
    const dd = new Date().toString();
    const time = 140;

    function show(item,hh,mm,h2,m2) {
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

    return (
        <>
            {
                data.map((item, i) => {
                    let {hh,mm,h2,m2} =  getTime(item,time);
                    //判断当天时间与播放时间
                    if (nowClickTime == nowTime) {
                        //当天的满足不超时的显示
                        if (nowClickTime == item.start_time.substring(0, 10) && dd.substring(16, 18) < hh) {
                            return show(item,hh,mm,h2,m2);
                        }
                    } else {
                        if (nowClickTime == item.start_time.substring(0, 10)) {
                            return show(item,hh,mm,h2,m2);
                        }
                    }
                })
            }
        </>
    )
}

export default TrShow;