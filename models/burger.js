const orm = require("../config/orm.js");

const burger = {
    create: function(valArr, cb) {
      orm.insertOne("burgers", ['burger_name', 'devoured'],valArr,function(res) {
        cb(res);
      });
    },
    
    all: function(cb) {
      orm.selectAll("burgers",function(res) {
        cb(res);
      });
    },
    update: function(id, objColVals, cb) {
      let condition = {
        id:id
      };
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  
  module.exports = burger;