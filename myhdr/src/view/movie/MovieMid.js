function MovieMid ({ ageSelect, setAgeSelect, areaSelect, setAreaSelect, movieTypeSelect, setMovieTypeSelect }) {
  const listMid = {
    typess: [
      "爱情", "喜剧", "动画", "剧情", "恐怖", "惊悚", "科幻", "动作", "悬疑", "犯罪", "冒险", "战争", "奇幻", "运动", "家庭", "古装", "武侠", "西部", "历史", "传记", "歌舞", "黑色电影", "短片", "纪录片", "戏曲", "音乐", "灾难", "青春", "儿童", "其他"

    ],
    year: [
      2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010
    ],
    area: [
      "大陆", "美国", "韩国", "日本", "中国香港", "中国台湾", "泰国", "印度", "法国", "英国", "俄罗斯", "意大利", "西班牙", "德国", "波兰", "澳大利亚", "伊朗", "其他"
    ],
  }
  return (
    <div className="cinema-detail-box">
      <div className='types selectBox'>类型：
        <div className='item-name'>
          <li className={`${movieTypeSelect == '' ? 'active' : ''}`} onClick={() => setMovieTypeSelect('')} >全部</li>
          {listMid['typess'].map((item, index) => {
            return (
              <li key={index} className={`${movieTypeSelect == item ? 'active' : ''}`} onClick={() => setMovieTypeSelect(item)}  ><a >{item}</a></li>
            )

          })}
        </div>
      </div>
      <div className='areas selectBox'>区域：
        <div className='item-name'>
          <li className={`${areaSelect == '' ? 'active' : ''}`} onClick={() => setAreaSelect('')} >全部</li>
          {listMid['area'].map((item, index) => {
            return (
              <li key={index} className={`${item == areaSelect ? 'active' : ''}`} onClick={() => setAreaSelect(item)}><a >{item}</a></li>
            )

          })}
        </div>
      </div>
      <div className='year selectBox'>年代：
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