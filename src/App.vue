<template>
  <div id="app">
    <h1></h1>
    <ul v-for="event in eventList">
      <li>書名：{{ event.title}}</li>
      <li>著訳者名：{{ event.author}}</li>
      <li>シミルボンレビュー：<a v-bind:href="event.url">{{ event.report}}</a></li>
      <li>開催日：{{ event.date}}</li>
      <li>参加人数：{{ event.member}}人</li>
      <li>開催場所：{{ event.address}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return{
      eventList:[
    {title:"月と六ペンス",
     author:"サマセット・モーム著 行方昭夫訳",
     report:"理想はあるか～得ることと捨てること",
     url: "https://shimirubon.jp/reviews/1687389", 
     date:"2018/1/27", 
     member:"5",
     address:"〒160-0023 東京都新宿区西新宿１丁目２３−１ かどやホテル 1F"
    },
    {title:"一人の哀しみは世界の終わりに匹敵する",
     author:"鹿島田真希著",
     report:"あふれ出る聖性",
     url:"https://shimirubon.jp/reviews/1686192",
     date:"2017/11/12",
     member:"3",
     address:"〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル"
    },
    {title:"悪童日記",
     author:"アゴタ・クリストフ著 堀茂樹訳",
     report:"双子の倫理観",
     url:"https://shimirubon.jp/reviews/1684538",
     date:"2017/8/20",
     member:"3",
     address:"〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル"
    },
    {title:"ウンコな議論",
     author:"H. G. フランクファート著 山形浩生訳",
     report:"前提曖昧にして議論ウンコとなる",
     url:"https://shimirubon.jp/reviews/1683215",
     date:"2017/6/24",
     member:"2",
     address:"〒100-0002 東京都千代田区皇居外苑１−１"
    },
    {title:"御伽草子",
     author:"太宰治著",
     report:"処女と残酷",
     url:"https://shimirubon.jp/reviews/1681592",
     date:"2017/4/15",
     member:"2",
     address:"〒104-0061 東京都中央区銀座５丁目６ 中央区銀座４丁目１−２"
    },
    {title:"アイの物語",
     author:"山本弘著",
     report:"フィクションはあなたの人生でどういう意味を持っているか",
     url:"https://shimirubon.jp/reviews/1677399",
     date:"2017/1/7",
     member:"3",
     address:"〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル"
    },
    {title:"沈黙",
     author:"遠藤周作著",
     report:"信じること",
     url:"https://shimirubon.jp/reviews/1675825",
     date:"2016/11/19",
     member:"2",
     address:"〒103-0028 東京都中央区八重洲１丁目６−１７ 八重洲勧業ビル"
    },
    {title:"少女七竈と七人の可愛そうな大人",
     author:"桜庭一樹著",
     report:"突き破る、ぐるぐるまわる",
     url:"https://shimirubon.jp/reviews/1673988",
     date:"2016/6/25",
     member:"2",
     address:"〒145-0062 東京都大田区北千束１丁目５４−１１"
    }
    ]
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: none;
  margin-top: 60px;
}
ul, ol{
  list-style-type: none;
  color: black;/*文字色*/
  border-top: solid 1px orange;/*破線 太さ 色*/
  border-bottom: solid 1px orange;/*破線 太さ 色*/
  background: #fefff1; /*背景色*/
  text-align:left;
  margin-left: 350px;
  margin-right: 350px;
}

ul li, ol li {
  line-height: 1.5; /*文の行高*/
  padding: 0.5em 0; /*前後の文との余白*/
}
</style>
