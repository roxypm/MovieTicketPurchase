import {
    BrowserRouter, Route, Routes,

} from 'react-router-dom';
import Login from './Login';
import Regist from './Regist';
import UserList from './UserList';
import RouterFilter from './RouterFilter';
function AxiosDemo() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/regist' element={<Regist/>}/>
                <Route path='/' element={<RouterFilter><UserList/></RouterFilter>}/>
                
            </Routes>


        </BrowserRouter>
    )
}
export default AxiosDemo 