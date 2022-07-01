
import {Navigate} from 'react-router-dom';
import getCookieByKey from "./util/util"
function RouterFilter({children}) {
 
let no=getCookieByKey("no");
if(no){//登陆过
    let d=new Date();
    d.setTime(d.getTime()+(20*60*1000))
    
    return children
}else{//没有登陆过
    return <Navigate to='/login'/>
}

 
}
export default RouterFilter;