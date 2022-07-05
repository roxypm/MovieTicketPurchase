import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [no, setNo] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate()
    async function login(e) {
        e.preventDefault();
        console.log(no, pwd);
        const url = " http://127.0.0.1:8080/adminLogin.do";
        let res = await axios.post(url, { no, pwd })
        console.log(res);
        let data = res.data;
        if (data.state == 1) {
            if (data.list.length == 1) {
                console.log("登录成功");
                // 浏览器关闭失效
                // document.cookie=`no=${data.list[0].no}`
                // 20秒后失效
                let d = new Date();
                d.setTime(d.getTime() + (20 * 60 * 1000));
                let t = d.toGMTString()
                document.cookie = `no=${data.list[0].no};expires=${t}`
                navigate({ pathname: '/' })
            } else {
                alert("账号或密码错误")
            }
        }
    }
    return (
        <div>
            <h3>管理员登录</h3>
            <form onSubmit={login}>
                账号：<input onChange={e => (setNo(e.target.value))} value={no} /><br />
                密码：<input onChange={e => (setPwd(e.target.value))} value={pwd} /><br />
                <input type="submit" value="管理员登陆" />
            </form>
        </div>
    )
}
export default Login