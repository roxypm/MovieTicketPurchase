import { Routes, Route,Navigate } from 'react-router-dom'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Main from './home/Main';
import UserInfo from './user/UserInfo';
 
function HomePage() {
    return (
        <>
            {/* 导航栏 */}
            <Nav  />
            <div>
                <Routes>
                    <Route path="/*" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Main />} />
                    <Route path="/movie" element={<h1>电影</h1>} />
                    <Route path="/cinema" element={<h1>影院</h1>} />
                    <Route path="/top" element={<h1>排行</h1>} />
                    <Route path="/userInfo" element={<UserInfo />} />
                    {/* <Route path="/phone" element={<Phone />} />*/}
                </Routes>
            </div>
            <Footer />
        </>
    )
}
export default HomePage;