declare module "src/utils/test-utils" {
    export function test(): void;
}
declare module "src/index" {
    import { test } from "src/utils/test-utils";
    const testDirect: () => Promise<number>;
    export { testDirect, test, };
}
declare module "src/utils/FunctionUtils" {
    export function measureFunctionExecuteTime(fn: any, ...args: any[]): number;
}
