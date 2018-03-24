<template>
    <div id="app">
      <article class="article">
          <section>
              <h2>開催予定</h2>
              <p class="body">
             次回開催予定は2018年4月7日（土）
              </p>
              <p2>
                テーマ本：名人伝（中島敦著）
                トークテーマ</p2>
                <ol class="schedule">
                  <li class="theme">『名人伝』の好きな点または嫌な点、よくわからない点などについて</li>
                  <li class="theme">紀昌は、甘蠅老師を越えたと言えるか</li>
                  <li class="theme">自分の仕事、趣味などへの態度と『名人伝』で出てきた技芸の極め方を比較してみてどうか</li>
                  <li class="theme">その他、本に収録された短編について自由に話しましょう</li>
                </ol>
              
              
          </section>
      </article>
    </div>
</template>

<script>
export default {
  name: 'Schedule',
  data: function(){
    return{
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
.article{
    display: block;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    overflow: hidden;
}
.body {
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
  margin-bottom: 20px;
}
.schedule, ol{
  color: black;/*文字色*/
  border-top: solid 2px black;/*破線 太さ 色*/
  border-bottom: solid 2px black;/*破線 太さ 色*/
  background: #fefff1; /*背景色*/
  text-align:left;
  margin-left: 28%;
  margin-right: 28%;
  margin-bottom: 10px;
}
.theme, li{
  
}
</style>