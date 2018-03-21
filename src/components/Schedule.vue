<template>
    <div id="app">{{msg}}</div>
</template>

<script>
export default {
  name: 'schedule',
 data: function(){
    return {
      msg: '次回の開催予定は4月7日（土）。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>