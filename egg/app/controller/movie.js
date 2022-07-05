const Controller = require("egg").Controller
const path = require("path")
const fs = require("fs")
class UserController extends Controller {
  async getMovieCard () {
    const { ctx, app } = this
    let page = ctx.request.body.page || 1
    let type = ctx.request.query.type || ''
    let movieType = ctx.request.query.movieTypeSelect || ''
    let movieArea = ctx.request.query.areaSelect || ''
    let movieYear = ctx.request.query.ageSelect || ''
    let timeSort = ctx.request.query.timeSort == 'timeSort' ? 'order by movie_time desc' : ''
    let scoreSort = ctx.request.query.scoreSort == 'scoreSort' ? 'order by score desc' : ''


    const sql = `select * from movie where movie_flag=${type} and (movie_type="${movieType}" or "${movieType}"="")  and  (movie_area="${movieArea}" or "${movieArea}"="") and (movie_year="${movieYear}" or "${movieYear}"="") ${timeSort} ${scoreSort}`

    console.log(sql)
    let list = []
    let result = await this.app.mysql.query(sql)
    // console.log("11111111", result)
    if (result.length == 0) {
      ctx.body = {
        code: 0,
        data: [],
        msg: "获取信息失败！！"
      }
    } else {
      result.forEach(ele => {
        list.push(ele)
      })
      ctx.body = {
        code: 1,
        data: list
      }
    }
  }
}
module.exports = UserController