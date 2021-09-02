const Intern = require('../classes/Intern');

describe("Intern", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, email, ID  if provided valid arguments", () => {
        const intern = new Intern("Sarah", 3, "sarah@getMaxListeners.com", "MSU") ;
  
        // Verify that the new object has the correct properties
        expect(intern.emp_name).toEqual("Sarah");
        expect(intern.ID).toEqual(3);
        expect(intern.email).toEqual("sarah@getMaxListeners.com");
        expect(intern.school).toEqual("MSU");
      });
  
    //   it("should throw an error if provided no arguments", () => {
    //     // Wrap the object initialization in a callback function that Jest will run
    //     const intern1 = () => new Intern();
  
    //     // Verify that an error was thrown in the callback function
    //     expect(intern1).toThrow();
    //   });
  
      
    });
  });