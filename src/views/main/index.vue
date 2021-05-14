 <template>
    <div>
      <el-container>
        <el-header>
                <Header/>

        </el-header>
        <el-container>
            <el-aside width="200px">

                <Aside />
            </el-aside>

            <el-main>
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
    .el-main {
        padding-left: 0px;
    }
    .el-aside {
        margin-top: 10px;
    }
</style>