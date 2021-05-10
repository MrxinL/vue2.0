<template>
    <div>
      <span>评论回复：</span>
        <Item v-for="(comment, index) in comments " :key="index" :comment='comment'/>

    </div>
</template>

<script>
  import Item from './Item'

export default {
  
    props:['comments'],
    data() {
      return {

      }
    },
    components: {
      Item
    }
}
</script>

<style lang="less">

</style>