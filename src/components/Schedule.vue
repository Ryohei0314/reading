<template>
    <div id="app">
      <article>
          <section>
              <h2>開催予定</h2>
              <p class="body">
             次回開催予定は4月7日（土）
              </p>
          </section>
      </article>
    </div>
</template>

<script>
export default {
  name: 'schedule',
 data: function(){
    return {
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
  text-align: center;
}
</style>