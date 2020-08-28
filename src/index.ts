import { test } from "src/utils/test-utils";

const libMain = async() => {
    let str = "world";
    console.log(`Hello ${str}`);
    return 1;
} 

export {
    libMain
};
