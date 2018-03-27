<template>
    <div id="app">
    <article class="article">
       <h2>これまでの記録</h2>
       <h3>書名とレポート記事へのリンクを載せています。</h3>
    </article>
    <div v-for="event in eventList" class="list">
    <ul class="book-list">
      <li class="book-item">書名：{{ event.title}}</li>
      <li class="book-item">著訳者名：{{ event.author}}</li>
      <li class="book-item">シミルボンレビュー：<a v-bind:href="event.url" target="_blank">{{ event.report}}</a></li>
      <li class="book-item">開催日：{{ event.date}}</li>
      <li class="book-item">参加人数：{{ event.member}}人</li>
    </ul>
      <img v-bind:src="event.image" width="10%" height="10%" class="image"/>
    </div>
</div>
</template>

<script>
    export default {
        name: 'History',
        data: function() {
            return {
                eventList: [{
                        title: "月と六ペンス",
                        author: "サマセット・モーム著 行方昭夫訳",
                        report: "理想はあるか～得ることと捨てること",
                        url: "https://shimirubon.jp/reviews/1687389",
                        date: "2018/1/27",
                        member: "5",
                        address: {
                            address: "〒160-0023 東京都新宿区西新宿１丁目２３−１ かどやホテル 1F",
                            coordinate: { lat: 35.6897382, lng: 139.6961738 }
                        },
                        image: "https://cover.openbd.jp/9784102130278.jpg"
                    },
                    {
                        title: "一人の哀しみは世界の終わりに匹敵する",
                        author: "鹿島田真希著",
                        report: "あふれ出る聖性",
                        url: "https://shimirubon.jp/reviews/1686192",
                        date: "2017/11/12",
                        member: "3",
                        address: {
                            address: "〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル",
                            coordinate: { lat: 35.68137, lng: 139.77014399999996 }
                        },
                        image: "https://cover.openbd.jp/9784309015491.jpg"
                    },
                    {
                        title: "悪童日記",
                        author: "アゴタ・クリストフ著 堀茂樹訳",
                        report: "双子の倫理観",
                        url: "https://shimirubon.jp/reviews/1684538",
                        date: "2017/8/20",
                        member: "3",
                        address: {
                            address: "〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル",
                            coordinate: { lat: 35.68137, lng: 139.77014399999996 }
                        },
                        image: "https://cover.openbd.jp/9784151200021.jpg"
                    },
                    {
                        title: "ウンコな議論",
                        author: "H. G. フランクファート著 山形浩生訳",
                        report: "前提曖昧にして議論ウンコとなる",
                        url: "https://shimirubon.jp/reviews/1683215",
                        date: "2017/6/24",
                        member: "2",
                        address: {
                            address: "〒100-0002 東京都千代田区皇居外苑１−１",
                            coordinate: { lat: 35.6778686, lng: 139.75550939999994 }
                        },
                        image: "https://cover.openbd.jp/9784480097606.jpg"
                    },
                    {
                        title: "御伽草子",
                        author: "太宰治著",
                        report: "処女と残酷",
                        url: "https://shimirubon.jp/reviews/1681592",
                        date: "2017/4/15",
                        member: "2",
                        address: {
                            address: "〒104-0061 東京都中央区銀座５丁目６ 中央区銀座４丁目１−２",
                            coordinate: { lat: 35.6717519, lng: 139.76430819999996 }
                        }
                    },
                    {
                        title: "アイの物語",
                        author: "山本弘著",
                        report: "フィクションはあなたの人生でどういう意味を持っているか",
                        url: "https://shimirubon.jp/reviews/1677399",
                        date: "2017/1/7",
                        member: "3",
                        address: {
                            address: "〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル",
                            coordinate: { lat: 35.68137, lng: 139.77014399999996 }
                        },
                        image: "https://cover.openbd.jp/9784044601164.jpg"
                    },
                    {
                        title: "沈黙",
                        author: "遠藤周作著",
                        report: "信じること",
                        url: "https://shimirubon.jp/reviews/1675825",
                        date: "2016/11/19",
                        member: "2",
                        address: {
                            address: "〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル",
                            coordinate: { lat: 35.68137, lng: 139.77014399999996 }
                        },
                        image: "https://cover.openbd.jp/9784101123158.jpg"
                    },
                    {
                        title: "少女七竈と七人の可愛そうな大人",
                        author: "桜庭一樹著",
                        report: "突き破る、ぐるぐるまわる",
                        url: "https://shimirubon.jp/reviews/1673988",
                        date: "2016/6/25",
                        member: "2",
                        address: {
                            address: "〒145-0062 東京都大田区北千束１丁目５４−１１",
                            coordinate: { lat: 35.6101302, lng: 139.68519270000002 }
                        },
                        image: "https://cover.openbd.jp/9784044281052.jpg"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    h2 {
        font-weight: normal;
        font-size: 120%;
        /*フォントサイズの調整*/
        border-top: 1px solid orange;
        /*上部の線の色を指定*/
        border-bottom: 1px solid orange;
        /*下部の線の色を指定*/
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    h3 {
        font-weight: normal;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .article {
        display: block;
        width: 60%;
        margin-left: 20%;
        overflow: hidden;
    }

    .list,
    ol {
        list-style-type: none;
        color: black;
        /*文字色*/
        border-top: solid 2px black;
        /*破線 太さ 色*/
        border-bottom: solid 2px black;
        /*破線 太さ 色*/
        background: #fefff1;
        /*背景色*/
        text-align: left;
        margin-left: 28%;
        margin-right: 28%;
        margin-bottom: 10px;
    }
    .book-item {
        line-height: 1.5;
        /*文の行高*/
        padding: 0.5em 0;
        /*前後の文との余白*/
    }
</style>
