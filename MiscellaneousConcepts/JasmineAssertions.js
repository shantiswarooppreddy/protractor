describe('Protractor Typescript Demo', function() {

    it('First Function1', function() {
        var x;
        expect(null).toBeNull();
        expect(x).toBeUndefined();
        expect(7).toBeGreaterThanOrEqual(7);
        expect(1).toBeLessThan(2);
    });
    it('First Function2', function() {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
    });
    it('First Function3', function() {
        expect("Test1").toContain("Test");
        expect("Test2").toEqual("Test2");
        expect(2).toBe(2);
    });
});