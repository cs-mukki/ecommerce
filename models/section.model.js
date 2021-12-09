const mongodb = require("mongodb");
const getDb = require("../utils/database").getDb;

const ObjectId = mongodb.ObjectId;

class Section {
  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection("sections").insertOne(this);
  }

  static findAll() {
    const db = getDb();
    return db.collection("sections").find().toArray();
  }

  deleteById(id) {
    const db = getDb();
    return db.collection("sections").deleteOne({ _id: ObjectId(id.trim()) });
  }
}

module.exports = Section;
