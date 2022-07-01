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
    const [userid, setUserid] = useState("")
    function user() {

        if (userid) {
            <Link to={{ pathname: "/login" }}>
                <UserOutlined style={{ fontSize: '38px', color: '#999', marginTop: '18px' }} />
            </Link>
        }
        else {
            // <img></img>
            <div>头像</div>
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
                        {user}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;