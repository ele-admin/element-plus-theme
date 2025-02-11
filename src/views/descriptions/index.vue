<template>
  <el-card header="描述列表组件" shadow="never" style="border: none">
    <el-descriptions :border="true" :column="2" :label-width="120" size="large">
      <el-descriptions-item label="操作人&nbsp;&nbsp;" label-align="right">
        <div>管理员(admin)</div>
      </el-descriptions-item>
      <el-descriptions-item label="IP地址&nbsp;&nbsp;" label-align="right">
        <div>111.0.233.239</div>
      </el-descriptions-item>
      <el-descriptions-item label="操作模块&nbsp;&nbsp;" label-align="right">
        <div>字典数据管理</div>
      </el-descriptions-item>
      <el-descriptions-item label="操作功能&nbsp;&nbsp;" label-align="right">
        <div>查询全部字典数据</div>
      </el-descriptions-item>
      <el-descriptions-item label="操作时间&nbsp;&nbsp;" label-align="right">
        <div>2025-02-10 23:27:30</div>
      </el-descriptions-item>
      <el-descriptions-item label="请求耗时&nbsp;&nbsp;" label-align="right">
        <div>0.002s</div>
      </el-descriptions-item>
      <el-descriptions-item label="请求方式&nbsp;&nbsp;" label-align="right">
        <div>GET</div>
      </el-descriptions-item>
      <el-descriptions-item label="请求状态&nbsp;&nbsp;" label-align="right">
        <el-tag size="small" type="success" disable-transitions>正常</el-tag>
      </el-descriptions-item>
      <el-descriptions-item
        label="请求地址&nbsp;&nbsp;"
        :span="2"
        label-align="right"
      >
        <div>/api/system/dictionary-data</div>
      </el-descriptions-item>
      <el-descriptions-item
        label="调用方法&nbsp;&nbsp;"
        :span="2"
        label-align="right"
      >
        <div style="word-break: break-all">
          com.eleadmin.common.system.controller.DictionaryDataController.list
        </div>
      </el-descriptions-item>
      <el-descriptions-item
        label="请求参数&nbsp;&nbsp;"
        :span="2"
        label-align="right"
      >
        <div>{"dictCode":"sex"}</div>
      </el-descriptions-item>
      <el-descriptions-item
        label="返回结果&nbsp;&nbsp;"
        :span="2"
        label-align="right"
      >
        <div>
          {"code":0,"message":"操作成功","data":[{"dictDataId":1,"dictId":1,"dictDataCode":"1","dictDataName":"男","sortNumber":1,"comments":null,"deleted":0,"createTime":1584248848000,"updateTime":1647009984000,"dictCode":"sex","dictName":"用户性别"},{"dictDataId":2,"dictId":1,"dictDataCode":"2","dictDataName":"女","sortNumber":2,"comments":null,"deleted":0,"createTime":1584248861000,"updateTime":1647009985000,"dictCode":"sex","dictName":"用户性别"}]}
        </div>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>
