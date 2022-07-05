//router.js
module.exports = (app) => {
  const { router, controller } = app
  //主页获取影片信息
  router.get("/getMInfo", controller.home.getMInfo)
  //router.get("/getAllPerson.do", controller.personController.getAllPerson);


  //电影页面获取电影卡片列表信息
  router.get("/movieList", controller.movie.getMovieCard)
  router.post("/userLogin", controller.user.userLogin)
}
