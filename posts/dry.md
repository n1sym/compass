---
title: "DRY原則"
created_at: "2022-06-25"
updated_at: "2022-06-25"
category: "principle"
---

## 概要

> **D**on’t **R**epeat **Y**ourself (繰り返しを避けよ)

重複によりコードベースが大きくなれば、開発に携わる人間がシステム全体を完全に理解することが難しくなる。どこかに変更を加えた場合、それとロジック等が重複している箇所にも同様の変更が必要になる。

> 知識のあらゆる部分はそのシステムにおいて単一で、曖昧さのない、信頼できる表現でなくてはならない。

「コードを重複させてはいけない」ということ**ではない**ことに注意する。

むやみな共通化を行い、密結合を生まないように気を付ける。

## とある一例

1: DRYを忠実に実践して重複を無くしたコード
~~~rb
describe "Person#full_name" do
 it "concats the first and last names" do
   first_name = "John"
   last_name = "Doe"
   person = Person.new(:first_name => first_name, :last_name => last_name)
   person.full_name.should eq "#{first_name} #{last_name}"
 end
end
~~~

2: "John"と"Doe"が重複しているコード
~~~rb
describe "Person#full_name" do
 it "concats the first and last names" do
   person = Person.new(:first_name => "John", :last_name => "Doe")
   person.full_name.should eq "John Doe"
 end
end
~~~

好みが分かれそうではあるが、個人的には 2: のコードのほうが読みやすい。

# 共通化をしてよいかの判断

状態 (state)、結合 (coupling)、複雑性 (complexity)、コード量 (code) の順に削減することでコードを最適化するという考え方がある。

- コードがよりステートレスになるなら、結合を増やすこともいとわない
- 結合を減らすためには、コードをもっと複雑にすることもある
- コードの複雑さが軽減されるなら、コードをコピーする
- **コードの重複排除をするのは状態・結合・複雑性を増さない時のみに限る**

-----

### 参考文献

- [DRY原則の利用: コードの重複と密結合の間](https://www.infoq.com/jp/news/2012/05/DRY-code-duplication-coupling/)
- [状態、結合、複雑性、コード量の順に最適化する](https://ohbarye.hatenablog.jp/entry/2022/01/31/state-coupling-complexity-code)




