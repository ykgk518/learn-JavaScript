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


// Asynchronous Iteration
//for-await-ofをお勉強

//# MDNのサンプルコード
//## 非同期反復オブジェクトを利用する
let asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return Promise.resolve({ value: this.i++, done: false })
                }

                return Promise.resolve({ done: true })
            }
        };
    }
};

(async function () {
    for await (item of asyncIterable) {
        console.log(item)
    }
})();
//0
//1
//2

//## 非同期ジェネレータを繰り返して処理する
let sleep = (ms) => new Promise((func) => setTimeout(func, ms));

async function* asyncGenerator() {
    yield 1;
    await sleep(1000);
    yield 2;
    await sleep(1000);
    yield 3;
    await sleep(1000);
}

(async function () {
    for await (item of asyncGenerator()) {
        console.log(item);
    }
})();


// Promise.prototyep.finally()

let myPromise = new Promise((resolve, reject) => {
    resolve();
})

myPromise
    .then(() => {
        console.log('still working');
    })
    .catch(() => {
        console.log('there was an error');
    })
    .finally(() => {
        console.log('Done!');
    });
// still working
// Done!

//s(dot) flag for regular expressions

/foo.bar/.test('foo\nbar');
//false
/foo.bartest/s.test('foo\nbar\ntest');
//true

//名前付きなしキャプチャグループ
let re = /(\d{4})-(\d{2})-(\d{2})/
let result = re.exec('2020-01-01')
console.log(result)
//["2020-01-01", "2020", "01", "01", index: 0, input: "2020-01-01", groups: undefined]
//index: 0
//input: "2020-01-01"
//groups: undefined

//名前付きキャプチャグループ 
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result = re.exec('2020-01-01');
//["2020-01-01", "2020", "01", "01", index: 0, input: "2020-01-01", groups: {…}]
//index: 0
//input: "2020-01-01"
//groups:
// year: "2020"
// month: "01"
// day: "01"

//Lookbehind Assertions

let alphabet = 'abcdef';
let result = alphabet.match(/(?<=abc)def/);
console.log(result)
//["def", index: 3, input: "abcdef", groups: undefined]


let result = alphabet.match(/(?<!abc)def/);
console.log(result)
//null
let result = alphabet.match(/(?<!xyz)def/);
console.log(result)
//["def", index: 3, input: "abcdef", groups: undefined]
