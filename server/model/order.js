const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        status: {
            type: String,
            required: [true, "Please provide a status!"],
            enum: ["pending", "ship", "pickup", "declined", "refund"]
        },
        orderItems: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product"
                },
                quantity: {
                    type: Number
                }
            }
        ],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;