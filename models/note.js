// constructor for creating and initializing an object of that class
// note id, title, text
class Note {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
  // get id, title, and text
  getNote() {
    let noteVariable = {};
    noteVariable.id = this.id;
    noteVariable.title = this.title;
    noteVariable.text = this.text;
    return noteVariable;
  }
}
// get data entered
class Notes {
  constructor() {
    this.data = [];
  }
// return data
  getAll() {
    return this.data;
  }
  // save data
  save(obj) {
    this.data.push(obj);
    return;
  }

  getIndexOf(id) {
    // -1 is end of list
    let index = -1;
// increment 
    for (const obj of this.data) {
      index++;
      if (obj.id === id) {
        return index;
      }
    }
    return index;
  }
// delete; splice allows removing or replacing existing id and/or adding new elements
  delete(id) {
    let index = this.getIndexOf(id);
    if (index > -1) {
      this.data.splice(index, 1);
      return;
    }
  }
}

module.exports = {
  Note,
  Notes,
};
