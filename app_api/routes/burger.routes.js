const express = require("express");

var ctrl = require("../controllers/burger.ctrl");
var burger = require("../models/Burger");
var index = require("../models/index");

var db = require("../models");
var router = express.Router();

router.post("/burger/", ctrl.createBurger);

router.get("/burger/", ctrl.getAllBurgers);

router.get("/", function(req, res) {
    // db.Burger(function(data) {
    //   var hbsObject = {
    //     getAllBurgers: data
    //   };
    //   console.log(hbsObject);
    
      var hbsObject=ctrl.getAllBurgers();
      console.log("hbsObject is  BEFORE RENDER+++++"+hbsObject);
      res.render("index", hbsObject);
      
    });
//  });


  router.put("/api/burgers/:id", ctrl.devourBurger) 
  // {
  //   var condition = "id = " + req.params.id;
  
  //   console.log("condition", condition);
  
  //   db.Burger(function(data) {
  //     var hbsObject = {
  //       devourBurger: data
        
  //     };
  //     res.render("index",hbsObject);
  //   });
  // });



module.exports = router;
