import { Link, useNavigate } from 'react-router-dom';
import logo from "../../img/logo.png";
import { Button } from 'antd';
import axios from "axios";
import React, { useState, useEffect } from "react";
import '../../sass/home/home.scss';
function Main() {
    // 正在热映
    const [mNow, setNow] = useState([]);
    // 即将上映
    const [mNext, setNext] = useState([]);
    //热播电影
    const [mHot, setHot] = useState([]);
    function getMInfo() {
        axios.get('http://127.0.0.1:80/getMInfo').then((res) => {
            console.log(res.data.movie[0]);
            if (res.data.code == 1) {
                setNow(res.data.movie[0]);
                setNext(res.data.movie[1]);
                setHot(res.data.movie[2]);
            }
        })
    }
    useEffect(() => {
        //发送axios请求
        getMInfo();
    }, [])
    function showNow() {
        console.log(mNow);
        if (mNow != []) {

            return mNow.map((mInfo, index) => {
                // console.log(index);
                return (
                    <dd className="mItem" key={index}>
                        <div>

                            <Link to={{ pathname: '/' }}>
                                <img src={mInfo.movie_img} />
                                <div className='mimg'>
                                </div>
                                <span><i>{mInfo.score}</i></span>
                                <span>{mInfo.movie_name}</span>



                            </Link>

                        </div>
                        <div className='buygo'>
                            <Link to={{ pathname: '/' }} className="buy">
                                购票
                            </Link>
                        </div>
                    </dd>

                )
            })

        }

    }
    return (
        <div className="main">
            <div className="left">
                {/* 正在热映 */}
                <div>
                    <div className="titleText">
                        <h2 className='hot'>正在热映</h2>
                        <div className='hot'>全部&gt;</div>
                    </div>
                    <dl>
                        {
                            showNow()
                        }
                    </dl>
                </div>
                {/* 即将上映 */}
                <div>
                    <div className="titleText">
                        <h2 className='will'>即将上映</h2>
                        <div className='will'>全部&gt;</div>
                    </div>
                    <dl>
                        <dd className="mItem1">
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={logo}>
                                    </img>
                                    <span>人生大事</span>
                                </Link>
                            </div>
                            <p className='want'>想看</p>
                            <div style={{ marginTop: '-14px' }}>
                                <Button className='bt' disabled><p>预告片</p></Button>
                                <button className='btt'>预售</button>
                            </div>
                            <p className='time'>7月1日上映</p>


                        </dd>
                        <dd className="mItem">
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={logo}></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={{ pathname: '/' }} className="buy">
                                    购票
                                </Link>
                            </div>


                        </dd>
                        <dd className="mItem">
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={logo}></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={{ pathname: '/' }} className="buy">
                                    购票
                                </Link>
                            </div>


                        </dd>
                        <dd className="mItem">
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={logo}></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={{ pathname: '/' }} className="buy">
                                    购票
                                </Link>
                            </div>
                        </dd>
                        <dd className="mItem">
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={logo}></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={{ pathname: '/' }} className="buy">
                                    购票
                                </Link>
                            </div>
                        </dd>
                    </dl>
                </div>
                {/* 热播电影 */}
                <div className="titleText">
                    <h2 className='hot'>热播电影</h2>
                    <div className='hot'>全部&gt;</div>
                </div>
                <dl>
                    <dd className="mItem21">
                        <div>
                            <Link to={{ pathname: '/' }}>
                                <img src={logo} />
                                <span>人生大事</span>
                                <span>9.6</span>
                            </Link>
                        </div>
                    </dd>
                    <dd className="mItem2">
                        <div>
                            <Link to={{ pathname: '/' }}>
                                <img src={logo} />
                                <span>人生大事</span>
                                <span>9.6</span>
                            </Link>
                        </div>
                    </dd>

                    <dd className="mItem2">
                        <div>
                            <Link to={{ pathname: '/' }}>
                                <img src={logo}></img>
                            </Link>
                        </div>
                    </dd>
                    <dd className="mItem2">
                        <div>
                            <Link to={{ pathname: '/' }}>
                                <img src={logo}></img>
                            </Link>
                        </div>

                    </dd>
                    <dd className="mItem2">
                        <div>
                            <Link to={{ pathname: '/' }}>
                                <img src={logo}></img>
                            </Link>
                        </div>
                    </dd>
                </dl>


            </div>
            <div className="right">
                {/* 票房 */}
                <div className='panel'>
                    <div className='titleT'>今日票房</div>
                    <div className='content'>
                        <div className='bigbox'>
                            <div className='box'>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAAC4ElEQVRIx92VTYscVRSGn1P39qS6E7vbEZ1ROjMxaTMoImHETIQoRHAjbrIw4HYWwa2/wJ+QVUAkiDshwiyMDEgkYVT8jE0WYcJAhCQ9JKOmp6e/UlXdde/JotXY89GtkSz0QEFRdc9zTr3vPXWl/toR5SFE8DCg/02w3fxAvUeNQa0FZES6ImmKOIcEwc5g9R7dd4DsW29jpqaRbHY4NopwN28QffIxXP95AH7/ThUNQ3LzJ8E5kqWL2NIUmQPPbHvZ0hTJ0kVwjtz8STQMQXUbMECYw0xMEp9bwK/dAhkihQh+7RbxuQXMxCSEuSHmpT200yGYfApNEvB+Z7D3aJL013Y6kPZ2AIsg7RbJ0gXC4ycw+8tor7uzvr0uZn+Z8PgJkqULSLs18IUD5okIvcVP0W5CZvYwrlolODgDdtPmSVNctYotHyQ5v0j6xecEm2STLSOtincOtRmkUCQ7/w7ZN96EPxz3nmjxM6IP30cbG0jaIzBmix9bB0SEwFoMSlC/Q3TmNEnl0p+vk8olojOnCep3+mus3dbk4ZMXGKReI144i8YxGsfEC2eReg0CMzTVMiLEWNzKMn69BoBbWSYwI9NGg/Eebbdwa7f7FrRb/W1o/kXHCuj009jyDEGh2E84egx3bQVZvTn0TzK8YxEkl0OjDp2PPugXcw7J5fqGqT4YWFTRq1dQ1fsM+b3gCJ3/lnkPEv+DE+SvoeBT1Wbi9EbTpZcB8sYe2mVk2orkZUhjW8BONeqq/tJx/sp6r1dZjbs//NRsL39db/4KcPTR/BMv5vc8VwrHDo9nMrO7TfD8mMiEERk4bqR2bC5JlUbk/bVGmlZ+66Y/Xu3cvVxptqvnaxsbpXCX/26jOVD8SDHPapwErz9WLM7m9+x9dnfu0ONj9qWCtbPZIChboSDfzL3wXjXufv9to7Xy1Xrz9qvjhfjU9dV/pOe7+0p8ud4IXxnPP/ly4ZGZveHY3D3KzjdbTNAgKwAAAABJRU5ErkJggg==' />
                                <img src={logo} />
                            </div>
                            <div className='boxright'>
                                <span className='tText'>人身大事</span><br />
                                <span className='pf'>2927.97</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 今日大盘 */}
                <div className='dp'>
                    <div className='left'>
                        <span>今<br />日<br />大<br />盘<br /></span>
                    </div>
                    <div className='right1'>
                        <span className='num'>2222222</span>
                        <span className='more'>查看更多&gt;</span><br />
                        <span className='time'>北京时间 {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</span>
                        <span className='time'>猫眼专业版实时票房数据</span>
                    </div>
                </div>
                {/* 最受期待 */}
                <div className='want'>
                    <div className='titleQ'>
                        <span className='hope'>最受期待</span>
                        <span className='list'>查看完整榜单&gt;</span>
                    </div>
                    <div className='content'>
                        <div className='bigbox1'>
                            <div className='box1'>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAACkElEQVRIx92Vz29MURTHP+feN50ZU+1UaUW0NKHaaqRBGyoREhtpYiFs7PwBiIUFCxYkjT0bCxJbS4SFiFggFUykaASlaIJK2+lMf82791gQNTrTThddcBYveefe87nf9z0n74reEGURwiwG9D8Ge7WEGkcX0I0SwIqLNKDNF8lV7cNpGTD/CfOCVUETjQT1B4hsvYyrP0HoK+aFB/Op9USR2i4kUg5ApOUUORMl7O8mMOOALFyx94Kr6iKoO/g7J0GcSONR/MpDeF+83BSHKrnEDuzGs0hsed6alFVg1x8njG6gWEcLg1UJo03Y1vPYZEvBLbayGWr347VkKxRHHGk4RlDT+Ufak9cwEUzNLrxJUqiRBRV7uwxbu3vmfayf3OAd8C6/uHwtahML8Vh+L2kuw/SLc2jmDZi/hshE0CKIgllxI7jhZz/VDqeQoduIKZv9ZWPvMD5TKliwZND3l/DZz+jEIMYNw+RAfiem0/iBq1g3TKFZLqxYhCB9jzB1BJd+jbEWHbqLG3sH6vDpt+R6T2O+XkNM4XGTuX703gteKrCSRVUJE+0QW41k+7ATrzDGFSudG/x3qCooiPDrUTyC0pAzFiGl7f33bpA5rVDFh07Skzn9MJo1KYDKhG+LRWRNYLVCpLiwWWDnmZjOyZfMpPR+H+PJp+/y+FGff3knZb4B7GnTFduaTMvqam2vXsqW8pi2lkW01hrif3LEXZep0DE6PmXejGT16dcRHj/vN6me13y89TQ6Urfc+YevJvMO394c4+OQNXs3TyU7Gqnb1ODbapK0JxOyeUnUrwsslfL8gj0z8E16HvTRd783GOzqcFMnrwTARIluxuk+HHKzx0Z3toarOptoql+hHT8AQHUD1vWbGWEAAAAASUVORK5CYII=' />
                                <img src={logo} />
                            </div>
                            <div className='boxright1'>
                                <p className='tText1'>人身大事</p>
                                <p className='time1'>上映时间：2022</p>
                                <p className='wantN'>1111人想看</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='bigbox2'>
                                <div>
                                    <div className='num'><i>2</i></div>
                                    <img src={logo} />
                                    <p className='tText1'>人身大事</p>
                                    <p className='wantN'>1111人想看</p>
                                </div>

                            </div>
                            <div className='bigbox2' style={{ marginLeft: '15px' }}>
                                <div>
                                    <div className='num'><i>3</i></div>
                                    <img src={logo} />
                                    <p className='tText1'>人身大事</p>
                                    <p className='wantN'>1111人想看</p>
                                </div>

                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TOP20 */}
                <div className='panel'>
                    <div className='titleQ' style={{ marginTop: '-30px' }}>
                        <span className='hope'>TOP &nbsp;20</span>
                        <span className='list'>查看完整榜单&gt;</span>
                    </div>
                    <div className='content'>
                        <div className='bigbox'>
                            <div className='box'>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAACXElEQVRIx92UT0tUURiHn/fcewdN0QltQsMMrAbUSiRzUYG4cNM+gz5Bq9rVymjXskV9hDZtK2oREpSQfzBNk5RamJY6DTIjOt6Zufe8LQpSZxw1kqKzPud5H34v5yf6RJR9OGY/oP852KqDVefPgq015Gt6ydf0Yu3uXNydLqgqQUUHbssdAIKRT3iZN4jI3oytGkLroRZQJTD1mHgfTlUTTlUTJt5HYOpBFbX8uEvhkC3GSmhq0GM3Cdc+QGoIjlzFq+v59aCuh1z6BrkvDyHaiUYO4czfxyUNGwYURCGAiV3EqbmOzXxFIgfBbFiacfBOXEMbryDl9QQz9zB2FYyUMgaxPuovgjiYioai+YlXiXiVaHYZXXqKkXCTbdGMRX10fXFXmw+X32JWxykS8VawgObAn9+Zqha79BxjlylGLjQWILsENijJtZkFJPlia7TbgwE0m0DDbGlwcgDjzxSNoaRxKbCGWeziM4xm2I4shX2sBESx0S5wyoEidW1zmNQrXP22F/BPvC3d/2JKf2n3dx/udP5+H/8z4JJ9rIoNQlnx8zqbXjNjANUVtq3Mk0bX0SqR7cUKwKFlPZeXpVVfJpMrjM4lZWhw2k69nDAJgK5TGuuMm+aGWj1XW0V7ZZm2Rjw97BjKN3IkfCzZIJB0JicfU6s6mkgzPDlrxoZnmHs6EkkdjVk78N7fNPx8SxmfE8ZcOpuLdpykobXRtsWq6YhWSvuBiB53Xa2WiQfu7dmEDL6estP979yF7jOhf/eRB6zvMs1ybl3O0z/ulHWfDuouNJt4Y0w7vwMRnPnoHman9AAAAABJRU5ErkJggg==' />
                                <img src={logo} />
                            </div>
                            <div className='boxright'>
                                <span className='tText'>人身大事</span><br />
                                <span className='pf'>2927.97</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                        <div className='boxC'>
                            <div>
                                <span className='num'>2</span>
                                <span className='name'>朱逻辑世界3</span>
                            </div>
                            <div>
                                <span className='pf'>2222</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Main;