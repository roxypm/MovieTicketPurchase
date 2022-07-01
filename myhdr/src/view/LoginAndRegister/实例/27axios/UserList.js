import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
// 判断跳转登录 方法1：（1）
import getCookieByKey from './util/util'
import { useNavigate } from "react-router-dom"
function UserList() {
    const [list, setList] = useState([])
    // 方法1：（2）
    const navigate = useNavigate()
    useEffect(() => {
        // axiosUser()
        //  方法1：（3）
        let no = getCookieByKey("no")
        if (no) {
            axiosUser()
        } else {
            navigate({ pathname: '/login' })
        }
    }, [])

    async function axiosUser() {
        const url = "http://127.0.0.1:8080/getAllUser";
        let res = await axios.get(url)
        console.log(res);
        let data = res.data

        if (data.state === 1) {
            console.log(data.list);
            setList(data.list)
        } else {
            console.log("请求失败");
        }
    }
    function show() {
        return (
            list.map((user, index) => {
                return (
                    <tr key={index}>
                        <td >{index}</td>
                        {/* <td >{user.img}</td> */}
                        <td >{user.id}</td>
                        <td >{user.no}</td>
                        <td >{user.pwd}</td>
                        <td >{user.name}</td>
                        <td >{user.sex}</td>
                    </tr>
                )
            })
        )
    }
    function loginOut() {
        let d = new Date();
        // d.setTime(d.getTime() - 1000);
        // let t = d.toGMTString()
        // document.cookie = `no=${data.list[0].no};expires=${t}`

    }
    return (
        <div>
            <h3>显示所有的用户</h3>
            <div>
                {/* {axiosUser()} */}
            </div>
            <div>
                <Link to={{ pathname: '/regist' }}>注册</Link>
            </div>
            <div>

                <table>
                    <thead>
                        <tr >
                            <td >index</td>
                            {/* <td >头像</td> */}
                            <td >id</td>
                            <td >账号</td>
                            <td >账号</td>
                            <td >姓名</td>
                            <td >性别</td>
                        </tr>

                    </thead>
                    <tbody>
                        {show()}
                    </tbody>
                </table>
                <button onClick={loginOut}>退出登录</button>
            </div>
        </div>
    )
}
export default UserList