import { test } from "src/utils/test-utils";

const testDirect = async () => {
    const str = "world";
    console.log(`Hello ${str}`);
    return 1;
};

export {
    testDirect,
    test,
};
