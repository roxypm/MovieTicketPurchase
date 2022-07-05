function MovieMid ({ ageSelect, setAgeSelect, areaSelect, setAreaSelect, movieTypeSelect, setMovieTypeSelect }) {
  const listMid = {
    typess: [
      "爱情", "喜剧", "动画", "剧情",

    ],
    year: [
      2022, 2021, 2020, 2019
    ],
    area: [
      "大陆", "美国", "韩国", "日本"
    ],


  }
  return (
    <div className="cinema-detail-box">

      <div className='brand selectBox'>类型：
        <div className='item-name'>
          <li className={`${movieTypeSelect == '' ? 'active' : ''}`} onClick={() => setMovieTypeSelect('')} >全部</li>
          {listMid['typess'].map((item, index) => {
            return (
              <li key={index} className={`${movieTypeSelect == item ? 'active' : ''}`} onClick={() => setMovieTypeSelect(item)}  ><a >{item}</a></li>
            )

          })}
        </div>
      </div>
      <div className='place selectBox'>区域：
        <div className='item-name'>
          <li className={`${areaSelect == '' ? 'active' : ''}`} onClick={() => setAreaSelect('')} >全部</li>
          {listMid['area'].map((item, index) => {
            return (
              <li key={index} className={`${item == areaSelect ? 'active' : ''}`} onClick={() => setAreaSelect(item)}><a >{item}</a></li>
            )

          })}
        </div>
      </div>
      <div className='type selectBox'>年代：
        <div className='item-name'>
          <li className={`${ageSelect == '' ? 'active' : ''}`} onClick={() => setAgeSelect('')} >全部</li>
          {listMid['year'].map((item, index) => {
            return (
              <li key={index} className={`${item == ageSelect ? 'active' : ''}`} onClick={() => setAgeSelect(item)}><a >{item}</a></li>

            )

          })}
        </div>
      </div>

    </div>
  )



}
export default MovieMid