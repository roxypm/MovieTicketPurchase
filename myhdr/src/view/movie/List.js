import ListItem from './ListItem'
import '../../sass/movie/List.scss'
import React, { useState, useEffect } from "react"
function List ({ page, setPage, listMap }) {
  // const listMap = {
  //   'nowShowing': [{
  //     title: "人生大事",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 9.6,
  //     time: "2022-06-24-18:00",
  //     movieType: "剧情/家庭",
  //     cast: "朱一龙/杨恩又/邓22",
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   },
  //   {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 4.5,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   },
  //   {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 4.5,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   }, {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 4.5,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   }, {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 4.5,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   }, {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 4.5,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   }, {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 4.5,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   },
  //   {
  //     title: "111",
  //     // content: "111xxx",
  //     type: "score",
  //     score: 9.6,
  //     img: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
  //   }],
  //   upComing: [{
  //     title: "222",
  //     type: "wanted",
  //     score: null,
  //     content: "222xxx"
  //   }],
  //   classic: [{
  //     title: "333",
  //     type: "score",
  //     score: 4.5,
  //     content: "333xxx"
  //   }],
  // }
  let newEle
  if (listMap.length) {
    newEle = listMap.map((item, index) => {
      return (
        <ListItem info={item} key={index}></ListItem>
      )
    })
  }
  else {
    newEle = (
      <h3 style={{ marginLeft: '20px' }}>抱歉，没有找到相关结果，请尝试用其他条件筛选。</h3>
    )
  }
  return (
    <div className='movieLists'>
      {/* {page} */}
      {/* {JSON.stringify(listMap[page])} */}
      {newEle}
      {/* {
        listMap.map((item, index) => {
          return (
            <ListItem info={item} key={index}></ListItem>
          )
        })
      } */}
      {/* {JSON.stringify(new Array(6 - listMap.length % 6).fill(''))} */}
      {
        new Array(6 - listMap.length % 6).fill('').map((item, idx) => {
          return <div key={'placehold-' + idx} className="list-item placehold-" >
            <div className='card'></div>
          </div>
        })
      }


    </div>
  )
}
export default List