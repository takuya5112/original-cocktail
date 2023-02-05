# アプリ名
original-cocktail

# 使用技術
## インフラ
AWS / Docker / Mysql

## フロントエンド
React / TypeScript / Emotion / HTML

## バックエンド
PHP / Laravel(9.3)

# ページ
・ログインページ
・会員登録
・投稿一覧
・マイページ
・おすすめランキング

# 機能
## ログイン
メールアドレス、パスワードでログイン
「会員登録」へのリンクも用意しておく。


## 会員登録
名前、メールアドレス、パスワード(確認用も)で登録できるようにする。


## 投稿一覧
・投稿カード
画像、投稿日時、タイトル、いいね、削除ボタン、投稿者名
※クリックすると、レシピ、コメントを含む情報をモーダルで表示
  コメントも表示。投稿出来る。

## 投稿
投稿画面はモーダルで表示。
画像、タイトル、レシピ、コメントを投稿。


## マイページ
・会員情報を編集出来るようにする（名前、メールアドレス、パスワード）
・いいねしたレシピ一覧を表示


## おすすめランキング
いいねの多い順の投稿一覧を表示


# DB
## usersテーブル
|Column|Type|Options|
|------|----|-------|
name|string|null:false|
email|string|null:false|
password|string|null:false|
create_at
update_at

### relation
- hasMany: recipe
- hasMany: like
- hasMany: comment


## recipesテーブル
|Column|Type|Options|
|------|----|-------|
image|string|
title|string|null:false|
recipe|string|null:false|
text|string|
user_id|integer|null:false, foreign_key|
like_id|integer|null:false, foreign_key|
create_at
update_at

### relation
- belongsTo: user
- hasMany: like
- hasMany: comment

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
text|string|null:false|
user_id|integer|null:false, foreign_key|
recipe_id|integer|null:false, foreign_key|
create_at
update_at

### relation
- belongsTo: user
- belongsTo: recipe

## likesテーブル
|Column|Type|Options|
|------|----|-------|
user_id|integer|null:false, foreign_key|
recipe_id|integer|null:false, foreign_key|
create_at
update_at

### relation
- belongsTo: user
- belongsTo: recipe