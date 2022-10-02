const mongoose = require("mongoose");

const FAQSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title!"],
        },
        description: {
            type: String,
            required: [true, "Please provide a description!"],
        }
    }
);

const FAQ = mongoose.model("FAQ", FAQSchema);

module.exports = FAQ;