<template>
  <div>
    <el-card header="标签组件" shadow="never" style="border: none">
      <div style="display: flex; gap: 16px">
        <el-tag type="primary" closable disable-transitions>标签一</el-tag>
        <el-tag type="success" closable disable-transitions>标签二</el-tag>
        <el-tag type="info" closable disable-transitions>标签三</el-tag>
        <el-tag type="warning" closable disable-transitions>标签四</el-tag>
        <el-tag type="danger" closable disable-transitions>标签五</el-tag>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 26px">
        <el-tag type="primary" closable hit disable-transitions>标签一</el-tag>
        <el-tag type="success" closable hit disable-transitions>标签二</el-tag>
        <el-tag type="info" closable hit disable-transitions>标签三</el-tag>
        <el-tag type="warning" closable hit disable-transitions>标签四</el-tag>
        <el-tag type="danger" closable hit disable-transitions>标签五</el-tag>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 26px">
        <el-tag type="primary" closable effect="plain" disable-transitions>
          标签一
        </el-tag>
        <el-tag type="success" closable effect="plain" disable-transitions>
          标签二
        </el-tag>
        <el-tag type="info" closable effect="plain" disable-transitions>
          标签三
        </el-tag>
        <el-tag type="warning" closable effect="plain" disable-transitions>
          标签四
        </el-tag>
        <el-tag type="danger" closable effect="plain" disable-transitions>
          标签五
        </el-tag>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 26px">
        <el-tag type="primary" closable effect="dark" disable-transitions>
          标签一
        </el-tag>
        <el-tag type="success" closable effect="dark" disable-transitions>
          标签二
        </el-tag>
        <el-tag type="info" closable effect="dark" disable-transitions>
          标签三
        </el-tag>
        <el-tag type="warning" closable effect="dark" disable-transitions>
          标签四
        </el-tag>
        <el-tag type="danger" closable effect="dark" disable-transitions>
          标签五
        </el-tag>
      </div>
    </el-card>
    <el-card
      header="圆形标签"
      shadow="never"
      style="border: none; margin-top: 16px"
    >
      <div style="display: flex; gap: 16px">
        <el-tag type="primary" round closable disable-transitions>
          标签一
        </el-tag>
        <el-tag type="success" round closable disable-transitions>
          标签二
        </el-tag>
        <el-tag type="info" round closable disable-transitions>标签三</el-tag>
        <el-tag type="warning" round closable disable-transitions>
          标签四
        </el-tag>
        <el-tag type="danger" round closable disable-transitions>标签五</el-tag>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 26px">
        <el-tag type="primary" round closable hit disable-transitions>
          标签一
        </el-tag>
        <el-tag type="success" round closable hit disable-transitions>
          标签二
        </el-tag>
        <el-tag type="info" round closable hit disable-transitions>
          标签三
        </el-tag>
        <el-tag type="warning" round closable hit disable-transitions>
          标签四
        </el-tag>
        <el-tag type="danger" round closable hit disable-transitions>
          标签五
        </el-tag>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 26px">
        <el-tag
          type="primary"
          round
          closable
          effect="plain"
          disable-transitions
        >
          标签一
        </el-tag>
        <el-tag
          type="success"
          round
          closable
          effect="plain"
          disable-transitions
        >
          标签二
        </el-tag>
        <el-tag type="info" round closable effect="plain" disable-transitions>
          标签三
        </el-tag>
        <el-tag
          type="warning"
          round
          closable
          effect="plain"
          disable-transitions
        >
          标签四
        </el-tag>
        <el-tag type="danger" round closable effect="plain" disable-transitions>
          标签五
        </el-tag>
      </div>
      <div style="display: flex; gap: 16px; margin-top: 26px">
        <el-tag type="primary" round closable effect="dark" disable-transitions>
          标签一
        </el-tag>
        <el-tag type="success" round closable effect="dark" disable-transitions>
          标签二
        </el-tag>
        <el-tag type="info" round closable effect="dark" disable-transitions>
          标签三
        </el-tag>
        <el-tag type="warning" round closable effect="dark" disable-transitions>
          标签四
        </el-tag>
        <el-tag type="danger" round closable effect="dark" disable-transitions>
          标签五
        </el-tag>
      </div>
    </el-card>
  </div>
</template>
