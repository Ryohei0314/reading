<template>
    <div id="app">
      <article>
          <section>
              <h2>他の人はどう思うだろうか</h2>
              <p class="body">
                他人と会話をしていて驚いたことはありませんか？自分とは全然違う、そんなところに注目するなんて思いもよらなかった！ 話している人がこれまでに重ねた経験が違うからこそ、そんな違いも生まれます。そしてその違いに気が付くと、自分の世界が少し広くなるような心地がします。 この読書会は、そういった違い見出して「面白い」を人工的に作り出そうというところから始まりました。 そこで、この会は1冊の本を中心としていろいろな話をするということを目的としています。 1冊の本という「共通の話題」を中心として、参加される方々の感想をきっかけにふだん思っていることや問題意識を聞いて、世界が広がるとふだんの生活も面白くなっていくのではないかという期待があります。
              </p>
          </section>
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
  margin-top: 20px;  
  margin-left: 100px;
  margin-right: 100px;
  text-align: left
}
</style>