<template>
  <el-card header="表单校验" shadow="always" style="border: none">
    <el-form
      status-icon
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="100px"
      style="max-width: 700px"
      @submit.prevent=""
    >
      <el-form-item label="标题" prop="title">
        <el-input clearable v-model="form.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="起止日期" prop="datetime">
        <el-date-picker
          unlink-panels
          type="daterange"
          v-model="form.datetime"
          range-separator="-"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="目标描述" prop="goal">
        <el-input
          show-word-limit
          maxlength="800"
          :rows="4"
          type="textarea"
          v-model="form.goal"
          placeholder="请输入目标描述"
        />
      </el-form-item>
      <el-form-item label="衡量标准" prop="standard">
        <el-input
          :rows="4"
          type="textarea"
          v-model="form.standard"
          placeholder="请输入衡量标准"
        />
      </el-form-item>
      <el-form-item label="地点" prop="address">
        <el-select clearable v-model="form.address" placeholder="请选择地点">
          <el-option value="1" label="地点一" />
          <el-option value="2" label="地点二" />
          <el-option value="3" label="地点三" />
        </el-select>
      </el-form-item>
      <el-form-item label="邀评人" prop="invites">
        <el-select
          multiple
          clearable
          v-model="form.invites"
          placeholder="请选择邀评人"
        >
          <el-option-group label="分组一">
            <el-option :value="1" label="SunSmile" />
            <el-option :value="2" label="你的名字很好听" />
            <el-option :value="3" label="全村人的希望" />
          </el-option-group>
          <el-option-group label="分组二">
            <el-option :value="4" label="Jasmine" />
            <el-option :value="5" label="酷酷的大叔" />
          </el-option-group>
        </el-select>
      </el-form-item>
      <el-form-item label="权重" prop="weight">
        <el-input-number
          :min="0"
          :max="100"
          v-model="form.weight"
          controls-position="right"
          style="max-width: 160px"
        />
        <div style="padding-left: 8px">%</div>
      </el-form-item>
      <el-form-item label="目标公开">
        <el-radio-group v-model="form.publicType">
          <el-radio :value="1" label="公开" />
          <el-radio :value="2" label="部分公开" />
          <el-radio :value="3" label="不公开" />
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
  import { reactive, ref, nextTick } from 'vue';

  const formRef = ref(null);

  const form = reactive({
    title: '',
    datetime: void 0,
    goal: '',
    standard: '',
    address: void 0,
    invites: [],
    weight: 0,
    publicType: 1,
    publicValue: ''
  });

  const rules = reactive({
    title: [
      {
        required: true,
        message: '请输入标题',
        type: 'string',
        trigger: 'blur'
      }
    ],
    datetime: [
      {
        required: true,
        message: '请选择起止日期',
        type: 'array',
        trigger: 'change'
      }
    ],
    goal: [
      {
        required: true,
        message: '请输入目标描述',
        type: 'string',
        trigger: 'blur'
      }
    ],
    standard: [
      {
        required: true,
        message: '请输入衡量标准',
        type: 'string',
        trigger: 'blur'
      }
    ],
    address: [
      {
        required: true,
        message: '请选择地点',
        type: 'string',
        trigger: 'change'
      }
    ],
    invites: [
      {
        required: true,
        message: '请选择邀评人',
        type: 'array',
        trigger: 'change'
      }
    ],
    weight: [
      {
        required: true,
        message: '请输入权重',
        type: 'number',
        trigger: 'change'
      }
    ]
  });

  const submit = () => {
    formRef.value?.validate?.(() => {});
  };

  const reset = () => {
    Object.keys(form).forEach((key) => {
      form[key] = void 0;
    });
    form.weight = 0;
    form.publicType = 1;
    nextTick(() => {
      formRef.value?.clearValidate?.();
    });
  };
</script>
