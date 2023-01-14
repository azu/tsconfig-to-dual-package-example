import { sum } from "../src/sum.js";
import { describe, it } from "node:test";
import assert from "assert";
describe("sum", function() {
    it("should add two numbers", function() {
        assert.strictEqual(sum(1, 2), 3);
    });
});
