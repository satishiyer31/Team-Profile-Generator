const Engineer = require('../classes/Engineer');

describe("Engineer", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, email, ID  if provided valid arguments", () => {
        const engineer = new Engineer("Sarah", 3, "sarah@getMaxListeners.com", "sarahcodes") ;
  
        // Verify that the new object has the correct properties
        expect(engineer.emp_name).toEqual("Sarah");
        expect(engineer.ID).toEqual(3);
        expect(engineer.email).toEqual("sarah@getMaxListeners.com");
        expect(engineer.github_username).toEqual("sarahcodes");
      });
  
    //   it("should throw an error if provided no arguments", () => {
    //     // Wrap the object initialization in a callback function that Jest will run
    //     const engineer1 = () => new Engineer();
  
    //     // Verify that an error was thrown in the callback function
    //     expect(engineer1).toThrow();
    //   });
  
      
    });
  });