/*
  作品データ。ここに1件足すと、ページに作品が1つ増えます（上にあるものほど上に表示）。

  {
    id:       英数字の短い名前（ページ内リンクに使う）
    title:    作品名
    kicker:   ジャンルなどの小見出し
    catch:    一言（キャッチコピー）
    about:    2〜3文の説明
    points:   工夫したところ（いくつでも）
    tech:     使った技術（タグ）
    date:     公開・制作した時期
    youtube:  YouTube の URL（watch?v= / youtu.be / shorts どれでも可）。空なら下の video を再生
    video:    YouTube が無いときに再生する動画ファイル
    thumb:    サムネイル画像
    links:    [{ label, url, primary }]  primary: true にすると目立つボタンになる
    learned:  この作品で学んだこと（自分の言葉で）
    next:     次に挑戦したいこと
    theme:    作品の雰囲気。下の THEMES から選ぶか、{ bg, ink, accent, sub, font } で直接指定
  }
*/
window.WORKS = [
  {
    id: "chuka-taisen",
    title: "中華大戦",
    titleSub: "CHUKA TAISEN",
    kicker: "3Dアクション",
    catch: "戦い方が、そのまま料理の出来になる。",
    about:
      "中華料理の戦士を選び、調理を拒んで暴れる巨大食材と戦う3Dアクション。倒したあとの「お披露目」で、戦闘の記録が一皿の評価に変わります。勝利の合図は「完成！！」。",
    points: [
      "取り込んだ殻の数・受けたダメージ・撃破タイム・ジャストガード・連撃数を、具だくさん度・見た目の美しさ・熱々度・火加減・味の染みの5項目に変換",
      "殻を取り込むほど見た目が変わり、そのままお披露目の一皿になる",
      "企画書から設計書・実装・自動テストまで、AIエージェントと一緒に制作",
    ],
    tech: ["Unity 6", "C#", "URP", "Cinemachine", "WebGL"],
    date: "2026.08",
    youtube: "",
    video: "media/kansei.mp4",
    thumb: "media/kansei.jpg",
    links: [
      { label: "ブラウザで遊ぶ", url: "https://yui-taro.github.io/action-takagi/play/", primary: true },
      { label: "Windows版（v1.0.0）", url: "https://github.com/yui-taro/action-takagi/releases/tag/v1.0.0" },
      { label: "配布ページ", url: "https://yui-taro.github.io/action-takagi/" },
      { label: "GitHub", url: "https://github.com/yui-taro/action-takagi" },
    ],
    // ↓ 下書き。自分の言葉に直してください
    learned: "テストが全部通っていても、実際に遊ぶと攻撃が届かないことがある。仕組みは「動く」と「遊べる」の両方で確かめる必要があると学びました。",
    next: "遊んでもらった感想をもとに、操作の手触りと採点のバランスを詰めること。",
    theme: "kansei",
  },
  {
    id: "onegai-nete",
    title: "おねがい、寝て！",
    kicker: "ステルス系短編ゲーム",
    catch: "眠った赤ちゃんを、起こさずベッドへ。",
    about:
      "敵も銃も出てこないのに、いちばん息を止めるステルスゲーム。マウスを動かす速さがそのまま腕の速さになります。反応したら、止まる。失敗すると「BACK TO DADDY.」。2〜4分で遊べます。",
    points: [
      "マウスの動きをそのまま腕の動きにして、「そっと下ろす」緊張を手に伝える",
      "眉や呼吸の変化を見て止まる、「何もしない」ことも操作になる",
      "チュートリアルから失敗・成功の演出まで、寝かしつけの夜の空気で統一",
    ],
    tech: ["Windows"],
    date: "2026.09",
    youtube: "",
    video: "media/onegai.mp4",
    thumb: "media/onegai.jpg",
    links: [
      { label: "Windows版を入手", url: "https://github.com/yui-taro/onegai-nete-game/releases", primary: true },
      { label: "プレイ動画（2分42秒）", url: "https://github.com/yui-taro/onegai-nete-game/tree/main/%E5%8B%95%E7%94%BB" },
      { label: "GitHub", url: "https://github.com/yui-taro/onegai-nete-game" },
    ],
    // ↓ 下書き。自分の言葉に直してください
    learned: "敵がいなくても、「何もしない」ことを操作にするだけで緊張は生まれる。演出と間で空気を作る大切さを学びました。",
    next: "ブラウザでも遊べるようにして、もっと気軽に試してもらえる形にすること。",
    theme: "onegai",
  },
  {
    id: "janken-bonsai",
    title: "じゃんけん盆栽",
    kicker: "ブラウザゲーム",
    catch: "五つの勝負が、一本の景色になる。",
    about:
      "CPUと5回じゃんけんすると、その手と勝敗で一本の盆栽が育ちます。グーは幹と根、チョキは枝、パーは葉と花。負けた手も紅葉や抱石として景色になり、最後に盆栽へ名前がつきます。",
    points: [
      "手（3種）× 勝敗（3種）で9通りの育ち方。負けても、ちゃんと育つ",
      "完成した盆栽に「散っても映える・紅葉番長」のような名前と紹介文がつく",
      "外部ライブラリなし。HTML・CSS・JavaScriptとインラインSVGだけで動く",
    ],
    tech: ["HTML", "CSS", "JavaScript", "SVG"],
    date: "2026.08",
    youtube: "",
    video: "media/bonsai.mp4",
    thumb: "media/bonsai.jpg",
    links: [
      { label: "ブラウザで遊ぶ", url: "https://yui-taro.github.io/janken-bonsai/", primary: true },
      { label: "GitHub", url: "https://github.com/yui-taro/janken-bonsai" },
    ],
    // ↓ 下書き。自分の言葉に直してください
    learned: "ライブラリを使わなくても、SVG と少しの JavaScript で「育っていく」表現が作れると学びました。",
    next: "スマホの縦画面でも遊べるレイアウトにすること。",
    theme: "bonsai",
  },
];
