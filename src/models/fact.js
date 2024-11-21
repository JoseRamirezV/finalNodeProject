const { Schema, model } = require('mongoose');
const factSchema = new Schema(
   {
      userEmail: { type: String, required: true },
      title: { type: String, required: true },
      fact: { type: String, required: true },
      category: { type: String, required: true },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);
module.exports = model('fact', factSchema);
