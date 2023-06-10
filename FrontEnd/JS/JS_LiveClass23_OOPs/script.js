//--------- 06-09-2023 -----------------
// OOPS revision

let sayHiMixin = {
    say: function(name) {
      return sayMixin.say(name);
    }
  };
  
  function setPrototype() {
    User.prototype = Object.create(sayHiMixin);
  }
  
  // User class definition
  function User(name) {
    this.name = name;
  }
  
  // sayMixin object definition (assume it exists)
  let sayMixin = {
    say: function(name) {
      // Implementation of the say method
      // Return a number based on the name
      return name.length * 3;
    }
  };
  
  // Test
  setPrototype(); // Set the prototype of User class to sayHiMixin
  const obj = new User("Newton School");
  console.log(obj.say()); 