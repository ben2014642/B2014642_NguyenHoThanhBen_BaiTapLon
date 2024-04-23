const Publiser = require('../models/Publisher');

const ApiError = require("../api-error");

class PublisherController {
    findAll = async (req, res, next) => {
        try {
            
            const publisers = await Publiser.find();
    
            res.status(200).json(publisers);
        } catch (error) {
            next(new ApiError(401, 'Đã xảy ra lỗi !'))
        }
    }
    findOne = async (req, res, next) => {
        try {
            
            const publisher = await Publiser.findOne({_id: req.params.id});
    
            res.status(200).json(publisher);
        } catch (error) {
            next(new ApiError(401, 'Đã xảy ra lỗi !'))
        }
    }
    create = async (req, res, next) => {
        try {
            
            const publiser = await Publiser.create(req.body);
    
            res.status(200).json(publiser);
        } catch (error) {
            next(new ApiError(401, 'Đã xảy ra lỗi !'))
        }
    }
    update = async (req, res, next) => {
        try {
            
            const publisher = await Publiser.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(publisher);
        } catch (error) {
            next(new ApiError(401, 'Đã xảy ra lỗi !'))
        }
    }
    destroy = async (req, res, next) => {
        try {
            
            const publisers = await Publiser.deleteOne({
                _id: req.params.id
            });
    
            res.status(200).json(publisers);
        } catch (error) {
            next(new ApiError(401, 'Đã xảy ra lỗi !'))
        }
    }

}

module.exports = new PublisherController();