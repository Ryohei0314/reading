<template>
    <div id="app">
     <article>
      <h2>楽しく読書をしませんか</h2>
      <p class="body">
        “Hon de Talk”では、現在2～3ヵ月に一回ほどのペースで読書会を行っています。
      </p>
      <p class="body">
        “１冊の本を通して雑談をする”ことが主な活動です。ジャンルは問わず、１冊の本を話題にいろんな話をします。
      </p>
      <p class="body">
         “Hon de Talk”の名前には“本で会話する”、“本音トーク”、“ほんで、ほんで？と話を促す”などのような意味をこめています（ダジャレです）。
      </p>
      <h3 class="abstract">開催概要</h3>
       <ol class="abstract">
        <li>開催地は東京都内のどこか</li>
        <li>喫茶店か貸会議室で行います</li>
        <li>参加費は会場代+ドリンク代（1000円程度）</li>
        <li>参加条件はテーマ本を読んでくること</li>
       </ol>
     </article>
    </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {}
    }
  }
</script>
<style scoped media="screen and (max-width:600px)">
article{
    display: block;
    width: 60%;
    margin-top: 20px;
    margin-left: 20%;
    margin-bottom: 20px;
    overflow: hidden;
}
h2 {
  font-weight: normal;
  font-size:120%; /*フォントサイズの調整*/
  border-top: 1px solid orange;   /*上部の線の色を指定*/
  border-bottom: 1px solid orange;    /*下部の線の色を指定*/
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
  margin-bottom: 20px;
}
p {
  margin-left: 100px;
  margin-right: 100px;
  text-align: left
}
h3{
  font-weight: normal;
  font-size:120%; /*フォントサイズの調整*/
  border-bottom: 1px solid orange;    /*下部の線の色を指定*/
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 10px;
  width: 40%;
}
ol{
  text-align: left;
  padding-left:40%;
  list-style-type: decimal;
}
</style>