var ObjectId = require('mongoose').Types.ObjectId;
var Show = require('../models/Show');


/**
 * POST /show
 */
exports.addShow = function (req, res) {

    show = new Show({
        name: req.body.name,
        season: req.body.season,
        list: req.body.list
    });
    show.save(function (err) {
        res.send({ show: show });
    });
};

/**
 * GET /shows
 */
exports.getAllShows = function (req, res) {

    Show.find({}, function (err, shows) {
        if (shows) {
            res.send({ shows: shows });
        }
    });
};

/**
 * DELETE /show
 */
exports.deleteShow = function (req, res) {

    Show.findOne({ _id: ObjectId(req.query.id) }, function (err, show) {
        if (show) {
            show.remove(function (err) {
            res.send({ msg: "Case deleted" });
          });
        }
      });
};
