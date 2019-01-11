var db = require("../models");

module.exports = {
    getAllBurgers: function () {
        //console.log("router ");
        db.Burger.findAll({})
            .then(function (data) {
     
                console.log("sql query response",data);///instead of console log here RENDER TO PAGE  see HW w/out sqlize
                var hbsObject = {
                    burgers: data
                  };
                  console.log("in the ctrlr hbsObject is----------"+hbsObject)
                //res.render("index",hbsObject);
                  return hbsObject;
            })
        // res.send("route file tested");
    },

    createBurger: function (req, res) {
        //console.log("router ");
        db.Burger
            .create({
                name: req.body.name,
                devoured: false
            })
            .then(burgers_sqlize_db => {  
                res.json(burgers_sqlize_db);  
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    },

    devourBurger: function(req, res){
        // console.log("FUNCTION HIT ",req.body);
        db.Burger
            .update(
                req.body,
                {where: {

                    id: req.params.id
            }
        })
            .then(burgers_sqlize_db => {  
                res.json(burgers_sqlize_db);  
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }

}