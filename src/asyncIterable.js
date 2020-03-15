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


