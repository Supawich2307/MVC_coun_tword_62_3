const { text, json } = require('body-parser');
const express = require('express');
const format = require('../models/format.json');
const format_ans = require('../models/format_ans.json');
const frequency_word = require('./frequency_word');
const app = express();
const fs = require('fs');

 class cleansing{
      startcleansing(text){
        this.writedata(text,'../models/format.json');
        var a = this.cleansing_data();
        var b = this.del_sign(a);
        var c = this.del_space(b);
        //console.log(c);
        var d = new frequency_word().frequency(c);
        this.writedata(d,'../models/format_ans.json');
        return format_ans;

      }
      writedata(text,path){
        const jsonString = JSON.stringify(text);
            fs.writeFile(path, jsonString, err => {
                if (err) {
                    console.log('การเขียนไฟล์ไม่สำเร็จ', err)
                } else {
                    console.log('การเขียนไฟล์สำเร็จ')
                }
            })
        }
         cleansing_data(){
            let text = format.msg.toLowerCase();
            //console.log(text);
            return text;
        }
       del_sign(text){
        //console.log(text);
        var res = "";
        var res = text.split('?').join('');
        res = res.split('!').join('');
        res = res.split(',').join('');
        //console.log(res);
        return res;
      }
       del_space(text){
        let str = text.split(' ');
        //console.log(str);
        return str;
      }   
 }//endclass
      
module.exports = cleansing

