const express = require("express");
const { Schema, model } = require("mongoose");

const coAdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = model("CoAdmin", coAdminSchema);
