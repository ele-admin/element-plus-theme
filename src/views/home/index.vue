<template>
  <el-card header="表单组件" shadow="never" style="border: none">
    <el-form label-width="100px">
      <el-row :gutter="32">
        <el-col :span="12">
          <el-form-item label="输入框">
            <el-input clearable v-model="form.f1" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="禁用状态">
            <el-input disabled v-model="form.f2" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="密码框">
            <el-input
              show-password
              type="password"
              v-model="form.f3"
              placeholder="请输入"
            />
          </el-form-item>
          <el-form-item label="前缀图标">
            <el-input
              clearable
              v-model="form.f4"
              placeholder="请输入"
              :prefix-icon="Search"
            />
          </el-form-item>
          <el-form-item label="后缀图标">
            <el-input
              v-model="form.f5"
              placeholder="请输入"
              :suffix-icon="Search"
            />
          </el-form-item>
          <el-form-item label="文本域">
            <el-input
              :rows="4"
              maxlength="500"
              show-word-limit
              type="textarea"
              v-model="form.f6"
              placeholder="请输入"
            />
          </el-form-item>
          <el-form-item label="输入框组合">
            <div style="flex: 1">
              <div>
                <el-input clearable v-model="form.f7" placeholder="请输入">
                  <template #prepend>http://</template>
                </el-input>
              </div>
              <div style="margin-top: 16px">
                <el-input clearable v-model="form.f8" placeholder="请输入">
                  <template #append>.com</template>
                </el-input>
              </div>
              <div style="margin-top: 16px">
                <el-input clearable v-model="form.f9" placeholder="请输入">
                  <template #prepend>
                    <el-select v-model="form.f10" style="width: 90px">
                      <el-option value="alipay" label="支付宝" />
                      <el-option value="wxpay" label="微信" />
                    </el-select>
                  </template>
                </el-input>
              </div>
              <div style="margin-top: 16px">
                <el-input clearable v-model="form.f11" placeholder="请输入">
                  <template #append>
                    <el-button :icon="Search" />
                  </template>
                </el-input>
              </div>
              <div style="margin-top: 16px" class="app-input-group">
                <el-input clearable v-model="form.f12" placeholder="请输入" />
                <el-button type="primary" :icon="Search" />
              </div>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="下拉选择">
            <div style="flex: 1">
              <div>
                <el-select clearable placeholder="请选择" v-model="form.f13">
                  <el-option label="vue" value="1" />
                  <el-option label="element" value="2" />
                  <el-option label="ele-admin" value="3" />
                </el-select>
              </div>
              <div style="margin-top: 16px">
                <el-select disabled placeholder="请选择" v-model="form.f14">
                  <el-option label="vue" value="1" />
                  <el-option label="element" value="2" />
                  <el-option label="ele-admin" value="3" />
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="下拉多选">
            <div style="flex: 1">
              <div>
                <el-select
                  clearable
                  multiple
                  placeholder="请选择"
                  v-model="form.f15"
                >
                  <el-option label="vue" value="1" />
                  <el-option label="element" value="2" />
                  <el-option label="ele-admin" value="3" />
                </el-select>
              </div>
              <div style="margin-top: 16px">
                <el-select
                  disabled
                  multiple
                  placeholder="请选择"
                  v-model="form.f16"
                >
                  <el-option label="vue" value="1" />
                  <el-option label="element" value="2" />
                  <el-option label="ele-admin" value="3" />
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="form.f17">
              <el-radio label="vue" value="1" />
              <el-radio label="element" value="2" />
              <el-radio label="ele-admin" value="3" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="多选">
            <el-checkbox-group v-model="form.f18">
              <el-checkbox label="vue" value="1" />
              <el-checkbox label="element" value="2" />
              <el-checkbox label="ele-admin" value="3" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="自动完成">
            <el-autocomplete
              clearable
              v-model="form.f19"
              placeholder="请输入"
              :fetch-suggestions="fetchSuggestions"
            />
          </el-form-item>
          <el-form-item label="级联选择器">
            <el-cascader
              clearable
              placeholder="请选择"
              v-model="form.f20"
              :options="cascaderOptions"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="级联选择多选">
            <div style="flex: 1">
              <div>
                <el-cascader
                  clearable
                  placeholder="请选择"
                  v-model="form.f21"
                  :options="cascaderOptions"
                  :props="cascaderProps"
                  style="width: 100%"
                />
              </div>
              <div style="margin-top: 16px">
                <el-cascader
                  disabled
                  placeholder="请选择"
                  v-model="form.f22"
                  :options="cascaderOptions"
                  :props="cascaderProps"
                  style="width: 100%"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="树下拉">
            <el-tree-select
              clearable
              placeholder="请选择"
              v-model="form.f23"
              node-key="value"
              :props="{ label: 'label' }"
              :data="cascaderOptions"
              default-expand-all
            />
          </el-form-item>
          <el-form-item label="树下拉多选">
            <el-tree-select
              clearable
              multiple
              show-checkbox
              placeholder="请选择"
              v-model="form.f24"
              node-key="value"
              :props="{ label: 'label' }"
              :data="cascaderOptions"
              default-expand-all
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import { Search } from '@element-plus/icons-vue';

  const form = reactive({
    f1: 'element-plus-theme',
    f3: '12345678',
    f10: 'alipay',
    f13: '1',
    f15: ['1', '3'],
    f16: ['1', '3'],
    f17: '1',
    f18: ['1', '3'],
    f20: ['1', '1-1', '1-1-1'],
    f21: [['1', '1-1', '1-1-1']],
    f22: [['1', '1-1', '1-1-1']],
    f24: ['1-1-1', '1-1-2']
  });

  const fetchSuggestions = (keyword) => {
    const data = [
      { value: 'vue' },
      { value: 'vue-router' },
      { value: 'pinia' },
      { value: 'element' },
      { value: 'ele-admin' }
    ];
    const kw = (keyword ?? '').toLowerCase();
    if (!kw) {
      return data;
    }
    return data.filter((item) => (item.value ?? '').toLowerCase().includes(kw));
  };

  const cascaderOptions = ref([
    {
      label: '选项1',
      value: '1',
      children: [
        {
          label: '选项1-1',
          value: '1-1',
          children: [
            {
              label: '选项1-1-1',
              value: '1-1-1'
            },
            {
              label: '选项1-1-2',
              value: '1-1-2'
            }
          ]
        },
        {
          label: '选项1-2',
          value: '1-2',
          children: [
            {
              label: '选项1-2-1',
              value: '1-2-1'
            },
            {
              label: '选项1-2-2',
              value: '1-2-2'
            }
          ]
        }
      ]
    },
    {
      label: '选项2',
      value: '2',
      children: [
        {
          label: '选项2-1',
          value: '2-1',
          children: [
            {
              label: '选项2-1-1',
              value: '2-1-1'
            },
            {
              label: '选项2-1-2',
              value: '2-1-2'
            }
          ]
        },
        {
          label: '选项2-2',
          value: '2-2',
          children: [
            {
              label: '选项2-2-1',
              value: '2-2-1'
            },
            {
              label: '选项2-2-2',
              value: '2-2-2'
            }
          ]
        }
      ]
    }
  ]);

  const cascaderProps = reactive({
    multiple: true
  });
</script>
