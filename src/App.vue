<template>
  <div id="app">
    <div class="head"> 对react的评价</div>
    <Add class="use" @listenToChild='getChildData'></Add>
    <List class="List"></List>
  </div>
</template>

<script>
import Add from './components/Talk/Add.vue'
import List from './components/Talk/List'
// import Item from './components/Talk/Item'

export default {
  name: 'App',
  methods: {
     getChildData (val) {
       const {input, textarea} = val;
       console.log(`子组件传递过来的数据: ${input},${textarea}`)
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
  .List {
  display: flex;
  }

</style>

