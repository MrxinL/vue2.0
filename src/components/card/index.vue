<template>
<div class="">

      <el-card class="box-card">
        <div ref="myEcahrts" style="width:400px,height:400px">

        </div>
      </el-card>
</div>
</template>

<script>
import echart from 'echarts'
export default {
    mounted(){
        var myEcahrts = echart.init(this.$ref.myEcahrts) //参数放在那个容器
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
    }

};
</script>

<style>

</style>
