const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User",
      
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    status: {
      type: Boolean,
      default:false,
    },
    start: {
      type: String,
      required: [true, "Please add a text value"],
    },
    end: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
