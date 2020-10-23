import { test } from "src/utils/test-utils";

const testDirect = async (): Promise<number> => {
    const str = "world";
    console.log(`Hello ${str}`);
    return 1;
};

export {
    testDirect,
    test
};
