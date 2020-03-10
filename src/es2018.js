// Rest/Spread for Object

const name = ["taro", "ichiro", "hanako"];
const spread_name = [...name, "jiro"];

console.log(spread_name);　//["taro", "ichiro", "hanako", "jiro"]

let sampleObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
}

let { a, b, ...z } = sampleObj;
console.log(a); //1
console.log(b); //2
console.log(z); //{c: "3", d: "4"}

let copy = { ...sampleObj };
console.log(copy); //{a: "1", b: "2", c: "3", d: "4"}

sampleObj.e = 5;
console.log(sampleObj); //{a: "1", b: "2", c: "3", d: "4"}

//複製されたオブジェクトには変更されない
console.log(copy); //{a: "1", b: "2", c: "3", d: "4"}
