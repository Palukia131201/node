const Course = require('../models/Course')
const {mongooseToObject } = require('../../util/mongoose')

class CoursesController {
  //get
  show(req,res,next){
    Course.findOne({ slug:req.params.slug})
        .then((course)=>
            res.render('courses/show',{course:mongooseToObject(course)})
        )
        .catch(next)
  }
  //get
  create(req,res,next){
    res.render('courses/create')
  }
  //post
  store(req,res,next){
    const Data = req.body;
    Data.image=`https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(Data);
    course.save();

    res.send('save')
  }
}
module.exports = new CoursesController();
