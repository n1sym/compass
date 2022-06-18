---
title: "コードの可読性"
created_at: "2022-05-28"
updated_at: "2022-06-19"
category: "writing"
---

### 命名規則

[https://github.com/kettanaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

基本的な命名規則については、上記のリポジトリに簡潔にまとまっている。

明らかに使い捨ての変数を除き、名前には情報を詰め込みたい。多少長くなってもエディタが補完してくれる。

文脈を把握していなくても、ぱっと読んだだけで意図が理解できる、明確で具体的な命名が理想である。

もしあまりにも長すぎる名前になってしまったら、そもそもその名前を持たせようと思っていることが間違いかもしれない。スコープを狭めて小さく作り直すことで、名前をシンプルにすることもできる。

困ったら日本語を入力するとネーミングを生成してくれるサービスを使うのもよい。

[https://codic.jp/engine](https://codic.jp/engine)

### 誤解されない命名

API からユーザーデータを取得するメソッドは `get_user_data()` でなく `fetch_user_data()` と命名するとよい。

限界値を決めるときは、`limit` でなく `max_` や `min_` を使うとよい。

### コードを段落に分類する

コードも一種の文章であるのだから「段落」に分けるべきという考え方。

GitLab の [Newlines style guide](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/development/newlines_styleguide.md) がシンプルにまとまっていて分かりやすい。

### 早めに返す

失敗ケースは早期リターンで処理する。

~~~rb
def hoo
  return if is_invalid?
  ...
end
~~~

### 説明変数
分かりやすいように名前をつける
~~~rb
CSV.parse(csv_text) do |row|
  user_id = row[0]
  user_name = row[1]
end
~~~

### 要約変数

大きなコードを小さな名前に置き換える
~~~rb
user_name = params[:user_data][:name]
~~~

### 一度に１つのタスクを行う

任意のメソッド内に、そのメソッドでやりたいことと直接関連しない、**無関係の下位問題** が相当量あれば、それらを抽出して別の関数にする。

これはテスト容易性にも繋がる。

-----

### 参考文献

- [リーダブルコード ――より良いコードを書くためのシンプルで実践的なテクニック](https://www.oreilly.co.jp/books/9784873115658/)
- [優れたテスト容易性を実現するためのポイント](https://www.praha-inc.com/lab/posts/testability)



