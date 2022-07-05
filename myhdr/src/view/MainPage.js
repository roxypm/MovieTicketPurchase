import { Routes, Route,Navigate } from 'react-router-dom'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Main from './home/Main';
import Select from './selectSeat/select';
import Show from './cinema/Show'
function HomePage() {
    return (
        <>
            {/* 导航栏 */}
            <Nav />
            <div>
                <Routes>
                    <Route path="/*" element={<Navigate to="/select" />} />
                    <Route path="/home" element={<Main />} />
                    <Route path="/movie" element={<h1>电影</h1>} />
                    <Route path="/cinema" element={<Show />} />
                    <Route path="/top" element={<h1>排行</h1>} />
                    <Route path="/top" element={<h1>排行</h1>} />
                    <Route path="/select" element={<Select />} />
                    {/* <Route path="/phone" element={<Phone />} />*/}
                </Routes>
            </div>
            <Footer />
        </>
    )
}
export default HomePage;