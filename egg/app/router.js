//router.js
module.exports = (app) => {
    const { router, controller } = app;
    //主页获取影片信息
    router.get("/getMInfo", controller.home.getMInfo);

    router.post("/userLogin", controller.user.userLogin);
  };