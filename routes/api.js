const express = require("express");
const Ninja = require("../models/ninja");
router = express.Router();

//Get a list of Ninja
router.get("/ninjas", (req, res, next) => {
  // Ninja.find({})
  //   .then(ninjas => res.send(ninjas))

  Ninja.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
      }
    }
  ])
    .then(function(ninjas) {
      res.send(ninjas);
    })
    .catch(next);
});

//Add a new ninja
router.post("/ninjas", (req, res, next) => {
  Ninja.create(req.body)
    .then(ninja => {
      res.send(ninja);
    })
    .catch(next);
});

//Update a ninja
router.put("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Ninja.findOne({ _id: req.params.id }).then(ninja =>
      res.status(200).send(ninja)
    );
  });
});

//Delete a ninja
router.delete("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.json({ message: "Ninja deleted" });
    })
    .catch(next);
});

module.exports = router;
