import 'mocha';
import * as assert from 'assert';
import {SmokeTest} from "../src/MaliTest";

describe("MaliTest", () => {
   it("should say 'Hello World'", () => {
       SmokeTest.HelloWorld();
       assert.ok(true);
   })
});
