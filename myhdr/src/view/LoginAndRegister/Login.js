import React, { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [tabWay, setTabWay] = useState("pwdWay")
    const [no, setNo] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate()
    async function login(e) {
        e.preventDefault();
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

                navigate({ pathname: '/' })
            } else {
                alert("账号或密码错误")
            }
        
    }
    function tabway(way) {
        console.log("way", way, tabWay);
        setTabWay(way)
        console.log("way", way, tabWay);

    }
    return (
        <div>
            <div className="login" >
                <h2>Login</h2>
                <div className="loginbox">
                    <Link to={{ pathname: "/" }}>  <div className="Xbox">× </div></Link>
                    <div className="tab">
                        <h2 onClick={tabway.bind(null, "pwdWay")} >密码登录</h2> &nbsp;&nbsp;&nbsp;&nbsp;
                        <h2 onClick={tabway.bind(null, "noteWay")} >短信登录</h2>
                    </div>
                    <div className="tabbox" >
                        <div className="pwdWay" style={{ display: (tabWay == 'pwdWay' ? 'block' : 'none') }}>
                            <form onSubmit={login}>
                                <input className="No" type="text" onChange={e => (setNo(e.target.value))} value={no} placeholder="请输入账号" /><br />
                                <input className="Pwd" type="password" onChange={e => (setPwd(e.target.value))} value={pwd} placeholder="请输入密码" /><br />
                                <input className="submit" type="submit" value="登  录" />
                            </form>
                        </div>
                        <div className="noteWay" style={{ display: (tabWay == 'noteWay' ? 'block' : 'none') }}>
                            <form onSubmit={login}>
                                <input className="phone" type="text" onChange={e => (setNo(e.target.value))} value={no} placeholder="请输入手机号" />
                                <span>
                                    发送验证码
                                </span>
                                <br />
                                <input className="ma" type="text" onChange={e => (setPwd(e.target.value))} value={pwd} placeholder="请输入验证码" /><br />
                                <input className="submit" type="submit" value="登  录" />
                            </form>

                        </div>
                        <div>
                            注册
                        </div>

                    </div>


                </div>

                <div className="bottom">

                </div>

            </div>
        </div>

    )
}
export default Login