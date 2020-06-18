let Person = require('../src/Person.js')

let ryansTesting = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']) 

describe("tests", function(){
    it("should return the name of the person", function(){
       expect(ryansTesting.name).toBe("Ryan")
    })
    it("should return 30 as the persons age",function(){

        expect(ryansTesting.age).toBe(30)
    })   
    it("should return Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.", function(){

        expect(ryansTesting.hello()).toBe("Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.")
    }) 

})

