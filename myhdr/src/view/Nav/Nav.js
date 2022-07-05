import axios from "axios";
import React, { useState, useEffect } from "react";
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import logo from "../../img/logo.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../sass/home/home.scss';

function Nav() {
    let { pathname } = useLocation();

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
        var userimg = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F68ed43688479acb5c54e787dcb8cdc06f81d8c106c6d-2I11A0_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659506040&t=80f7b79c297625b1d6721fee887a601d"
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
            return (

                <div className="userNav">
                    <div > <Link to={{ pathname: "/userInfo" }}>  <img src={userimg} ></img></Link>  </div><br />
                    <div className="UNbox" onClick={loginOut}>退出登录</div>
                </div>

            )
        }
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