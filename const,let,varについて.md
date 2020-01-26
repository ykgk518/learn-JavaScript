# var、let、constについて

# はじめに
JavaScriptの巻き上げ処理について理解してなく、そのあたりでハマったので、変数宣言から学び直しました。

~~>`let`文はブロックスコープの局所変数を宣言します。~~
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let~


# スコープについて
letとconstは


## let,const,var
`let`,`const`はレキシカル環境に関してまったく同じように振る舞います。

`var`,`let`の違いは、
* `var`変数のスコープは関数全体かグローバルのいずれかである。
* `var`は関数の開始で処理される。


```JavaScript

if (true) {
    var testvar = true;
    let testlet
}

alert(testvar); //結果:true
alert(testlet); //結果:testlet is not defined
```


`var`による変数宣言は関数の開始時に処理されます。
しかし、変数は代入されるまでは`undefined`です。
```JavaScript

function sayHi() {
    phrase = "Hello";

    alert(phrase);

    var phrase;
}
```

上記のコードは以下のコードと同じです。

```JavaScript
function sayHi() {
    var phrase;
   
    phrase = "Hello";

    alert(phrase);

}
```