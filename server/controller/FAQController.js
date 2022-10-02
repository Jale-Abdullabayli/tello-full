const FAQ = require("../model/FAQ");
const { asyncCatch } = require("../utils/asyncCatch");


exports.getAllFAQ = asyncCatch(async (req, res) => {
    let FAQs = await FAQ.find();

    res.json({
        success: true,
        data: {
            FAQs
        },
    });

})


exports.createFAQ = asyncCatch(async (req, res) => {
    let newFAQ = await FAQ.create({
        title:req.body.title,
        description:req.body.description
    });

    res.json({
        success: true,
        data: {
            newFAQ
        },
    });

})