<template>
    <div id="app">
      <article>
          <section>
              <h2>連絡先</h2>
            <p>
             <ul>
              <li><a href="https://twitter.com/nattogohan_suki?lang=ja" target="_blank">Twitter</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100011457974455" target="_blank">Facebook</a></li>
              <li><a href="mailto:reading.legendre@gmail.com?subject=読書会参加申し込み">Mail</a></li>
              </ul>
            </p>  
          </section>
      </article>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
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
  margin-bottom: 10px;
}
article{
    display: block;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    overflow: hidden;
}
a{
    color:black;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
a:hover{
  color:orange;    /*文字色の変更*/
  transition: 0.5s;   /*ホバー時の動きをなめらかにする*/
}
a{
  text-decoration: none;  /*ブラウザ標準のリンク装飾をオフに*/
}
p{
    font-size: 110%;    /*フォントサイズの指定*/
    letter-spacing: 5px;    /*文字と文字の間隔をあける*/
    font-weight: 400;   /*文字の太さを調整*/
    line-height: 45px;  /*行間の指定（ナビボタンの高さ指定）*/
    display: block;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    overflow: hidden;   /*おまじない*/
}
</style>