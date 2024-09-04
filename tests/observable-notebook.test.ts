import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "5ef68b6d8020c0c7"; //view notebook here: https://observablehq.com/d/5ef68b6d8020c0c7
import assert from "assert";
import expect from "expect";

it('observable-cell', async () => {
    const runtime = new Runtime();
    const main = runtime.module(notebook);  
    const test = await main.value("curly_braces_variable");
    expect(Number.isInteger(test)).toBe(true)
});

it('observable-d3-dependency-library-cell', async () => {
    const runtime = new Runtime();
    const main = runtime.module(notebook);  
    const test = await main.value("d3_test"); //notebook cell code: d3_test = d3.utcFormat("%Y")(new Date);
    assert.deepStrictEqual(test, "2024");
});

it('observable-plot-dependency-library-cell', async () => {
    const runtime = new Runtime();
    const main = runtime.module(notebook);  
    const test = await main.value("plot_test"); //notebook cell code: d3_test = d3.utcFormat("%Y")(new Date);
    assert.deepStrictEqual(test, "https://observablehq.com/d/5ef68b6d8020c0c7");
});