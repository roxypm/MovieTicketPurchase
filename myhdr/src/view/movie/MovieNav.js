
import React from "react"
// import '../../sass/home/home.scss';
import '../../sass/movie/MovieNav.scss'

function MovieNav ({ setPage, page }) {
    function changePage (newPage) {
        setPage(newPage)
    }
    return (
        <div>
            <div className="bottom1">

                <ul >
                    <li onClick={changePage.bind(null, "nowShowing")} className={`${page == 'nowShowing' ? 'active' : ''}`}>正在热映</li>
                    <li onClick={changePage.bind(null, 'upComing')} className={`${page == 'upComing' ? 'active' : ''}`}>即将上映</li>
                    <li onClick={changePage.bind(null, 'classic')} className={`${page == 'classic' ? 'active' : ''}`}>经典影片</li>
                </ul>




            </div>
        </div>
    )
}

export default MovieNav
