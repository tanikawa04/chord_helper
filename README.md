# Chord Helper

Chord Helper は JavaScript 上でコード（Chord / 和音）を扱うためのライブラリです。現在はコードのパース機能のみを提供しています。

## Download

- [chord_helper.js](http://diatonic.codes/lib/chord_helper.js)
- [chord_helper.min.js](http://diatonic.codes/lib/chord_helper.min.js)

## Usage

### in ES6 / ES2015

```javascript
import ChordHelper from 'your/source/folder/chord_helper.js';

// 基本形モード
ChordHelper.setConfig({
    includesBass: true,
    lowerBound: 20
});

ChordHelper.parseChord('CM7').toObj();      // => {root: 'C', type: 'MAJOR_SEVENTH', bass: ''}
ChordHelper.parseChord('CM7').toNotes();    // => [12, 24, 28, 31, 35]

// オートボイシングモード
ChordHelper.setConfig({
    includesBass: true,
    autoVoiceing: true,
    centerNote: 60
});

ChordHelper.parseChord('F#m/A').toObj();    // => {root: 'F#', type: 'MINOR', bass: 'A'}
ChordHelper.parseChord('F#m/A').toNotes();  // => [45, 57, 61, 66]
```

## ChordHelper.parseChord

コードをパースするメソッドです。引数で渡した文字列をパースします。パースの戻り値に `toObj` メソッドまたは `toNotes` メソッドをチェインすることで、結果を取得します。なお、パースに失敗した場合は例外オブジェクト `ChordParseError` をスローします。

### パース可能な文字

- 音名
    - A, B, C, D, E, F, G
- 変化記号
    - シャープ: ♯, ＃, #
    - フラット: ♭, b
- コードの種類
    - メジャー: M, △, maj
    - マイナー: m, -, min
    - オーギュメント: aug, +
    - ディミニッシュ: dim, ○
    - ハーフディミニッシュ: φ
- 分数コードのセパレータ
    - /, on


## ChordHelper.setConfig の項目

コードのパース結果のオブジェクトを `toNotes` メソッドで取得する際に利用される設定項目です。

### includesBass

ベースノートを付加するかを指定します。`true` の場合はベースノートを付加し、 `false` の場合は付加しません。

### autoVoicing

`centerNote` の値に応じたコードの転回を許可するかを指定します。 `true` の場合は `centerNote` の値を中心にコードがボイシングされ、基本形・転回形の判断が自動的に行われます。 `false` の場合は、`lowerBound` の値よりも上の音域で、基本形のコードがボイシングされます。

### centerNote

`autoVoicing` が `true` の場合のみ有効

コードボイシングの中心となるノートナンバーを指定します。

### lowerBound

`autoVoicing` が `false` の場合のみ有効

コードの最低音の高さを指定します。この値よりも上の音域でコードの基本形がボイシングされます。ただし、 `lowerBound` はコードの基準値であり、ベースノートは除外されます。つまり、ベースノートの音の高さについては `lowerBound` よりも下になる場合があります。


## 今後の実装予定

- テンションノート
    - 9th, 11th, 13th
    - ♭5th, ♯5th など
- パワーコード
- 様々なボイシング
    - Drop 2, Drop 3, etc.
