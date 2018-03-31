<template>
    <div id="app">
      <article>
          <section>
              <h2>コンセプト</h2>
              <h3>他の人はどう思うだろうか</h3>
              <p class="body">
                　他人と会話をしていて驚いたことはありませんか？自分とは全然違う、そんなところに注目するなんて思いもよらなかった！話している人がこれまでに重ねた経験が違うからこそ、そんな違いも生まれます。そしてその違いに気が付くと、自分の世界が少し広くなるような心地がします。
              </p>
              <p class="body">
                　この会では1冊の本を中心として“会話”を楽しむことを目的としています。1冊の本という“共通の話題”をダシにして、参加される方々がふだん思っていることや問題意識を話し合う。その結果として見えている世界が広がり、毎日の生活が面白くすることを目指しています。
              </p>
          </section>
      </article>
    </div>
</template>

<script>
export default {
  name: 'Concept',
  data () {
    return {}
    }
  }
</script>
<style scoped>
h2 {
  font-weight: normal;
  font-size:120%; /*フォントサイズの調整*/
  border-top: 1px solid orange;   /*上部の線の色を指定*/
  border-bottom: 1px solid orange;    /*下部の線の色を指定*/
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
}
h3 {
    font-weight: normal;
    font-size:120%; /*フォントサイズの調整*/
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 30px;
}
p{
  font-weight: normal;
  font-size:110%; /*フォントサイズの調整*/
}
a {
  color: #42b983;
}
article{
    display: block;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    overflow: hidden;
}
.body {
  margin-top: 5px;  
  margin-left: 100px;
  margin-right: 100px;
  text-align: left
}
</style>