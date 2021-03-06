const { Schema } = require("mongoose");
const mongoose = require("../Mongo");

module.exports = mongoose.model(
  "Blacklist",
  new Schema(
    {
      refreshToken: String,
      createdAt: {
        type: Date,
        default: Date.now(),
        expires:
          60 *
          60 *
          1 /* Each refresh token will expire after 24 hours unless logged out.*/,
      },
    },
    { timestamps: true }
  )
);
