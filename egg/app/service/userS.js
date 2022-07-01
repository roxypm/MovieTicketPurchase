//service层代码  personService.js
const Service = require("egg").Service;
const path = require("path");
const fs = require("fs");

class PersonService extends Service {
	//增加一个人员
	async insertPerson(name,sex,time,file) {
    console.log(name,sex,time);
    //在项目的public下创建upload目录
		const toFileName = '/public/upload/' + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);//文件上传结束
		//上传的文件的网络访问路
		const headurl = "http://localhost" + toFileName;
		return headurl;
	} 
}
module.exports = PersonService;