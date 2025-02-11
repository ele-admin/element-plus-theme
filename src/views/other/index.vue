<template>
  <div>
    <el-card header="消息弹窗" shadow="never" style="border: none">
      <div>
        <el-button @click="openConfirm">确认弹窗</el-button>
        <el-button @click="openPrompt">输入弹窗</el-button>
        <el-button @click="openAlert">提示弹窗</el-button>
      </div>
      <div style="margin-top: 20px">
        <el-button @click="openSuccess">成功提示</el-button>
        <el-button @click="openWarning">警告提示</el-button>
        <el-button @click="openError">错误提示</el-button>
        <el-button @click="openInfo">信息提示</el-button>
      </div>
    </el-card>
    <el-card
      header="消息通知"
      shadow="never"
      style="border: none; margin-top: 16px"
    >
      <div>
        <el-button @click="showNotification()">显示通知</el-button>
        <el-button @click="showNotification('info', null, 'top-left')">
          左上角显示
        </el-button>
        <el-button @click="showNotification('info', null, 'bottom-left')">
          左下角显示
        </el-button>
        <el-button @click="showNotification('info', null, 'bottom-right')">
          右下角显示
        </el-button>
      </div>
      <div style="margin-top: 20px">
        <el-button @click="showNotification('success')">成功通知</el-button>
        <el-button @click="showNotification('warning')">警告通知</el-button>
        <el-button @click="showNotification('error')">错误通知</el-button>
        <el-button @click="showNotification('info')">信息通知</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
  import { ElMessageBox, ElNotification } from 'element-plus';

  const openConfirm = () => {
    ElMessageBox.confirm('确认要删除吗? 删除后会在回收站保留30天', '删除确认', {
      type: 'error',
      draggable: true
    })
      .then(() => {})
      .catch(() => {});
  };

  const openPrompt = () => {
    ElMessageBox.prompt('请输入新密码：', '重置密码', {
      inputPattern: /^[\S]{5,18}$/,
      inputErrorMessage: '密码必须为5-18位非空白字符',
      draggable: true
    })
      .then(() => {})
      .catch(() => {});
  };

  const openAlert = () => {
    ElMessageBox.alert('内容内容内容内容内容内容内容', '标题', {
      draggable: true
    })
      .then(() => {})
      .catch(() => {});
  };

  const openSuccess = () => {
    ElMessageBox.alert(
      '导入完成，共新增 80 条数据，更新 20 条数据，失败 0 条数据。',
      '导入成功',
      {
        type: 'success',
        confirmButtonText: '完成',
        draggable: true
      }
    )
      .then(() => {})
      .catch(() => {});
  };

  const openWarning = () => {
    ElMessageBox.confirm(
      '您的专业版会员还有 6 天到期，请及时续费，以免影响正常使用！',
      '到期提醒',
      {
        type: 'warning',
        cancelButtonText: '下次再说',
        confirmButtonText: '前往续费',
        closeOnClickModal: false,
        draggable: true
      }
    )
      .then(() => {
        console.log('点击了前往续费');
      })
      .catch(() => {});
  };

  const openError = () => {
    ElMessageBox.alert(
      '您的账号存在违规操作，已被系统强制下线并冻结，请联系管理员处理。',
      '异常提醒',
      {
        type: 'error',
        confirmButtonText: '查看详情',
        showClose: false,
        draggable: true
      }
    )
      .then(() => {})
      .catch(() => {});
  };

  const openInfo = () => {
    ElMessageBox.alert(
      '本周五 03:00 ~ 05:00 将进行网站升级，期间无法访问系统，请提前做好准备！',
      '系统通知',
      {
        type: 'info',
        confirmButtonText: '知道了',
        closeOnClickModal: true,
        draggable: true
      }
    )
      .then(() => {})
      .catch(() => {});
  };

  const showNotification = (type, duration, position) => {
    ElNotification({
      title: 'Notification Title',
      message:
        'This is the content of the notification. This is the content of the notification. ',
      type: type || '',
      duration: duration ?? 4500,
      position: position || 'top-right'
    });
  };
</script>
