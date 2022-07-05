import { Link, useNavigate } from 'react-router-dom';
import { HeartFilled, StarFilled } from '@ant-design/icons';
import '../../sass/cinema/Show.scss'
import CinemaDetail from '../cinema/CinemaDetail'

function Show() {
    return (
        <div>
            <div>
                <div className="box-out">
                    <div className="box-in">
                        <div className="box-in-lefft">
                            
                            <img className='box-in-img' src="https://p0.pipi.cn/mmdb/25bfd671b12f2ad7c3d7c37db5a7ce2aadac9.jpg?imageView2/1/w/464/h/644" alt="" />
                            <div className='block'>
                                <div className='block1'></div>
                                <div className='block2'></div>
                                <div className='block3'></div>
                            </div>
                        </div>
                        <div className="box-in-mid">
                            <div className='mid-up'>
                                <div className='title'>一周的朋友</div>
                                <div className='title-e'>One week friends</div>
                                <ul>
                                    <li>
                                        <a href="">剧情</a>
                                        <a href="">青春</a>
                                    </li>
                                    <li>中国大陆/106分钟</li>
                                    <li>2022-06-18 09:00中国大陆上映</li>
                                </ul>
                            </div>
                            <div className='mid-bottom'>
                                <button className='btn-up1'><HeartFilled /> 想看</button>
                                <button className='btn-up2'><StarFilled /> 评分</button>
                                <button className='btn-bottom1'>查看更多电影详情</button>
                            </div>

                        </div>
                        <div className="box-in-right">
                            <div className='right-up'>
                                <div className='koubei'>猫眼口碑</div>
                                <span>8.0</span>
                                <div className='star-score'>
                                    <div className='star-lit'></div>
                                    <div className='star-down'></div>
                                    <div className='score'>562221人评分</div>
                                </div>
                            </div>
                            <div className='right-bottom'>
                                <div className='money'>累计票房</div>
                                <div className='money-number'>
                                    <span>9821</span>
                                    万</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <CinemaDetail />
        </div>
    )
}
export default Show