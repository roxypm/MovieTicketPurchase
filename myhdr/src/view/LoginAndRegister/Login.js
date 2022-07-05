import React, { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { CloseOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons'
function Login() {
    const [tabWay, setTabWay] = useState("pwdWay")
    const [no, setNo] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate()
    var telStr = /^[1]([3-9])[0-9]{9}$/
    async function plogin(e) {
        e.preventDefault();
        if (!(telStr.test(no))) {
            alert("手机格式错误")
        }else{
            console.log(no, pwd);
            const url = "http://127.0.0.1:8080/userLogin";
            let res = await axios.post(url, { no, pwd })
            console.log(res);
            let data = res.data;
            if (data.code == 0) {
                console.log("登录成功");
                // 浏览器关闭失效
                // document.cookie=`no=${data.list[0].no}`
                // 20秒后失效
                let d = new Date();
                d.setTime(d.getTime() + (1200 * 60 * 1000));
                let t = d.toGMTString()
    
                document.cookie = `userid=${data.userid};expires=${t}`
                console.log(" document.cookie ", document.cookie);
                navigate({ pathname: '/' })
            } else {
                alert("账号或密码错误")
            }
    
        }
        
        
    }
    async function nlogin(e) {
        e.preventDefault();
        console.log(no, pwd);
    }
    function tabway(way) {
        setTabWay(way)
    }
    function phonejudge() {
        if (!(telStr.test(no))) {
            return (<span className="pfalse">×</span>)
        } else {
            return (<span className="ptrue">√</span>
            )
        }

    }
    return (
        <div className="LO">
            <div className="login" >

                <div className="loginbox">
                    <Link to={{ pathname: "/" }}>  <div className="Xbox"><CloseOutlined /></div></Link>
                    <div className="tab">
                        <h2 onClick={tabway.bind(null, "pwdWay")} className={(tabWay == 'pwdWay' ? 'tabed' : 'none')}>密码登录</h2> &nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 onClick={tabway.bind(null, "noteWay")} className={(tabWay == 'noteWay' ? 'tabed' : 'none')}>短信登录</h2>
                    </div>
                    <div className="tabbox" >
                        <div className="pwdWay" style={{ display: (tabWay == 'pwdWay' ? 'block' : 'none') }}>
                            <form onSubmit={plogin}>
                                &nbsp; <PhoneOutlined /> <input className="No" type="text" onChange={e => (setNo(e.target.value))} value={no} placeholder="请输入账号（手机号）" />{phonejudge()}<br />
                                <LockOutlined /><input className="Pwd" type="password" onChange={e => (setPwd(e.target.value))} value={pwd} placeholder="请输入密码" /><br />
                                &nbsp; &nbsp; <input className="submit" type="submit" value="登  录" />
                            </form>
                        </div>
                        <div className="noteWay" style={{ display: (tabWay == 'noteWay' ? 'block' : 'none') }}>
                            <form onSubmit={nlogin}>
                                &nbsp;<PhoneOutlined /> <input className="phone" type="text" onChange={e => (setNo(e.target.value))} value={no} placeholder="请输入手机号" />
                                {phonejudge()}
                                <br />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input className="ma" type="text" onChange={e => (setPwd(e.target.value))} value={pwd} placeholder="请输入验证码" />
                                <span>发送验证码</span>
                                <br />
                                &nbsp; &nbsp; <input className="submit" type="submit" value="登  录" />
                            </form>
                        </div>
                        <div className="tips">
                            注：未登录过的账号自动注册
                        </div>

                    </div>


                </div>

                {/* <div className="bottom">
                </div> */}

            </div>
        </div>

    )
}
export default Login