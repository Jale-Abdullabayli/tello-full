const Review = require("../model/review");
const { asyncCatch } = require("../utils/asyncCatch");



exports.getReviewsByProductId = asyncCatch(async (req, res) => {
    const productId = req.params.productId;

    const reviews = await Review.find({ product: productId });

    res.status(200).json({ success: true, reviews });
});


exports.createReview = asyncCatch(async (req, res) => {
    let review = await Review.create({
        ...req.body,
        product: req.params.productId,
        creator: req.user._id,
    });
    res.json({
        success: true,
        review
    });

})