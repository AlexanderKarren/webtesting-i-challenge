const enhancer = require('./enhancer.js');
// test away!

const item1 = {
    name: "Rusty Soup Ladle",
    durability: 20,
    enhancement: 19
}

const item2 = {
    name: "Crowbar",
    durability: 20,
    enhancement: 14
}

const item3 = {
    name: "Crispy Baguette",
    durability: 20,
    enhancement: 15
}

describe("enhancer.js", () => {
    describe("repair(item)", () => {
        it("item durability is 100 after repair(item)", () => {
            expect(enhancer.repair(item1).durability).toBe(100);
            expect(enhancer.repair(item2).durability).toBe(100);
            expect(enhancer.repair(item3).durability).toBe(100);
        })
    })
    describe("succeed(item)", () => {
        it("item enhancement is increased by 1 after succeed(item)", () => {
            expect(enhancer.succeed(item1).enhancement).toBe(20);
        })
        it("if enhancement level is 20, the enhancement level is not changed", () => {
            expect(enhancer.succeed(item1).enhancement).toBe(20);
        })
    })
    describe("fail(item)", () => {
        it("If the item's enhancement is less than 15, the durability of the item is decreased by 5.", () => {
            expect(enhancer.fail(item2).enhancement).toBe(9);
        })
        it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () => {
            expect(enhancer.fail(item3).enhancement).toBe(5);
        })
        it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).", () => {
            expect(enhancer.fail(item1).enhancement).toBe(18);
        })
    })
})