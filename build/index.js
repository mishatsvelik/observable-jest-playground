import * as jsdom from "jsdom";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "5ef68b6d8020c0c7";
const dom = new jsdom.JSDOM(`<!DOCTYPE html><body><p id="main">My First JSDOM!</p></body>`, {
    pretendToBeVisual: true,
    resources: "usable",
    url: "https://observablehq.com/d/49c71f8ac254d36a",
    contentType: "text/html"
});
// This prints "My First JSDOM!"
console.log(dom.window.document.getElementById("main").textContent);
//FYI:  index.js runs ok if the below is commented out
const runtime = new Runtime();
const main = runtime.module(notebook, Inspector.into(dom.window.document));
const test_output = await main.value("d3_test");
console.log(test_output);
//# sourceMappingURL=index.js.map