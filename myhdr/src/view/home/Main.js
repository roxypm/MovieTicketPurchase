import { Link, useNavigate } from 'react-router-dom';
import logo from "../../img/logo.png";
import { Button } from 'antd';
import axios from "axios";
import React, { useState, useEffect } from "react";
import '../../sass/home/home.scss';
function Main() {
    //全部数据
    const [list,setList] = useState([]);
    // 正在热映
    const [mNow, setNow] = useState([]);
    // 即将上映
    const [mNext, setNext] = useState([]);
    //热播电影
    const [mHot, setHot] = useState([]);
    //计算票房
    const [tiket,setTiket] = useState([]);
   
    function getMInfo() {
        axios.get('http://127.0.0.1:8080/getMInfo').then((res) => {
            // console.log(res);
            if (res.data.code == 1) {
                setNow(res.data.movie[0]);
                setNext(res.data.movie[1]);
                setHot(res.data.movie[2]);
                setList(res.data.movie[3]);
            }
        })
    }
    useEffect(() => {
        //发送axios请求
        getMInfo();
    }, [])

    // 正在热映
    function showNow() {
        // console.log(mNow);
        if (mNow !== []) {
            return mNow.map((mInfo, index) => {
                // console.log(index);
                if (index < 8) {
                    return (
                        <dd className="mItem" key={index}>
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={mInfo.movie_img} />
                                    <div className='mimg'>
                                    </div>
                                    <span className='sc'>{mInfo.movie_name}</span>
                                    {mInfo.score !== 0 ?
                                        <span className='na'><i>{mInfo.score}</i></span> : ''
                                    }


                                </Link>

                            </div>
                            <div className='buygo'>
                                <Link to={{ pathname: '/' }} className="buy">
                                    购票
                                </Link>
                            </div>
                        </dd>
                    )
                }

            })

        }


    }
    //即将上映
    function showNext() {
        if ((mNext !== [])) {
            // console.log(mNext);
            return mNext.map((next, index) => {
                if (index < 8) {
                    return (
                        <dd className="mItem1" key={index}>
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={next.movie_img} />
                                    <div className='mimg'>
                                    </div>
                                    <span className='sc'>{next.movie_name}</span>
                                </Link>
                            </div>
                            <p className='want'>{next.movie_want}人想看</p>
                            <div style={{ marginTop: '-14px' }}>
                                <Button className='bt' disabled><p>预告片</p></Button>
                                <button className='btt'>预售</button>
                            </div>
                            <p className='time'>{next.movie_time}上映</p>
                        </dd>
                    )
                }
            })
        }
    }
    // 热播
    function showHot() {
        if ((mHot !== [])) {
            // console.log(mNext);
            return mHot.map((hot, index) => {
                if (index > 0 && index < 7) {
                    return (
                        <dd className="mItem2" key={index}>
                            <div>
                                <Link to={{ pathname: '/' }}>
                                    <img src={hot.movie_img} />
                                    <div className='mimg'>
                                    </div>
                                    <span className='sc'>{hot.movie_name}</span>
                                    <span className='na'>{hot.score}</span>
                                </Link>
                            </div>
                        </dd>


                    )
                }
            })
        }
    }
    // 渲染热播第一条
    function showX() {
       
        if(mHot.length>0) {
            return (
                <Link to={{ pathname: '/' }}>
                    <img src={mHot[0].movie_img} />
                    <span className='sc'>{mHot[0].movie_name}</span>
                    <span className='na'>{mHot[0].score}</span>
                </Link>
            );
        } else {
            return "";
        } 
    }
    //今日大盘
    function today(){
        if(mNow !=[]){
            mNow.sort((a,b)=>{
                return b.tiket - a.tiket;
            })
            console.log(mNow);
            return mNow.map((item,index)=>{
                if(index ===0) {
                   tiket.push(item.tiket);
                   return (
                    <div className='bigbox' key={index}>
                    <div className='box'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAAC4ElEQVRIx92VTYscVRSGn1P39qS6E7vbEZ1ROjMxaTMoImHETIQoRHAjbrIw4HYWwa2/wJ+QVUAkiDshwiyMDEgkYVT8jE0WYcJAhCQ9JKOmp6e/UlXdde/JotXY89GtkSz0QEFRdc9zTr3vPXWl/toR5SFE8DCg/02w3fxAvUeNQa0FZES6ImmKOIcEwc5g9R7dd4DsW29jpqaRbHY4NopwN28QffIxXP95AH7/ThUNQ3LzJ8E5kqWL2NIUmQPPbHvZ0hTJ0kVwjtz8STQMQXUbMECYw0xMEp9bwK/dAhkihQh+7RbxuQXMxCSEuSHmpT200yGYfApNEvB+Z7D3aJL013Y6kPZ2AIsg7RbJ0gXC4ycw+8tor7uzvr0uZn+Z8PgJkqULSLs18IUD5okIvcVP0W5CZvYwrlolODgDdtPmSVNctYotHyQ5v0j6xecEm2STLSOtincOtRmkUCQ7/w7ZN96EPxz3nmjxM6IP30cbG0jaIzBmix9bB0SEwFoMSlC/Q3TmNEnl0p+vk8olojOnCep3+mus3dbk4ZMXGKReI144i8YxGsfEC2eReg0CMzTVMiLEWNzKMn69BoBbWSYwI9NGg/Eebbdwa7f7FrRb/W1o/kXHCuj009jyDEGh2E84egx3bQVZvTn0TzK8YxEkl0OjDp2PPugXcw7J5fqGqT4YWFTRq1dQ1fsM+b3gCJ3/lnkPEv+DE+SvoeBT1Wbi9EbTpZcB8sYe2mVk2orkZUhjW8BONeqq/tJx/sp6r1dZjbs//NRsL39db/4KcPTR/BMv5vc8VwrHDo9nMrO7TfD8mMiEERk4bqR2bC5JlUbk/bVGmlZ+66Y/Xu3cvVxptqvnaxsbpXCX/26jOVD8SDHPapwErz9WLM7m9+x9dnfu0ONj9qWCtbPZIChboSDfzL3wXjXufv9to7Xy1Xrz9qvjhfjU9dV/pOe7+0p8ud4IXxnPP/ly4ZGZveHY3D3KzjdbTNAgKwAAAABJRU5ErkJggg==' />
                        <img src={item.img} />
                    </div>
                    <div className='boxright'>
                        <span className='tText'>{item.movie_name}</span><br />
                        <span className='pf'>{item.tiket}万</span>
                    </div>
                </div>
                   )
                }else if(index > 0 && index < 5){
                    tiket.push(item.tiket);
                     return (
                    <div className='boxC' key={index}>
                    <div>
                        <span className='num'>{index+1}</span>
                        <span className='hname'>{item.movie_name}</span>
                    </div>
                    <div>
                        <span className='pf'>{item.tiket}万</span>
                    </div>
                </div>
                )
                }
               
            })
        }
    }
    //求今日大盘
    function sum(tiket) {
        return eval(tiket.join("+"));
        
      };
    //最受期待
    function want(){
        if(mNext !==[]){
            mNext.sort((a,b)=>{
                return b.movie_want - a.movie_want;
            })
            return mNext.map((item,index)=>{
                if(index ===0) {
                   tiket.push(item.tiket);
                   return (
                    <div className='bigbox1' key={index}>
                            <div className='box1'>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAACkElEQVRIx92Vz29MURTHP+feN50ZU+1UaUW0NKHaaqRBGyoREhtpYiFs7PwBiIUFCxYkjT0bCxJbS4SFiFggFUykaASlaIJK2+lMf82791gQNTrTThddcBYveefe87nf9z0n74reEGURwiwG9D8Ge7WEGkcX0I0SwIqLNKDNF8lV7cNpGTD/CfOCVUETjQT1B4hsvYyrP0HoK+aFB/Op9USR2i4kUg5ApOUUORMl7O8mMOOALFyx94Kr6iKoO/g7J0GcSONR/MpDeF+83BSHKrnEDuzGs0hsed6alFVg1x8njG6gWEcLg1UJo03Y1vPYZEvBLbayGWr347VkKxRHHGk4RlDT+Ufak9cwEUzNLrxJUqiRBRV7uwxbu3vmfayf3OAd8C6/uHwtahML8Vh+L2kuw/SLc2jmDZi/hshE0CKIgllxI7jhZz/VDqeQoduIKZv9ZWPvMD5TKliwZND3l/DZz+jEIMYNw+RAfiem0/iBq1g3TKFZLqxYhCB9jzB1BJd+jbEWHbqLG3sH6vDpt+R6T2O+XkNM4XGTuX703gteKrCSRVUJE+0QW41k+7ATrzDGFSudG/x3qCooiPDrUTyC0pAzFiGl7f33bpA5rVDFh07Skzn9MJo1KYDKhG+LRWRNYLVCpLiwWWDnmZjOyZfMpPR+H+PJp+/y+FGff3knZb4B7GnTFduaTMvqam2vXsqW8pi2lkW01hrif3LEXZep0DE6PmXejGT16dcRHj/vN6me13y89TQ6Urfc+YevJvMO394c4+OQNXs3TyU7Gqnb1ODbapK0JxOyeUnUrwsslfL8gj0z8E16HvTRd783GOzqcFMnrwTARIluxuk+HHKzx0Z3toarOptoql+hHT8AQHUD1vWbGWEAAAAASUVORK5CYII=' />
                                <img src={item.img} />
                            </div>
                            <div className='boxright1'>
                                <p className='tText1'>{item.movie_name}</p>
                                <p className='time1'>上映时间：{item.movie_year}</p>
                                <p className='wantN' style={{color:'#fdb863'}}>{item.movie_want}人想看</p>
                            </div>
                        </div>
              
                   )
                }else if(index > 0 && index < 3){
                    return (
                        <div className='bigbox2' key={index} style={{float:'left',marginRight:'8px'}} >
                                <div>
                                    <div className='num' style={{color:'#999'}}><i>{index+1}</i></div>
                                    <img src={item.img} />
                                    <p className='tText1'>{item.movie_name}</p>
                                    <p className='wantN' style={{color:'#fdb863'}}>{item.movie_want}人想看</p>
                                </div>
                        </div>
                    )
                   
                }else if(index > 2 && index < 10){
                   return(
                    <div className='boxC' key={index}>
                    <div>
                        <span className='num'>{index+1}</span>
                        <span className='hname'>{item.movie_name}</span>
                    </div>
                    <div>
                        <span className='pf' style={{color:'#fdb863'}}>{item.movie_want}人想看</span>
                    </div>
                </div>
                   )
                    
                }
               
            })
        }
    }
    //Top
    function top(){
        if(list !==[]){
            list.sort((a,b)=>{
                return b.score - a.score;
            })
            return list.map((item,index)=>{
                if(index ===0) {
                   return (
                    <div className='bigbox' key={index}>
                    <div className='box'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAACXElEQVRIx92UT0tUURiHn/fcewdN0QltQsMMrAbUSiRzUYG4cNM+gz5Bq9rVymjXskV9hDZtK2oREpSQfzBNk5RamJY6DTIjOt6Zufe8LQpSZxw1kqKzPud5H34v5yf6RJR9OGY/oP852KqDVefPgq015Gt6ydf0Yu3uXNydLqgqQUUHbssdAIKRT3iZN4jI3oytGkLroRZQJTD1mHgfTlUTTlUTJt5HYOpBFbX8uEvhkC3GSmhq0GM3Cdc+QGoIjlzFq+v59aCuh1z6BrkvDyHaiUYO4czfxyUNGwYURCGAiV3EqbmOzXxFIgfBbFiacfBOXEMbryDl9QQz9zB2FYyUMgaxPuovgjiYioai+YlXiXiVaHYZXXqKkXCTbdGMRX10fXFXmw+X32JWxykS8VawgObAn9+Zqha79BxjlylGLjQWILsENijJtZkFJPlia7TbgwE0m0DDbGlwcgDjzxSNoaRxKbCGWeziM4xm2I4shX2sBESx0S5wyoEidW1zmNQrXP22F/BPvC3d/2JKf2n3dx/udP5+H/8z4JJ9rIoNQlnx8zqbXjNjANUVtq3Mk0bX0SqR7cUKwKFlPZeXpVVfJpMrjM4lZWhw2k69nDAJgK5TGuuMm+aGWj1XW0V7ZZm2Rjw97BjKN3IkfCzZIJB0JicfU6s6mkgzPDlrxoZnmHs6EkkdjVk78N7fNPx8SxmfE8ZcOpuLdpykobXRtsWq6YhWSvuBiB53Xa2WiQfu7dmEDL6estP979yF7jOhf/eRB6zvMs1ybl3O0z/ulHWfDuouNJt4Y0w7vwMRnPnoHman9AAAAABJRU5ErkJggg==' />
                        <img src={item.img} />
                    </div>
                    <div className='boxright'>
                        <span className='tText' >{item.movie_name}</span><br />
                        <span className='pf' style={{color:'#fdb863'}}><i>{item.score}分</i></span>
                    </div>
                </div>
              
                   )
                }else if(index > 0 && index <9){
                   return(
                    <div className='boxC' key={index}>
                    <div>
                        <span className='num' style={{color:'#999'}}>{index+1}</span>
                        <span className='hname'>{item.movie_name}</span>
                    </div>
                    <div>
                        <span className='pf' style={{color:'#fdb863'}}><i>{item.score}分</i></span>
                    </div>
                </div>
                   )
                    
                }
               
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
                        {
                            showNext()
                        }
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
                                   {showX()}
                                </div>
                            </dd> 
                    {
                        showHot()
                    }

                </dl>


            </div>
            <div className="right">
                {/* 票房 */}
                <div className='panel'>
                    <div className='titleT'>今日票房</div>
                    <div className='content'>
                        
                        {
                            today()
                        }
                
                    </div>

                </div>
                {/* 今日大盘 */}
                <div className='dp'>
                    <div className='left'>
                        <span>今<br />日<br />大<br />盘<br /></span>
                    </div>
                    <div className='right1'>
                        <span className='num'>{sum(tiket)}万</span>
                        <span className='more'>查看更多&gt;</span><br />
                        <span className='time'>北京时间 {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</span>
                        <span className='time'>猫眼专业版实时票房数据</span>
                    </div>
                </div>
                {/* 最受期待 */}
                <div className='want' style={{marginTop:'0px'}}>
                    <div className='titleQ'>
                        <span className='hope'>最受期待</span>
                        <span className='list'>查看完整榜单&gt;</span>
                    </div>
                    <div className='content'>
                        
                       {
                        want()
                       }
                    </div>
                </div>
                {/* TOP20 */}
                <div className='panel'>
                    <div className='titleQ' style={{ marginTop: '-30px' }}>
                        <span className='hope'>TOP &nbsp;20</span>
                        <span className='list'>查看完整榜单&gt;</span>
                    </div>
                    <div className='content'>
                       
                       {top()}
                        
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Main;