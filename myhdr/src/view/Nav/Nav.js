// import axios from "axios";
import React, { useState, useEffect } from "react";
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import logo from "../../img/logo.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../sass/home/home.scss';
import axios from "axios";

function Nav() {
    let { pathname } = useLocation();
    const [img, setImg] = useState("")
    //选中nav的样式
    const isShow = { backgroundColor: 'rgb(239,66,56)', color: '#fff', heigth: '100%', display: 'inline-block' }

    const navigate = useNavigate()
    // 退出登录
    function loginOut() {
        console.log("loginOut");
        let d = new Date();
        d.setTime(d.getTime() - 1000);
        let t = d.toGMTString()
        document.cookie = `userid=undefined;expires=${t}`
        // setTimeout(navigate({ pathname: '/' }),"30000");
        navigate({ pathname: '/' })

    }
    // 判断是否登录
  function user() {
        //获取cookie字符串
        var strCookie = document.cookie;
        //将多cookie切割为多个名/值对
        var arrCookie = strCookie.split("; ");
        var userId = undefined;
        var userimg = ""
        //遍历cookie数组，处理每个cookie对
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            //找到名称为userId的cookie，并返回它的值
            if ("userid" == arr[0]) {
                userId = arr[1];
                break;
            }
        }
        // console.log("useridCookie", userId);
        if (userId == undefined) {
            return (
                <Link to={{ pathname: "/login" }}>
                    <UserOutlined style={{ fontSize: '38px', color: '#999', marginTop: '18px' }} />
                </Link>
            )
        }
        else {

       {UserIn( userId)}

            return (
                <div className="userNav">
                    <div >
                        <Link to={{ pathname: "/userInfo" }}>
                            <img src={img} />
                        </Link>
                    </div><br />
                    <div className="UNbox" onClick={loginOut}>退出登录</div>
                </div>

            )
        }
    }

     // 获取用户信息
     async function UserIn(userId) {
        // console.log("   async function UserIn(userId)",userId);
        const url = "http://127.0.0.1:8080/UserIn";
        let res = await axios.post(url, { userId })
        let data = res.data
        if (data.code == 0) {
            // console.log("获取成功");
            // console.log("UserIn", res.data.info[0]);
        } else {
            console.log("请求失败");
        }
        // console.log("usrimg", img,res.data.info[0].headimg);
    setImg(res.data.info[0].headimg)
    }


    return (
        <header>
            <div className="headerNav">
                <div className="left">
                    <img src={logo}></img>
                    <h1>GO影院</h1>
                    <div className="box">成都<span></span></div>
                    <div className="box">
                        <Link style={pathname == '/home' ? isShow : null} to={{ pathname: '/home' }} >首页</Link>
                    </div>
                    <div className="box">
                        <Link style={pathname == '/movie' ? isShow : null} to='/movie' >电影</Link>
                    </div>
                    <div className="box">
                        <Link style={pathname == '/cinema' ? isShow : null} to='/cinema' >影院</Link>
                    </div>
                    <div className="box">
                        <Link style={pathname == '/top' ? isShow : null} to='/top' >排行</Link>
                    </div>
                </div>

                <div className="right">
                    <div className="serch">
                        <Input placeholder="找影视" />
                        <Button type="primary" shape="circle" className="butt" icon={<SearchOutlined />} />
                    </div>
                    <div className="user">
                        {user()}



                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;