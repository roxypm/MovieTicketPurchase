import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../sass/movie/ListItem.scss'
function ListItem ({ info }) {
  const [hoverState, setHoverState] = useState(false)
  const navigate = useNavigate()
  function handleEnter (ev) {
    setHoverState(true)
    console.log(ev, 'handleEnter')
  }
  function handleLeave (ev) {
    setHoverState(false)
    console.log(ev, 'handleLeave')
  }
  function tiaozhuan (params) {
    console.log(1111)
    console.log(params)
    navigate({ pathname: '/moviedetail/' + params })
  }
  return (
    <div className='list-item' onClick={tiaozhuan.bind(null, info.id)}>
      <div className={hoverState ? 'card active ' : 'card'} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <img src={info.movie_img} alt="" />
        {
          hoverState ? <div className='back-info-box'>
            <div className='top-box'>
              <div style={{ fontSize: '14px' }}>{info.movie_name}</div>
              <div style={{ color: '#ffb400', fontSize: '14px', fontStyle: ' italic' }}> {info.score}</div>
            </div>
            <div >
              <span>类型：</span>
              <span> {info.movie_type}</span>
            </div>
            <div className='type'>
              <span>主演：</span>
              <span style={{ color: '#999' }}>{info.star}</span>
            </div>
            <div>
              <span>  上映时间：</span>
              <span style={{ color: '#999' }}> {info.movie_time}</span>
            </div>



          </div> : null
        }

      </div>
      <div className='list-info-box'>
        {info.movie_name}
      </div>
      <div className='list-info-box2'>
        {info.score}

      </div>
    </div>
  )
}
export default ListItem

