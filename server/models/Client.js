const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order"
    }
  ]
});

const Client = Mongoose.model("client", clientSchema);

module.exports = Client;
