<template>
  <el-config-provider :locale="zh_CN">
    <div>
      <el-card header="按钮">
        <div>
          <el-button>按钮</el-button>
        </div>
      </el-card>
    </div>
  </el-config-provider>
</template>

<script setup>
  import zh_CN from 'element-plus/es/locale/lang/zh-cn';
</script>
