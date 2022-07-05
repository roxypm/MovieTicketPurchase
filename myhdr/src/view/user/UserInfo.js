import "../../css/UserInfo.css"
import React, { useContext, useRef, useState,useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'

function UserInfo() {

    const [no, setNo] = useState("")
    const [pwd, setPwd] = useState("")
    const [name, setName] = useState("")
    const [sex, setSex] = useState("")
    const [img,setImg]= useState("")
    const imgRef = useRef()
 useEffect(() => {       
     console.log("useEffect()")
     {UserIn()}
},[])
    // 获取用户信息
    async function UserIn() {
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
        console.log("UserInfo-useridCookie", userId);
        const url = "http://127.0.0.1:8080/UserIn";
        let res = await axios.post(url, {userId })
       
        let data = res.data
        if (data.code == 0) {
            console.log("获取成功");
            console.log("UserIn",res.data.info[0]);
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
        console.log(no, pwd, name, sex);
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
                    <h2>基本信息</h2>
                    <h2>我的订单</h2>

                </div>
                <div className="Uright">
                    <div className="Info">
                        <h3>基本信息</h3>
                        <form onSubmit={regist}>
                            <div className="uImgbox">
                                <img src={img}></img><br />
                                <input type="file" ref={imgRef} placeholder="名字" />
                            </div>
                            <div>
                                手机号码： <input onChange={e => (setNo(e.target.value))} value={no} placeholder={no}></input>    <br />
                                用户昵称： <input onChange={e => (setName(e.target.value))} value={name} placeholder={name}></input>    <br />
                                用户密码： <input onChange={e => (setPwd(e.target.value))} value={pwd} placeholder={pwd}></input>    <br />
                                性别： <input type="radio" name="sex" value="男" checked={sex == '男'} onChange={(e) => { setSex(e.target.value) }} /> 男
                                <input type="radio" name="sex" value="女" checked={sex == '女'} onChange={(e) => { setSex(e.target.value) }} /> 女
                                <br />
                                <input type="submit" value="保存" />
                            </div>

                        </form>

                    </div>
                    <div className="order">
                        <h2>order</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserInfo