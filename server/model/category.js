const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name!"],
        },
        parentId:{
            type: [mongoose.Schema.Types.ObjectId],
            ref:"category"
        },
        slug:{
            type: String,
            required: [true, "Please provide a slug!"],
        }
    }
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;