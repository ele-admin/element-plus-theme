<template>
  <el-card header="日期时间选择组件" shadow="always" style="border: none">
    <el-form label-width="100px">
      <el-row :gutter="32">
        <el-col :span="12">
          <el-form-item label="日期选择">
            <el-date-picker
              type="date"
              v-model="form.f25"
              placeholder="请选择日期"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="带快捷选项">
            <el-date-picker
              type="date"
              v-model="form.f26"
              placeholder="请选择日期"
              :shortcuts="shortcuts"
              :disabled-date="disabledDate"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="周选择">
            <el-date-picker
              type="week"
              v-model="form.f27"
              format="YYYY第ww周"
              placeholder="请选择周"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="月选择">
            <el-date-picker
              type="month"
              v-model="form.f28"
              placeholder="请选择月"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="年选择">
            <el-date-picker
              type="year"
              v-model="form.f29"
              placeholder="请选择年"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="日期多选">
            <el-date-picker
              type="dates"
              v-model="form.f30"
              placeholder="请选择日期"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="年多选">
            <el-date-picker
              type="years"
              v-model="form.f31"
              placeholder="请选择年"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="月多选">
            <el-date-picker
              type="months"
              v-model="form.f32"
              placeholder="请选择月"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="日期范围选择">
            <el-date-picker
              type="daterange"
              v-model="form.f33"
              unlink-panels
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item label="带快捷选项">
            <el-date-picker
              type="daterange"
              v-model="form.f34"
              unlink-panels
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :shortcuts="shortcuts2"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="月范围选择">
            <el-date-picker
              type="monthrange"
              v-model="form.f35"
              unlink-panels
              range-separator="-"
              start-placeholder="开始月"
              end-placeholder="结束月"
            />
          </el-form-item>
          <el-form-item label="年范围选择">
            <el-date-picker
              type="yearrange"
              v-model="form.f36"
              unlink-panels
              range-separator="-"
              start-placeholder="开始年"
              end-placeholder="结束年"
            />
          </el-form-item>
          <el-form-item label="日期时间选择">
            <el-date-picker
              type="datetime"
              v-model="form.f37"
              placeholder="请选择日期时间"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="带快捷选项">
            <el-date-picker
              type="datetime"
              v-model="form.f38"
              :shortcuts="shortcuts3"
              placeholder="请选择日期时间"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="日期时间范围">
            <el-date-picker
              type="datetimerange"
              v-model="form.f39"
              unlink-panels
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item label="带快捷选项">
            <el-date-picker
              type="datetimerange"
              v-model="form.f40"
              unlink-panels
              :shortcuts="shortcuts4"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item label="时间选择">
            <el-time-picker
              v-model="form.f41"
              placeholder="请选择时间"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="箭头控制模式">
            <el-time-picker
              arrow-control
              v-model="form.f42"
              :disabled-hours="disabledHours"
              :disabled-minutes="disabledMinutes"
              :disabled-seconds="disabledSeconds"
              placeholder="请选择时间"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="时间范围选择">
            <el-time-picker
              v-model="form.f43"
              is-range
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
          <el-form-item label="箭头控制模式">
            <el-time-picker
              v-model="form.f44"
              is-range
              arrow-control
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script setup>
  import { reactive, ref } from 'vue';

  const form = reactive({});

  const shortcuts = ref([
    {
      text: '今天',
      value: new Date()
    },
    {
      text: '昨天',
      value: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        return date;
      }
    },
    {
      text: '一周前',
      value: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        return date;
      }
    }
  ]);

  const disabledDate = (time) => {
    return time.getTime() > Date.now();
  };

  const shortcuts2 = ref([
    {
      text: '前一周',
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        return [start, end];
      }
    },
    {
      text: '前一个月',
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        return [start, end];
      }
    },
    {
      text: '前三个月',
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        return [start, end];
      }
    }
  ]);

  const shortcuts3 = ref([
    {
      text: '今天',
      value: new Date()
    },
    {
      text: '昨天',
      value: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        return date;
      }
    },
    {
      text: '一周前',
      value: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        return date;
      }
    }
  ]);

  const shortcuts4 = ref([
    {
      text: '前一周',
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        return [start, end];
      }
    },
    {
      text: '前一个月',
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        return [start, end];
      }
    },
    {
      text: '前三个月',
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        return [start, end];
      }
    }
  ]);

  const makeRange = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledHours = () => {
    return makeRange(0, 16).concat(makeRange(19, 23));
  };

  const disabledMinutes = (hour) => {
    if (hour === 17) {
      return makeRange(0, 29);
    }
    if (hour === 18) {
      return makeRange(31, 59);
    }
    return [];
  };

  const disabledSeconds = (hour, minute) => {
    if (hour === 18 && minute === 30) {
      return makeRange(1, 59);
    }
    return [];
  };
</script>
