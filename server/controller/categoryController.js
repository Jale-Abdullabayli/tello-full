const Category = require("../model/category");
const { asyncCatch } = require("../utils/asyncCatch");
const GlobalFilter = require("../utils/GlobalFilter");



exports.getAllCategories = asyncCatch(async (req, res) => {
    let allCategories = await new GlobalFilter(Category.find(), req.query);
    allCategories.filter();

    const categories = await allCategories.query;

    res.json({
        success: true,
        data: {
            categories
        }
    });

})


exports.createCategory = asyncCatch(async (req, res) => {
    let newCategory = await Category.create(req.body);

    res.json({
        success: true,
        data: {
            newCategory
        },
    });

})