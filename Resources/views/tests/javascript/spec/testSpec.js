/*
 * Copyright (c) niWde
 */

describe("CoolBeer", function() {
    var app = null,
        value,
        main;
    beforeEach(function() {
        app =  Shopware.apps.CoolPlugin;
    });

    it("CoolPlugin should be available", function() {
        expect(app).toBeDefined();
    });

    it("Let's addBeers", function () {
        main = Shopware.apps.CoolPlugin.controller.Main.prototype ;
        value = main.addBeers(2,3);
        expect(value).toBe(5);
    });
});