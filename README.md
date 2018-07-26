# hugo-toc-fix

[Hugo][]で、目次を修正するためのテーマです。

[Issue #1778][]で議論されているように、
現在は`<h1>`から目次を作成するため、本文が`<h2>`から始まっていると動きません。
これを修正します。

## 前提条件

[Theme Components][]および[Hugo Pipes][]を使用するため、
[Hugo][] 0.43以上が必要です。

## テンプレートへの組み込み方法

テンプレートに以下の記述を追加してください。

```
{{- partialCached "hugo-toc-fix" . }}
```

## ライセンス

MITライセンスです。

[Hugo]: https://gohugo.io/
[Hugo Pipes]: https://gohugo.io/hugo-pipes/
[Theme Components]: https://gohugo.io/themes/theme-components/
[Issue #1778]: https://github.com/gohugoio/hugo/issues/1778
