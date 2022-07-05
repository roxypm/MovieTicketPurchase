
import { useState } from 'react'
function Mvyd({ nowTime, setNowClickTime, nowClickTime }) {

    //接收观影时间天数
    const tt = ['今天', "明天", "后天"];

    return (<div className="timebox">
        观影时间 :
        {
            tt.map((item, i) => {
                let day = parseInt(nowTime.substring(8, 10)) + i < 10 ? '0' + (parseInt(nowTime.substring(8, 10)) + i) : parseInt(nowTime.substring(8, 10)) + i;
                let time = nowTime.substring(5, 7) + '-' + day;
                return (<span
                    style={nowClickTime.substring(5, 10) == time ? { backgroundColor: '#f03d37', color: '#fff' } : null} key={item}
                    onClick={e => { setNowClickTime(nowTime.substring(0, 8) + day) }}
                >{item}{nowTime.substring(5, 7)}月{day}日</span>
                )
            })
        }
    </div>)
}

export default Mvyd;