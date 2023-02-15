const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const { Schema } = mongoose;
const eschemamovie = new Schema({
  idmovie: String,
  title: String,
  year: String,
  time: String,
  lang: String,
  date: String,
  country: String,
});

const ModelMovie = mongoose.model("movies", eschemamovie);
module.exports = router;

/*router.get('/example', (req,res) => {
    res.end('carga desde ruta ejemplo')
})*/

router.post("/addmovie", (req, res) => {
  const newmovie = new ModelMovie({
    idmovie: req.body.idmovie,
    name: req.body.name,
    title: req.body.title,
    year: req.body.year,
    time: req.body.time,
    lang: req.body.lang,
    date: req.body.date,
    country: req.body.country,
  });
  newuser.save(function (err) {
    if (!err) {
      res.send("pelicula agregada correctamente");
    } else {
      res.send(err);
    }
  });
});

router.get("/getmovies", (req, res) => {
  ModelMovie.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/getdatamovies", (req, res) => {
  ModelMovie.find({ idmovie: req.body.idmovie }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

router.post("/updatemovie", (req, res) => {
  ModelMovie.findOneAndUpdate(
    { idmovie: req.body.idmovie },
    {
      idmovie: req.body.idmovie,
      name: req.body.name,
      title: req.body.title,
      year: req.body.year,
      time: req.body.time,
      lang: req.body.lang,
      date: req.body.date,
      country: req.body.country,
    },(err) => {
        if(!err){
            res.send('pelicula actualizada correctamente')
        }else{
            res.send(err)
        }
    }
  );
});

router.post("/deletemovie", (req, res) => {
    ModelMovie.findByIdAndDelete(
      { idmovie: req.body.idmovie },(err) =>
      {
        if(!err){
            res.send('pelicula eliminada correctamente')
        }else {
            res.send(err)
        }
      })
  });
