const mongoose = require("mongoose")

exports.connect = () => mongoose
.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
