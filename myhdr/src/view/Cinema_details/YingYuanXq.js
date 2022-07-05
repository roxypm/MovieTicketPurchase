import { Map, Marker, InfoWindow } from 'react-bmapgl';
import { EyeFilled } from '@ant-design/icons'
import DetailService from './DetailService'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import DataList from './DataList'

function YingYuanXq() {
    const navigate = useNavigate();
    const { data } = useContext(DataList);
    if (data == '') {
        return;
    }

    // console.log(data.r[0]);

    const { lng, lat, name, addr } = data.r[0];
    return (
        <>
            <div className="dd">
                {/* 影院图片 */}
                <div className="imgbox">
                    <img src="https://p0.meituan.net/mmdb/fd146c7848a0ebca36eb869dfef7c9331034607.png@292w_292h_1e_1c" alt="" />
                </div>
                {/* 影院服务说明 */}
                <DetailService />
                {/* 影院地址地图 */}
                <div className="mapbox1">
                    <div className="fdtb"><EyeFilled onClick={e => { navigate({ pathname: '/map' }, { state: { lng, lat, name, addr } }) }} /></div>
                    <Map
                        style={{ height: '200px', borderRadius: '10px' }}
                        center={{ lng, lat }}
                        zoom="16"
                        enableScrollWheelZoom
                    >
                        <Marker position={{ lng, lat }} />
                    </Map>
                </div>
            </div>
        </>
    )
}

export default YingYuanXq;