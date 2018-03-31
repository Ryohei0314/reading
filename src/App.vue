<template>
  <div id="app">
      <header class="header">
        <h1>Hon de Talk</h1>
      </header>
      <nav class="navigation">
          <ul>
          <li><router-link to="/">トップ</router-link></li>
          <li><router-link to="/concept">コンセプト</router-link></li>
          <li><router-link to="/schedule">開催予定</router-link></li>
          <li><router-link to="/history">これまでの記録</router-link></li>
          <li><router-link to="/contact">お問い合わせ</router-link></li>
          </ul>
      </nav>
      <div class="content">
      <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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

html{color:#000;background:#FFF}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}

body{
font: 14px/1.6 "Hiragino Kaku Gothic Pro",Osaka,"メイリオ","ＭＳ Ｐゴシック","MS PGothic",Verdana,Arial,sans-serif;
margin:0;
color:#313131;
}

img{
outline:none;
border-style:none;
}

a{
    color:blue;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
a:visited{
    color:blue;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
a:hover {
    color: #F5A862;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
}
.navigation ul{
    width: 60%; /*横幅の指定*/
    margin-left: 20%;   /*左端から20%右側に動かす*/
    text-align: justify;
}
.navigation li{
    width: calc(20% - 2px); /*横幅の指定（線の分をマイナスする）*/
    border-left: 1px solid orange;  /*線を描く*/
    text-align: center; /*文字を中央に*/
    float: left;    /*左から並べる*/
}
.navigation li:last-child{
    border-right: 1px solid orange; /*li要素の最後の物は右側に線を描く*/
}
.navigation a{
    border-top: 1px solid orange;
    border-bottom: 1px solid orange; 
    display: block; /*1つのli全体にリンクを有効にする*/
    text-decoration: none;  /*ブラウザ標準のリンク装飾をオフに*/
    color:#313131;  /*文字色の変更*/
    font-size: 110%;    /*フォントサイズの指定*/
    letter-spacing: 5px;    /*文字と文字の間隔をあける*/
    font-weight: 400;   /*文字の太さを調整*/
    line-height: 45px;  /*行間の指定（ナビボタンの高さ指定）*/
    overflow: hidden;   /*おまじない*/
}
.navigation a:hover{
    background-color: orange;   /*背景色の指定*/
    color: #fff;    /*文字色の変更*/
    transition: 0.5s;   /*ホバー時の動きをなめらかにする*/
}
.header {
   clear: left; 
   font-size: 200%;    /*フォントサイズの指定*/
   letter-spacing: 5px;    /*文字と文字の間隔をあける*/
   font-weight: 400;   /*文字の太さを調整*/
   line-height: 45px;  /*行間の指定（ナビボタンの高さ指定）*/
   overflow: hidden;   /*おまじない*/
}

</style>
