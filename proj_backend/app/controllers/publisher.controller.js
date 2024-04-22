const Publiser = require('../models/Publisher');
const asyncHandler = require('express-async-handler');


class PublisherController {
    findAll = asyncHandler(async (req, res, next) => {
        const publisers = await Publiser.find();

        res.status(200).json(publisers);
    })
    findOne = asyncHandler(async (req, res, next) => {
        const publisher = await Publiser.findOne({_id: req.params.id});

        res.status(200).json(publisher);
    })
    create = asyncHandler(async (req, res, next) => {
        const publiser = await Publiser.create(req.body);

        res.status(200).json(publiser);
    })
    update = asyncHandler(async (req, res, next) => {
        const publisher = await Publiser.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(publisher);
    })
    destroy = asyncHandler(async (req, res, next) => {
        const publisers = await Publiser.deleteOne({
            _id: req.params.id
        });

        res.status(200).json(publisers);
    })

}

module.exports = new PublisherController();