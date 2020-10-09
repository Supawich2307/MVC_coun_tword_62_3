const express = require('express');
const app = express();
const cleansing = require('./cleansing');
app.use(express.json());
//const fs = require('fs');

  class frequency{
    frequency(array){
      console.log(array);
      var res = this.getWordCount(array);
      return res;
      }

    getWordCount(array) {
      let map  = new Map();
        for(var word of array){
          if(map.has(word)){
            map.set(word,map.get(word)+1)
        }
        else{
          map.set(word, 1)
        }
        }
        console.log(map);
        let result = [];
        map.forEach((values,keys)=>{
            var freq = {
                "word": keys,
                "count": values
            };
            result.push(freq);
        });
      return result;
  }
  
  
}//endclass
module.exports = frequency