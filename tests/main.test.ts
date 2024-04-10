import { helloWorld } from "../src/main";

describe("main test", () => {
    it("helloWorld should return Hello --name--", () => {
        const name = "Andrew"
        expect(helloWorld(name)).toBe(`Hello ${name}`)
    })
})