'use strict';

const Controller = require('egg').Controller;

class CinemaController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      const aa = ctx.request.query;
      const r = await ctx.service.cinema.index(aa);
      if (r.r.length == 1) {
        ctx.body = {
          state: 1,
          msg:r
        }
      }else{
        throw new Error('数据异常')
      }
    } catch (error) {
      console.log(error,111);
      ctx.body = {
        state: 0,
        msg: '数据异常'
      }
    }
  }
}

module.exports = CinemaController;
