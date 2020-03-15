"hello".padStart(6);//" hello"
"hi".padEnd(6);//"hi    "

"hello".padEnd(11, " World");//"hello World"
"hello".padEnd(7, " World");//"hello W"
"hello".padStart(6, "1");//"1hello"
"hello".padStart(7, "1");//"11hello"

let drone = {
    x:1,
    y:2,
    z:3,
    name:"drone1",
}

Object.values(drone)//[1, 2, 3, "drone1"]
Object.entries(drone)
//["x", 1]
// ["y", 2]
// ["z", 3]
// ["name", "drone1"]



let drone = {
    x:1,
}

Object.getOwnPropertyDescriptors(drone)
//{x:{value: 1, writable: true, enumerable: true, configurable: true}}

/*
Trailing commas in function parameter lists and calls
*/

//from this
let drone = {
    x:1,
    y:2
}

//to this
let drone = {
    x:1,
    y:2,
}


//Atomics.add()メソッド
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 3

console.log(Atomics.add(uint8, 0, 2))//3

console.log(Atomics.add(uint8, 0, 1))//5

console.log(Atomics.load(uint8,0));//6

/*
Promise構文で書いた場合とAsync,Awaitで書いた場合の非同期処理プログラミングの違い
*/

//Promiseで書いた場合
function resolveSample(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    })
}

function sample() {
    let result = 0;

    return resolveSample(5)
        .then(val => {
            result += val;
            return resolveSample(10);
        })
        .then(val => {
            result *= val;
            return resolveSample(20);
        })
        .then(val => {
            result += val;
            return result;
        });
}

sample().then((v) => {
    console.log(v); //70
});


//Async,Awaitを使用した場合
function resolveSample(value){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(value)
        }, 2000)
    })
}

async function sample(){
    return await resolveSample(5) * await resolveSample(10) + resolveSample(20);
}

sample().then((v) => {
    console.log(v); //70
});
