const Controller = require('egg').Controller;
const path = require("path");
const fs = require("fs");
class User extends Controller {
    // 密码登录
    async userLogin() {
        const { ctx } = this;
        //用于接收post 请求的参数

        console.log("egg-userLogin");
        console.log("ctx.request.body", ctx.request.body);
        let result = await this.app.mysql.query(`SELECT userid,no,pwd from user where no='${ctx.request.body.no}'`);
        if (result.length == 0) {
            ctx.body = {
                code: 1,
                msg: "用户不存在，请注册！"
            }
        } else {
            if (result[0].pwd == ctx.request.body.pwd) {
                // this.ctx.session = {
                //     no: result[0].no
                // }
                ctx.body = {
                    code: 0,
                    msg: "登录成功！",
                    userid: result[0].userid
                };
            } else {
                ctx.body = {
                    code: 2,
                    msg: "密码错误~登录失败！"
                };
            }
        }
    }

    //获取用户名和头像
    async UserIn() {
        const { ctx, app } = this;
        // console.log("egg获取用户名和头像userid",ctx.session);
        console.log("ctx.request.body", ctx.request.body);
        let result = await this.app.mysql.query(`select * from user where userid ='${ctx.request.body.userId}'`);
        console.log(result);
        if (result.length != 0) {
            ctx.body = {
                code: 0,
                info: result
            }

        } else {
            ctx.body = {
                code: 1,
                msg: "查找失败！"
            }
        }
    }

    /* 
  
    //判断用户登录状态
    async judgeULogin() {
        const { ctx } = this;
        console.log(ctx.session.user_id);
        const id = ctx.session.user_id
        if (id) {
            ctx.body = {
                code: 0
            }
        } else {
            ctx.body = {
                code: 1
            }
        }

    }
    //用户登录密码
    async user_login() {
        const { ctx, app } = this;
        //用于接收post 请求的参数
        // console.log(ctx.request.body);
        let result = await this.app.mysql.query(`SELECT password,user_id from user where user_name='${ctx.request.body.username}'`);
       console.log(8888888888);
        console.log(this.ctx.session.user_id);
        if (result.length == 0) {
            ctx.body = {
                code: 1,
                msg: "用户不存在，请注册！"
            }
        } else {
            if (result[0].password == ctx.request.body.password) {
                this.ctx.session = {
                    user_id: result[0].user_id
                }
                ctx.body = {
                    code: 0,
                    msg: "登录成功！"
                };
            } else {
                ctx.body = {
                    code: 2,
                    msg: "密码错误~登录失败！"
                };
            }
        }
    }
   
    //发送手机验证码
    async sendCode() {
        const { ctx } = this;
        console.log(ctx.request.body.telNumber);
        const tel = ctx.request.body.telNumber;
        // console.log(tel);
        const code = Math.random().toString().substr(2, 6); //[0, 1)  0.003022365324587  
        // 把code信息存储session里面
        ctx.session.code = code;

        // 进行短信的发送
        // 需要第三方平台支持
        const Core = require('@alicloud/pop-core');

        let client = new Core({
            accessKeyId: 'LTAI4GEE5xcZiqxprartX41m',
            accessKeySecret: 'DWu5lTQwJmwg4gKlHpp9mrU2fQ31Af',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });

        let params = {
            "PhoneNumbers": tel,
            "SignName": "智能小清",
            "TemplateCode": "SMS_206880488",
            "TemplateParam": `{\"code\":\"${code}\"}`
        }

        let requestOption = {
            method: 'POST'
        };

        const result = await client.request('SendSms', params, requestOption).then((result) => {
            return result;
        }, (ex) => {
            console.log(ex);
            return ex;
        });
        let r = {
            code: 1,
            msgcode: ctx.session.code,
            msg: '短信发送成功'
        };
        if (result.Message != 'OK') {
            r = { code: -2, msg: result.code };
        }
        ctx.body = r;
    }
     //用户验证码登录,判断该用户手机号是否注册
     async user_msgLogin() {
        const { ctx, app } = this;
        let result = await this.app.mysql.query(`SELECT user_id from user where phone='${ctx.request.body.telNumber}'`);
        console.log(result);
        console.log(ctx.request.body.yzcode);
        let qCode = ctx.request.body.yzcode;
        let hCode = ctx.session.code;
        this.ctx.session = {
            user_id : result[0].user_id
        }
        console.log(1111);
        console.log(ctx.session.user_id);
        if (result.length == 0) {
            ctx.body = {
                code: 1,
                msg: "该用户未注册，请先注册"
            }
        } else {
            if (qCode == hCode) {
                ctx.body = {
                    code: 0,
                    msg: "登录成功"
                }
            }else{
                ctx.body = {
                    code:2,
                    msg:"验证码错误！"
                }
            }
        }


    }

    //用户注册
    async user_register() {
        const { ctx } = this;
        //用于接收post 请求的参数
        // console.log(ctx.request.body);
        let result = await this.app.mysql.query(`SELECT user_id from user where user_name='${ctx.request.body.username}'`);
        // console.log(result)
        if (result.length == 0) {
            let registerAct = await this.app.mysql.query(`INSERT INTO user(user_name,password,phone) VALUES('${ctx.request.body.username}','${ctx.request.body.password}','${ctx.request.body.telNumber}')`);
            if (registerAct.affectedRows) {
                ctx.body = {
                    code: 0,
                    msg: "注册成功,请登录"
                }
            }
        } else {
            ctx.body = {
                code: 1,
                msg: "该用户已存在，请登录！！"
            }
        }
    }
    //获取用户名和头像
    async showUinfo(){
        const { ctx,app } = this;
        //用于接收post 请求的参数
        // console.log(ctx.request.body);
        console.log(88888888888888);
        console.log("id诶",ctx.session);
        let result = await this.app.mysql.query(`select user_name,user_img from user where user_id ='${ctx.session.user_id}'`);
        console.log(result);
        ctx.body = {
            code:0,
            info:result
        }
    }
    //修改用户密码
    async updateUPwd() {
        const { ctx, app } = this;
        console.log(ctx.request.body.password);
        let res = await this.app.mysql.query(`update user set password = ${ctx.request.body.password} where user_id = ${ctx.session.user_id}`);
        if (res.affectedRows) {
            ctx.body = {
                code: 0,
                msg: "修改成功，请重新登录！"
            }
        }
    }
    //修改用户名
    async alteruName(){
        const { ctx, app } = this;
        console.log(ctx.session);
        let res = await this.app.mysql.query(`update user set user_name = '${ctx.request.body.uName}' where user_id = ${ctx.session.user_id}`);
        if (res.affectedRows) {
            ctx.body = {
                code: 0,
                msg: "修改成功！"
            }
        }
    }
    //用户退出登录，清空session
    async clearSession() {
        const { ctx, app } = this;
        this.ctx.session = null;
        ctx.body = {
            code: 0
        }
    }

    */

}
module.exports = User;