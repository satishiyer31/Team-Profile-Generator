const Manager = require('../classes/Manager');

describe("Manager", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, email, ID  if provided valid arguments", () => {
        const manager = new Manager("Sarah", 3, "sarah@getMaxListeners.com", "4065706671") ;
  
        // Verify that the new object has the correct properties
        expect(manager.emp_name).toEqual("Sarah");
        expect(manager.ID).toEqual(3);
        expect(manager.email).toEqual("sarah@getMaxListeners.com");
        expect(manager.office_number).toEqual("4065706671");
      });
  
      // it("should throw an error if provided no arguments", () => {
      //   // Wrap the object initialization in a callback function that Jest will run
      //   const manager1 = () => new Manager();
  
      //   // Verify that an error was thrown in the callback function
      //   expect(manager1).toThrow();
      // });
  
      
    });
  });