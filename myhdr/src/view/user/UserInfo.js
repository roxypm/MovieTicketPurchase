import "../../css/UserInfo.css"
import React, { useContext, useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'

function UserInfo() {
    const [tabv, setTabv] = useState("myInfo")
    const [no, setNo] = useState("")
    const [pwd, setPwd] = useState("")
    const [pwd2, setPwd2] = useState("")
    const [name, setName] = useState("")
    const [sex, setSex] = useState("")
    const [img, setImg] = useState("")

    const imgRef = useRef()
    useEffect(() => {
        console.log("useEffect()")
        { UserIn() }
    }, [])
    function tabvway(way) {
        setTabv(way)
    }
    // 获取用户信息
    async function UserIn() {
        //获取cookie字符串
        var strCookie = document.cookie;
        //将多cookie切割为多个名/值对
        var arrCookie = strCookie.split("; ");
        var userId = undefined;
        //遍历cookie数组，处理每个cookie对
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            //找到名称为userId的cookie，并返回它的值
            if ("userid" == arr[0]) {
                userId = arr[1];
                break;
            }
        }
        console.log("UserInfo-useridCookie", userId);
        const url = "http://127.0.0.1:8080/UserIn";
        let res = await axios.post(url, { userId })

        let data = res.data
        if (data.code == 0) {
            console.log("获取成功");
            console.log("UserIn", res.data.info[0]);
        } else {
            console.log("请求失败");
        }
        setImg(res.data.info[0].headimg)
        setNo(res.data.info[0].no)
        setPwd(res.data.info[0].pwd)
        setName(res.data.info[0].name)
        setSex(res.data.info[0].sex)

    }

    function regist(e) {
        e.preventDefault();
        console.log(no, pwd, pwd2,name, sex);
        console.log(imgRef.current.files[0]);
        let file = imgRef.current.files[0];
        let formData = new FormData();
        formData.append("uploadFile", file, file.name);
        formData.append("no", no);
        formData.append("pwd", pwd);
        formData.append("name", name);
        // formData.append("sex", sex);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
            }
        };
        let url = "http://localhost:8080/registUser.do"
        let promise = axios.post(url, formData, config);

        promise.then(res => {
            let r = res.data;
            console.log("res.data", r)
            if (res.data.state == 1) {
                console.log("注册成功");
                Navigate({ pathname: '/userlist' })
            } else {
                console.log("注册失败");
            }
        })

    }
    return (
        <div className="UserInfo">
            <div className="UserInfobox">
                <div className="Uleft">
                    <h1>个人中心</h1>
                    <h2 onClick={tabvway.bind(null, "myInfo")} className={(tabv == 'myInfo' ? 'tabedd' : 'none')}>基本信息</h2>
                    <h2 onClick={tabvway.bind(null, "myOrder")} className={(tabv == 'myOrder' ? 'tabedd' : 'none')}>我的订单</h2>
                </div>
                <div className="Uright">
                    <div className="Info"  style={{ display: (tabv == 'myInfo' ? 'block' : 'none') }}>
                        <h3>基本信息</h3>
                        <form onSubmit={regist}>
                            <div className="uImgbox">
                                <img src={img}></img><br />
                                <input type="file" ref={imgRef} placeholder="名字" />
                            </div>
                            <div>
                        
                           手机号码： <input onChange={e => (setNo(e.target.value))} value={no} placeholder={no}></input>    <br />
                                用户昵称： <input onChange={e => (setName(e.target.value))} value={name} placeholder={name}></input>    <br />
                                用户密码： <input type="password" onChange={e => (setPwd(e.target.value))} value={pwd} placeholder="请输入密码"/>    <br />
                                再次确认： <input type="password" onChange={e => (setPwd2(e.target.value))} value={pwd2} placeholder="请再输入密码"/>    <br />
                         
                           <div className="usex">
                            性别： 
                                <input type="radio" name="sex" value="男" checked={sex == '男'} onChange={(e) => { setSex(e.target.value) }} /> 男
                                <input type="radio" name="sex" value="女" checked={sex == '女'} onChange={(e) => { setSex(e.target.value) }} /> 女
                                
                                </div>
                                <br />
                                <input type="submit" value="保存" className="usersubmit" />
                            </div>

                        </form>

                    </div>
                    <div className="Order"  style={{ display: (tabv == 'myOrder' ? 'block' : 'none') }}>
                        <h2>order</h2>
                        <h2>order</h2>
                        <h2>order</h2>
                        <h2>order</h2>
                        <h2>order</h2>
                        <h2>order</h2>
                        <h2>order</h2>
                        <h2>order</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserInfo