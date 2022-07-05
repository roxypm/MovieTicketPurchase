
import { useContext } from 'react'
import DataList from './DataList'

function DetailService() {

    const {data} = useContext(DataList);
    if (data == '') {
        return;
    }
    const {name,addr,iphone} = data.r[0];

    return (
        <div className="textbox">
            <p>{name}</p>
            <div className='texxt'>{addr}</div>
            <div className='iphone'>电话 : &nbsp;&nbsp;{iphone}</div>
            <div className='textbox1'>
                <div className='yyfw'>影院服务</div>
                <div><span>改签</span>未取票用户放映前60分钟可改签</div>
                <div><span>3D眼睛</span>3元/副</div>
                <div><span>儿童优惠</span>除巨幕厅、贵宾厅以外，1.3米以下儿童需在监护人陪...</div>
                <div><span>WiFi</span>影院提供免费WIFI</div>
                <div><span>情侣座</span>5厅、8厅、10厅有情侣座</div>
            </div>
        </div>
    )
}

export default DetailService;