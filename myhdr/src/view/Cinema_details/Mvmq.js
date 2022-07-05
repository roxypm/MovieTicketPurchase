
//电影名字及简介
function Mvmq({data}) {
    
    //解构
    const { movie_name, score, movie_want, movie_type, star } = data;
    //电影时长
    const time = 140;
    
    return (
        <div className="tilbox" >
            <span>{movie_name}</span>
            <p style={{ fontSize: '26px', marginRight: '6px' }}>{score == 0 ? movie_want == 0 ? '' : movie_want : score}</p>
            <p>{score == 0 ? movie_want == 0 ? '暂无评分' : '少人想看' : '分'}</p>
            <div className='tt'>
                <span>时长 : &nbsp;</span><p>{time}分钟</p>
                <span>类型 : &nbsp;</span><p>{movie_type}</p>
                <span>主演 : &nbsp;</span><p>{star}</p>
            </div>
        </div>
    )
}

export default Mvmq;