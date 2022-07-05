import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Main from './home/Main'
import UserInfo from './user/UserInfo'
import Select from './selectSeat/select'
import Show from './cinema/Show'
import Movie from './movie/Movie'

import CinemaDetails from './Cinema_details/CinemaDetails'


function HomePage () {
    return (
        <>
            {/* 导航栏 */}
            <Nav />
            <div>
                <Routes>
                    <Route path="/*" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Main />} />
                    <Route path="/movie" element={<Movie />} />//
                    {/* <Route path="/moviedetail/:id" element={<Details />} /> */}
                    <Route path="/moviedetail/:id" element={<Movie />} />


                    <Route path="/cinema" element={<Show />} />
                    <Route path="/top" element={<h1>排行</h1>} />
                    <Route path="/userInfo" element={<UserInfo />} />
                    <Route path="/top" element={<h1>排行</h1>} />
                    <Route path="/select" element={<Select />} />
                    <Route path="/cinema/:id" element={<CinemaDetails />} />

                    {/* <Route path="/phone" element={<Phone />} />*/}
                </Routes>
            </div>
            <Footer />
        </>
    )
}
export default HomePage