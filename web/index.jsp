<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2019/7/10
  Time: 14:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<script src="style/echarts.js"></script>

<head>
  <title>测试</title>
</head>

<body>

<div id="main" style="width: 600px;height:400px;">
  <script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [50, 20, 36, 10, 10, 20]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


  </script>
</div>
<div id="main1" style="width: 600px;height:400px;">

</div>
<script>
  // 绘制图表。
  echarts.init(document.getElementById('main1')).setOption({
    series: {
      type: 'pie',
      data: [
        {name: 'A', value: 4.5},
        {name: 'B', value: 2.3},
        {name: 'C', value: 2.8}
      ]
    }
  });
</script>
</body>
</html>
