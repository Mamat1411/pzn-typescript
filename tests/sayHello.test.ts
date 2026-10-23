import { sayHello } from "../src/sayHello.js";

describe("sayHello", () => {
    it('should return hello mamat', () => {
        expect(sayHello("Mamat")).toBe("Hello Mamat")
    })
})