# learn-JavaScript

**読書感想文じゃあーー！！**



# JavaScript入門

## JavaScriptとは？

### JavaScriptの進化について(キーワード)
  * `LiveScript`
  * `Javaの弟`
  * 完全に独立
  * `ECMAScript`の保持

JavaScript は当初 “Webページを活かすため” に作られました。
この言語はスクリプト言語と呼ばれ、プレーンテキストとして提供され実行されます。
ブラウザだけでなくサーバー上でも実行可能。(JavaScriptエンジンが存在するデバイスであれば問題なし)

### JavaScriptエンジンの種類

  * `V8`:Chrome と Opera
  * `SpiderMonkey`: MozillaによってFirefoxと派生物向けに開発された。
  * `JavaScriptCore`: AppleのSafari向けのエンジン
  * `Chakra`: Microsoft Edgeのエンジン
  * `Hermes`: Facebookが開発したエンジンであり、React Nativeを使用するAndroidアプリ向けに最適化されている


### エンジンはどう動く？

1.エンジン (ブラウザの場合は組み込まれています) はスクリプトを読み(“パース”)ます。
2.その後、スクリプトを機械語に変換(“コンパイル”)します。
3.機械語が実行されます。

## ブラウザ内のJavaScriptで出来ないことは？

### JavaScriptに対する制限

サンドボックスの考え方だな。(安全なWebアプリケーションの作り方で書いてあったと思う)
**ブラウザでは、JavaScriptの機能はユーザの安全のために制限されている。** その目的は、悪意のあるWebページがプライベートな情報へアクセスしたり、ユーザデータへ危害を加えることを防ぐことです。
以下、制限の種類。

* OS機能、ファイルシステムなどにアクセスすることができない。
* カメラやマイクなどデバイスと通信する方法はできるが明示的にユーザの許可が必要
* 異なるタブやウィンドウは一般的にお互いに知らない。`Same Origin Policy`の考え方
* JavaScriptは他のサイト/ドメインからデータを受信することは制限される

### なにがJavaScriptを特別にしているか

JavaScriptに対するいい評価について。

* HTML/CSSとの完全な統合
* シンプルなことはシンプルに(ここよくわからん、なにがシンプル？なにと比較して？)
* メジャーなブラウザでサポートされてある。デフォルトで有効

### JavaScriptにトランスコンパイラできる言語たち

* `CoffeeScript`:JavaScriptの**シンタックスシュガー**(シンタックスシュガーって何？)より短い構文を導入し、より簡潔でクリアなコードを書くことができる
* `TypeScript`:複雑なシステムの開発とサポートを簡素化するために、**厳密なデータ型指定** の追加に焦点をあてている。  
* `Dart`:ブラウザ以外の環境（モバイルアプリのような）で動作する独自のエンジンを持ったスタンドアローンな言語

## JSのリファレンス

* MDN (Mozilla) JavaScript リファレンス
* MSDN 

## Hello World!

JavaScirptはHTMLの文書に`<script>`タグを使用してHTMLの文書に埋め込むことができます。

## 外部スクリプト

多くのJavaScriptコードを持っている場合、別々のファイルに置くことができます。

スクリプトファイルは、src 属性でHTMLに記述します。

```JavaScript
//サイトルートからの絶対パスで指定
<script src="/path/to/script.js"></script>

//現在のページから相対パスで指定
<script src="script.js"></script>

//URLで指定
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>

```


**原則、HTML内にはシンプルなスクリプトのみ置くこと**

複雑なプログラムは別ファイルに分割します。ファイルを分割することで、ブラウザがダウンロードしてそれをブラウザのキャッシュに保存できネットワーク通信を削減することができる。

# コードの構造

基本的にメッセージは一行にする。セミコロンは省略できる。しかし、改行によって文が分割されるとしてもセミコロンを置くことを推奨します。

以下、エラー例。

```JavaScript
alert("There will be an error")

[1, 2].forEach(alert)
```

なんで？
⇒JavaScriptでは角括弧 [...] の前にはセミコロンを想定していない。


# モダンなモード`use strict`

`"use strict"` もしくは `'use strict'`。 これがスクリプトの先頭に位置する場合、すべてのスクリプトは “最新の” 方法で動作します。


"use strict" と “default” モードの違いはこの後にも説明があります。

次のチャプターでは、言語の機能を学びながら strict mode と default mode の違いについて説明します。幸い、それほど多くありません。そしてそれらは実際に我々の開発をより良くします。

現段階では、それについて一般的なことを知っていれば十分です:

1. `"use strict"` ディレクティブは “最新” モードにエンジンを切り替え、いくつかの組み込みの機能の振る舞いを変更します。勉強しながらその詳細を見ていきましょう。
2. strict mode は先頭の `"use strict"` で有効になります。また、自動的に strict mode を有効にする `“classes”` や `“modules”` のようないくつかの機能もあります。
3. strict mode はすべてのモダンブラウザによってサポートされています。
4.  常に `"use strict"` で始まるスクリプトは推奨されます。このチュートリアルのすべての例は、そうでないと明示されていない限り(ほとんどないですが)それを想定しています。


## データ型

### 数値

### 文字列

3種類存在しています。
* シングルクウォート
* ダブルクォート
* バッククォート:差込み機能がある。

※char型はJavaScriptにはない。

### null型
JavaScriptでは、 null は他の言語のような “存在しないオブジェクトへの参照” または “null へのポインタ” ではありません。
それは、 “無し”、“空” または “不明な値” と言った意味を持つ特別な値。

この概念が新しい。


### undefined値
特殊な値 undefined も別に扱われます。null のように、それ自身の型を持ちます。

undefined の意味は “値は代入されていません” です。

変数が宣言されているのにもかかわらず、値が代入されていない場合の値は`undefined`。

### オブジェクトとシンボル
このへんまだよくわからない。

シンボルってなに？

### typeof 操作
型確認でしょ？

## 型変換

### 数値変換のルール

* `undefined`→`NaN`
* `null`→`0`
* `true`と`false`→`1`and`0`
* `string`→`最初と最後のスペースは取り除かれる`

### Boolean値の変換ルール

* 0, 空文字, null, undefined や NaN のように直感的に “空” の値は false になります。
* 他の値は true になります。

## 比較

### 文字列の比較

### null と undefined の比較

数学や他の比較 `< > <= >=`
値 `null/undefined` は数値に変換されます: `null` は `0` になり、`undefined` は `NaN` (Not a Number)になります。
そして、より重要なことはこれらの機能でトラップに陥らない方法です。

### 奇妙な結果

```JavaScript

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

```


## alert,prompt,confirm

この三つはブラウザの機能。

# 反復可能なオブジェクトについて
反復可能な(iterable)オブジェクトはforループで任意のオブジェクトを使用できるためのオブジェクトの概念です。
配列は反復可能ですが、配列だけが反復可能ではなく、文字列も反復可能です。

```JavaScript
let range = {
    from: 1,
    to: 5
};
```

`range`をiterableにするためには`Symbol.iterator`というメソッドをオブジェクトに追加する必要があります。

```JavaScript
range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true};
            }
        }
    };
};
```

`range[Symbol.iterator]()`の呼び出しで生成され、反復を処理します。
ここで`next()`の結果は必ず{done: Boolean, value: any}の形式です。
`done: true`で繰り返しが終了したことを意味します。


