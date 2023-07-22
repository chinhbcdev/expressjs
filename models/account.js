// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect(
//   "mongodb+srv://chinhbcdev:123@cluster0.lsgjwie.mongodb.net/",
//   (err, db) => {
//     if (err) throw err;

//     db.collection("test")
//       .find()
//       .toArray((err, result) => {
//         if (err) throw err;

//         console.log(result);
//       });
//   }
// );
const mongoose = require("mongoose");
const connect = async () => {
  await mongoose
    .connect("mongodb+srv://chinhbcdev:123@cluster0.lsgjwie.mongodb.net/")
    .then(() => console.log("Connected!"));
};
connect();
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const accountSchema = new Schema({
  username: String,
  password: String,
});

const accountModel = mongoose.model("Accounts1", accountSchema); // Accounts1 ko phan biet hoa thuong

module.exports = accountModel;
