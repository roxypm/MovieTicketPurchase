'use strict';

const Service = require('egg').Service;

class CinemaService extends Service {
    async index(e) {
        const { cmId } = e;
        // console.log('cmId', cmId);
        // 获取影院信息
        const sql = 'select * from cinemas where id = ?'
        let r = await this.app.mysql.query(sql, [cmId]);

        //获取影院正在放映的电影
        const sql1 = 'select mv_id as id from moving where cm_id = ?'
        let r1 = await this.app.mysql.query(sql1, [cmId]);

        let dataList = [];
        //获取电影的详细信息
        for (let i = 0; i < r1.length; i++) {
            const sql2 = 'select * from movie where id = ?'
            let r2 = await this.app.mysql.query(sql2, [r1[i].id]);
            dataList.push(r2[0]);
        }

        let list = [];
        //获取电影的排班
        for (let i = 0; i < dataList.length; i++) {
            const sql3 = 'select * from timeandsort where mv_id = ? order by start_time asc '
            let r3 = await this.app.mysql.query(sql3, [r1[i].id]);
            list.push(r3)
        }

        return { r, dataList, list };
    }
}

module.exports = CinemaService;
