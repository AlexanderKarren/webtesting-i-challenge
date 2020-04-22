const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "Rusty Soup Ladle",
    durability: 20,
    enhancement: 19
}

describe("enhancer.js", () => {
    describe("repair(item)", () => {
        it("item durability is 100 after repair(item)", () => {
            expect(enhancer.repair(item).durability).toBe(100);
        })
    })
    describe("succeed(item)", () => {
        it("item enhancement is increased by 1 after succeed(item)", () => {
            expect(enhancer.succeed(item).enhancement).toBe(20);
        })
        it("if enhancement level is 20, the enhancement level is not changed", () => {
            expect(enhancer.succeed(item).enhancement).toBe(20);
        })
    })
})