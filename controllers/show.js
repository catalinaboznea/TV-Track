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
