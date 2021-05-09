<template>
<div class="add">
      <span class="user">用户名:</span>
      <el-input 
          v-model="input" 
          placeholder="请输入内容" 
          class="username">
      </el-input>

      <span>评论内容:</span>
      <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="textarea">
      </el-input>

      <el-button @click="handclick">提交</el-button>
</div>
</template>
<script>
export default {
    name: 'Add',
    data(){
      return {
        input:'',
         textarea: ''
      }
    },
    methods: {
        handclick : function() {
          console.log(this.$data)
            this.$emit('listenToChild', this.$data)
        }
    }

}
</script>
<style >
  .add {
    margin: 100;
    width: 15%;
  }

  .username {
    margin-bottom: 20px;
  }

</style>