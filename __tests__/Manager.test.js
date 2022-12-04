const Manager = require("../Lib/Manager");

// test for instantiating an Manager instance
describe("ManagerTest", () => {
    test('should instantiate Manager instance', () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    })
    });
    
    // test for setting variable for name, passing new Manager name
    test('should set the name by constructor argument', () => {
        const name = "Nooh";
        const e = new Manager(name);
        expect(e.name).toBe(name);
    });
    
    // test for setting test value for number  of id value
    test('should set id by constructor argument', () => {
        const testValue = "100";
        const e = new Manager("Nooh", testValue);
        expect(e.id).toBe(testValue);
    });
    
    // test for setting email 
    test('should set email by constructor argument', () => {
        const testValue = "test@email.com";
        const e = new Manager("Nooh", "1", testValue);
        expect(e.email).toBe(testValue);
    });
    
    // test for setting office number
    test('should set office number by constructor argument', () => {
        const testValue = "1-800-500-2000";
        const e = new Manager("Nooh", "1", "test@email.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });
    
    //test for getting variable  for name
    test("should get name by getName()", () => {
        const testValue = "Nooh";
        const e = new Manager(testValue);
        expect(e.getName()).toBe(testValue);
      });
      
    // test ror getting variable for id
      test("should get id by getId()", () => {
        const testValue = 100;
        const e = new Manager("Nooh", testValue);
        expect(e.getId()).toBe(testValue);
      });
      
    // test for getting email
      test("should get email by getEmail()", () => {
        const testValue = "test@email.com";
        const e = new Manager("Nooh", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
      });
    
    // test for getting office number 
    test('should set office number by constructor argument', () => {
        const testValue = "1-800-500-2000";
        const e = new Manager("Nooh", "1", "test@email.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });  
     
    // test for getting roles
      test("should getRole()then return \"Manager\"", () => {
        const testValue = "Manager";
        const e = new Manager("Nooh", 1, "test@email.com");
        expect(e.getRole()).toBe(testValue);
      });