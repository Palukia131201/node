const mongoose = require('mongoose');
async function connect(){
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/Nodejs-dev')
    console.log('Success connect db');
    }
    catch(enror){
        console.log('fail');
    }
}
module.exports = {connect}