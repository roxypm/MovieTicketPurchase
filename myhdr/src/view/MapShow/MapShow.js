import $ from 'jquery';
import { useState, useEffect } from 'react';
import { Map, Marker, NavigationControl, InfoWindow, MapTypeControl, AutoComplete } from 'react-bmapgl';
import { useLocation, useParams } from 'react-router-dom';


function MapShow() {

    //经纬度和弹框小盒子
    const [lng, setLng] = useState(116.402544)
    const [lat, setLat] = useState(39.928216)
    const [showInfo, setShowInfo] = useState({ name: '', address: '' })

    // params传参获取参数
    const dd = useLocation();

    //获取电影院的位置
    const lng1 = dd.state.lng;
    const lat1 = dd.state.lat;
    const { name, addr } = dd.state;

    //经纬度和弹框小盒子
    const [mylng, setMyLng] = useState(104.053638)
    const [mylat, setMyLat] = useState(30.701045)

    useEffect(() => {

        setLng(lng1);
        setLat(lat1);
        showInfo.name = name;
        showInfo.address = addr;
        setShowInfo({ ...showInfo });
        //本机IP地址
        let ip = sessionStorage.getItem('ip');
        // console.log('本机IP地址:', ip);

        let url = `https://api.map.baidu.com/location/ip?ak=499YYfqro2l12GjG6V4YGsol3YmHXBwo&ip=${ip}&coor=bd09ll`;

        // $.ajax({
        //     url,
        //     type: 'GET',
        //     dataType: 'jsonp',
        //     success: data => {
        //         console.log(data.content.point);
        //         setMyLng(data.content.point.x);
        //         setMyLat(data.content.point.y);
        //     }
        // });
    }, [])

    //选中目标地址触发
    function Confirm(e) {
        // console.log(e.item.value);
        let url = `https://api.map.baidu.com/place/v2/search?query=${e.item.value.business}&region=${e.item.value.city}&output=json&ak=499YYfqro2l12GjG6V4YGsol3YmHXBwo`;
        $.ajax({
            url,
            type: 'GET',
            dataType: 'jsonp',
            success: data => {
                //data对象中包含有经纬度
                // console.log(data.results[0]);
                const { lat, lng } = data.results[0].location;
                const { name, address } = data.results[0];
                showInfo.name = name;
                showInfo.address = address || e.item.value.city;
                setShowInfo({ ...showInfo });
                setLat(lat);
                setLng(lng);
            }
        });
    }

    return (
        <div className='mapshow'>
            {/* 搜索框 */}
            <div className='mapbox'>
                <AutoComplete
                    // onHighlight={e => { console.log(e) }}
                    onConfirm={Confirm}
                // onSearchComplete={e => { console.log(e) }}
                />
                {/* <button onClick={Search}>查找</button> */}
            </div>
            <Map
                style={{ height: '100vh' }}
                center={{ lng: lng, lat: lat }}
                zoom="16"
                enableScrollWheelZoom
            >
                {/* 电影院的位置 */}
                <Marker position={{ lng, lat }} />
                <InfoWindow position={{ lng, lat }} text={showInfo.address} title={showInfo.name} />

                {/* 我的位置 */}
                <Marker icon={'loc_blue'} position={{ lng: mylng, lat: mylat }} />

                <NavigationControl />
                <MapTypeControl />
            </Map>
        </div>
    );
}

export default MapShow;
