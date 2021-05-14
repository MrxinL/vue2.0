 <template>
    <div class="layout">
      <el-container>
        <el-header>
                <Header/>

        </el-header>
        <el-container>
            <el-aside>

                <Aside />
            </el-aside>

            <el-main class="elmain">
                 <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
    import Header from '../../components/main/Header';
    import Aside from '../../components/main/Aside'
export default {
    components:{
        Header,
        Aside
    }
};
</script>

<style>
.layout {
    display: flex;
}
    .el-main {
        padding-left: 0px;
        margin-top: 20px;
    }
    .el-aside {
        margin-top: 20px;
        width: 200px
    }
    
</style>