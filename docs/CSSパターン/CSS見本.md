---
sidebar_position: 50
---

# CSS パターン見本

このページは ConiferFruits で使える CSS パターンの見本。同名の `CSS見本.css` がこのページにだけ適用される。

## 1. Callout / 警告ボックス

> これは標準の Note ボックス。**重要な情報**を強調表示する。

<blockquote class="tip">
✅ <strong>Tip</strong>: 効率的なやり方を提案するときに使う。
</blockquote>

<blockquote class="warning">
⚠️ <strong>Warning</strong>: 注意が必要な操作の前に表示。
</blockquote>

<blockquote class="danger">
🚫 <strong>Danger</strong>: 取り返しのつかない操作（データ削除等）の警告。
</blockquote>

## 2. ステータスバッジ

ドキュメントや項目の状態を一目で示す。

<span class="badge badge-draft">DRAFT</span> 草案、まだ共有しないでください

<span class="badge badge-review">REVIEW</span> レビュー中、コメント募集中

<span class="badge badge-approved">APPROVED</span> 承認済み、公式情報

<span class="badge badge-deprecated">DEPRECATED</span> 廃止予定、新規参照は不可

## 3. テーブル

| 項目 | 担当 | 状態 | 期限 |
|------|------|------|------|
| API設計 | @alice | <span class="badge badge-approved">完了</span> | 2026-04-10 |
| 画面実装 | @bob | <span class="badge badge-review">レビュー中</span> | 2026-04-20 |
| テスト | @carol | <span class="badge badge-draft">未着手</span> | 2026-04-25 |
| ドキュメント | @dave | <span class="badge badge-deprecated">不要</span> | - |

## 4. コードブロック

インライン `npm install` のように使う。

```python
def hello(name: str) -> str:
    return f"こんにちは、{name}さん！"

print(hello("世界"))
```

```bash
git checkout -b feature/new-thing
git push -u origin feature/new-thing
```

## 5. キーボードショートカット

保存: <kbd>Cmd</kbd> + <kbd>S</kbd> （Mac）/ <kbd>Ctrl</kbd> + <kbd>S</kbd> （Windows）

検索: <kbd>Cmd</kbd> + <kbd>K</kbd>

開発者ツール: <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd>

## 6. ステップ手順

<ol class="steps">
  <li>リポジトリをクローンする</li>
  <li>依存関係をインストール（<code>npm install</code>）</li>
  <li>環境変数を設定（<code>.env.local</code> を作成）</li>
  <li>開発サーバー起動（<code>npm run dev</code>）</li>
  <li>ブラウザで <code>http://localhost:3000</code> を開く</li>
</ol>

## 7. 定義リスト（用語集）

<dl>
  <dt>Conifer</dt>
  <dd>針葉樹。このツールの名前の由来。</dd>

  <dt>カスケードCSS</dt>
  <dd>フォルダ階層に沿って自動適用されるスタイル。</dd>

  <dt>BlockNote</dt>
  <dd>Notion風のブロック編集エディタライブラリ。</dd>

  <dt>Docusaurus</dt>
  <dd>Meta製の静的サイトジェネレータ、ドキュメント特化。</dd>
</dl>

## 8. 引用カード

<div class="quote-card">
ドキュメントは未来の自分への手紙である。書いてる最中は退屈に思えても、半年後に救われる。
<cite>— 名もなきエンジニア</cite>
</div>

## 9. 見出しアンカー

このページの H2/H3 にカーソルを乗せると左側に `#` が現れる（このページ内で確認）。

---

以上がデモ。`CSS見本.css` を編集すれば見た目を変えられる。
