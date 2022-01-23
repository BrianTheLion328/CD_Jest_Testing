const { add, subtract, multiply, divide, findTheSmallestValue } = require("./functions")

test("properyl adds two numbers", () => {
    expect(
        add(1, 2)
        ).toBe(3)
})

test("properly subtract the first number with the second", () => {
    expect(subtract(5, 1)
    ).toBe(4)
})

test("properly multiply two numbers", () => {
    expect(multiply(3, 5)
    ).toBe(15)
})

test("properly divide two numbers", () => {
    expect(divide(12, 3)
    ).toBe(4)
})

test("find the smallest number value in an array", () => {
    expect(findTheSmallestValue([4, 6, 0, 9, 5, 1])
    ).toBe(0)
})
