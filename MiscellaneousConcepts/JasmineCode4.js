describe('Protractor Typescript Demo', function() {

    it('First Function1', function() {
        console.log("Inside the first function");
    });
    it('First Function2', function() {
        console.log("Inside the second function");
    });
    beforeEach( function() {
        console.log("Inside the before each function");
    });

    afterEach(function() {
        console.log("Inside the after each function");
    });

    beforeAll(function() {
        console.log("Inside the before all function");
    });

    afterAll(function() {
        console.log("Inside the after all function");
    });
});