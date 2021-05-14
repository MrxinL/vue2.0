<template>
   <div class="Fatherbox">
      <el-card class="box-card">
          欢迎登录
      <div class="text">
          <el-input 
            v-model="username" 
            placeholder="请输入账号"
            class="username"
            >
          </el-input>
          <el-input 
            placeholder="请输入密码" 
            v-model="password" 
            show-password
            class="password"
            >
          </el-input>

        
      </div>
        <el-button 
              type="primary"
              @click="Submit"
              >
              提交
          </el-button>
    </el-card>


  </div>
</template>

<script>

export default {
  data() {
    return{
        username: '',
        password: ''
    }
  },
  methods:{
    Submit() {
      const user = JSON.parse(window.localStorage.getItem('user'));
      const {username, password} = user
      if( this.username == username && this.password == password){
        // this.$router.push('/')
        this.$axios({
            url:'/long',
        }).then(result => {
           console.log(result)
        })
      }


    }
  },
  mounted() {
    const data = 
    { 
      username:'123456', 
      password:'123456'
      
    }

    
      window.sessionStorage.setItem('user', JSON.stringify(data))
  }
  
}
</script>

<style>
    .Fatherbox {
      background-image: url(../../uploads/background.jpg);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;


    }
    .text {
      width: 400px;
      height: 250px;
    }
    .username {
      margin-top: 32px;
      margin-bottom: 32px;
    }

</style>