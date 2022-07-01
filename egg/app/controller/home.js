const Controller = require('egg').Controller;
const path = require("path");
const fs = require("fs");
class UserController extends Controller{
    async getMInfo(){
        const { ctx, app } = this;
        const sql = "select * from movie";
        let mNow=[];
        let mNext=[];
        let mHot=[];
        let result=await this.app.mysql.query(sql);
        console.log(result);
        if (result.length == 0) {
            ctx.body = {
                code: 0,
                msg: "获取信息失败！！"
            }
        }else{
            result.forEach(ele => {
                if(ele.movie_flag===0){
                    mNow.push(ele);
                }else if(ele.movie_flag===1){
                    mNext.push(ele);
                }else if(ele.movie_flag===2){
                    mHot.push(ele);
                }
            });
            ctx.body = {
                code: 1,
                movie:[mNow,mNext,mHot]
            }

        } 
    }
    
}
module.exports = UserController;