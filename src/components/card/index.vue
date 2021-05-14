<template>
<div class="cardlayout">

      <el-card class="box-card" shadow>
        <div ref="myEcahrts1" class="firstquarter">
        </div>
          
      </el-card>

       <el-card class="box-card">
        <div ref="myEcahrts2" class="secondquarter">
        </div>
          
      </el-card>

</div>
</template>

<script>

import * as echarts from 'echarts'


export default {
    mounted(){
        var myEcahrts = echarts.init(this.$refs.myEcahrts1) //参数放在那个容器
        // console.log(document.getElementById('myCharts'))
        myEcahrts.setOption({
            title:{
              text:'第一季度收入'
            },
            tooltip: {},
            legend:{
              data:['销量']
            },
            xAxis: {
              data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            yAxis:{},
            series:[{
              name:'销量',
              type:'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
        })

        var myEcahrts2 = echarts.init(this.$refs.myEcahrts2) //参数放在那个容器
        // console.log(document.getElementById('myCharts'))
        myEcahrts2.setOption({
            title:{
              text:'第二季度收入'
            },
            tooltip: {},
            legend:{
              data:['销量']
            },
            xAxis: {
              data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            yAxis:{},
            series:[{
              name:'销量',
              type:'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }

};
</script>

<style>
    .el-card {
      display: inline-flex;
      margin-left: 20px;
    }
    .firstquarter {
        width: 400px;
        height: 400px;
    }
    .secondquarter {
       width: 400px;
        height: 400px;
    }
</style>
