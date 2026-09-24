# 2027 毕业旅行

GitHub Pages 使用 main 分支根目录。首页连接 10 段旅程，每段旅程包含总览、预订、逐日、待办、行李和贴士。

统一旅行数据位于 data/travelData.js；页面结构与交互位于 journal-tools.js；旅行手账样式位于 journal-tools.css。待办和行李勾选状态按旅程保存在当前浏览器。

逐日地图由对应时间轴站点的 mapPoints 数组生成。每个地点填写 name、lat、lng，可选地点加 optional: true；示意连线仅表示游览顺序。
