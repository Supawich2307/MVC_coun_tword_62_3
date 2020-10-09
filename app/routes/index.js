//const { text } = require('express');
const express = require('express')
const app = express()
const cleansing = require('../controllers/cleansing');
const for_ans = require('../models/format_ans.json');
//const bodyParser = require('body-parser');

//gettext
app.post('/gettext',  (req, res) => {
    if(req.body.msg.length>= 20&&req.body.msg.length<= 225){ //checkchar
            var x = new cleansing().startcleansing(req.body); 
            res.status(201)
            res.json(x);
       /* } catch (error) {
            let messageError = {
                statusCode: error.statusCode ||  400,
                message: error.message || error
            }
            res.status(messageError.statusCode)
            res.json(messageError)
        }*/
    } else{
        res.json('Plase enter text again !')
    }
    
})

module.exports = app
