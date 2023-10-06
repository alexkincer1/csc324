ch_06_alex_kincer.js
// Alex Kincer
// Chapter 6

// Groups

class Group {

    constructor() {
      this.members = [];
    }
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  }
  

// test from book

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false