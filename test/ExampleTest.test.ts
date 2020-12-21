import { describe, it } from "mocha";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

import { testDirect } from "src";

chai.use(chaiAsPromised);

describe("Test", () => {
    describe("Test 1", () => {
        it("should be return 1", async () => {
            const no = await testDirect();
            expect(no).eq(1);
        });

        it("should be return 2", async () => {
            const no = await testDirect();
            expect(no).eq(1);
        });
    });
});
