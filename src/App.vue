<template>
  <div id="app">
    <div class="head"> 对react的评价</div>
    <Add class="use" :getChildData='getChildData'></Add>
    <List class="List" :comments='comments'></List>
  </div>
</template>

<script>
import Add from './components/Talk/Add.vue'
import List from './components/Talk/List'
// import Item from './components/Talk/Item'

export default {
  name: 'App',
  data(){
    return{
        comments:[
          {
          input: 'lvxin ',
          textarea: 'vue so easy'
          },
           {
          input: 'qiaoxian ',
          textarea: 'vue so easy'
          },
           {
          input: 'shilong ',
          textarea: 'vue so easy'
          },
           {
          input: 'gailun ',
          textarea: 'vue so easy'
          },
        ]
    }
  },
  methods: {
     getChildData (comment) {
        this.comments.unshift(comment);
     }
  },
    components:{
        Add,
        List,
        // Item,
    },
}


</script>

<style >


  .head {
    height: 160px;
    font-size: 80px;
    background-color: rgb(245, 243, 243);
  }
  /* .List {
      float: right;
  } */

</style>

