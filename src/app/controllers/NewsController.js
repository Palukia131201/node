class NewsController {
  //get
  index(req, res) {
    res.render('news');
  }
  //get :slug
  show(req, res) {
    res.send('NEWSSSSS');
  }
}
module.exports = new NewsController();
