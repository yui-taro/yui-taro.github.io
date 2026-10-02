# yui-taro ポートフォリオ（制作記録）

落ち着いた資料調の1ページ。作品は `works.js` のデータから、一覧表とケーススタディの両方に自動で並びます。

## 作品を増やす
1. `media/` にサムネイル（16:9 の jpg）を置く
2. `works.js` の `window.WORKS = [ ... ]` に1件追加する（上にあるほど上に表示）
3. `learned`（学んだこと）と `next`（次に挑戦したいこと）を書く。最初の3作品のものは下書きなので、自分の言葉に直す
4. `theme` に作品の色を指定（`"kansei"` / `"onegai"` / `"bonsai"`、または `"#3a6ea5"` のような色コード）。動画の上の線と一覧の丸に使われる

## YouTube の動画にする
YouTube にアップロードしたら、`works.js` の `youtube: ""` に URL を貼る（`watch?v=` / `youtu.be/` / `shorts/` どれでも可）。
`youtube` が空のあいだは `media/*.mp4` が再生される。全部 YouTube にしたら `media/*.mp4` は消してよい（サムネイルの jpg は残す）。

※ YouTube 側の公開設定は「公開」か「限定公開」に。「非公開」だと埋め込みで再生できない。

## 公開する（GitHub Pages）
このフォルダの中身をリポジトリに置き、Settings → Pages で `main` ブランチを公開する。
リポジトリ名を `yui-taro.github.io` にすると `https://yui-taro.github.io/` がこのページになる。
