<template>
    <div id="app">
      <article>
          <section>
              <h2>楽しく読書をしませんか</h2>
              <p class="body">
                ●●●●では、現在ふた月に一回ほどのペースで読書会を行っています。「１冊の本を通して雑談をする」ことを主な目的としています。ジャンルは問わず、１冊の本を読んできた人たちで語り合います。
              </p>
              <ol class="abstract">
                <li>開催地は東京近郊</li>
                <li>喫茶店か貸会議室で行います</li>
                <li>参加費は会場代+ドリンク代（1000円程度）</li>
                <li>参加条件はテーマ本を読んでくること</li>
              </ol>
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
.abstract{
  display: inline-block;
  width: 60%;
  list-style-type: decimal;
  text-align: left;
}
.body {
  margin-top: 20px;  
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
  text-align: left
}
</style>