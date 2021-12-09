const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri =
  "mongodb+srv://csmukki:PeIf510VNwZByMtK@cluster0.bqvvi.mongodb.net/ecommerce?retryWrites=true&w=majority";

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  return _db;
};

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
