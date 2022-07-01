import React,{useContext,useRef,useState} from 'react';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom'
function Regist() {
    const [no, setNo] = useState("")
    const [pwd, setPwd] = useState("")
    const [name, setName] = useState("")
    const [sex, setSex] = useState("")
    const imgRef = useRef()
 

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
        formData.append("sex", sex);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
            }
        };
        let url="http://localhost:8080/registUser.do"
        let promise = axios.post(url, formData, config);

        // try {
        //     let res = await promise
        //     console.log(res.data);

        // } catch (e) {
        //     console.log(e);
        // }
        promise.then(res=>{
			let r = res.data;
			console.log("res.data",r)
            if(res.data.state==1){

                console.log("注册成功");
                Navigate({pathname:'/userlist'})
            }else{
                console.log("注册失败");
            }
		}) 

    }

    return (
        <div>
            <h3>Regist</h3>
            <form onSubmit={regist}>
                <input onChange={e => (setNo(e.target.value))} value={no} placeholder="账号"></input>
                <input onChange={e => (setPwd(e.target.value))} value={pwd} placeholder="密码"></input>
                <input onChange={e => (setName(e.target.value))} value={name} placeholder="名字"></input>
                <input type="radio" name="sex" value="男" checked={sex == '男'} onChange={(e) => { setSex(e.target.value) }} /> 男
                <input type="radio" name="sex" value="女" checked={sex == '女'} onChange={(e) => { setSex(e.target.value) }} /> 女
                <input type="file" ref={imgRef} />
                {/* <input type="file" ref={inputFile}/><br /> */}
                <input type="submit" value="注册" />
            </form>

        </div>
    )
}
export default Regist