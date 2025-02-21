<template>
  <div class="app-layout">
    <div class="app-header">
      <div class="app-logo">
        <img src="@/assets/logo.svg" />
        <span>element-plus-theme</span>
      </div>
      <div class="app-user-avatar">
        <img src="https://cdn.eleadmin.com/20200610/avatar.jpg" />
        <span>欢迎用户XXX~</span>
      </div>
      <div ref="darkSwitchRef" class="app-dark-switch">
        <el-switch
          :active-action-icon="MoonOutlined"
          :inactive-action-icon="SunOutlined"
          :model-value="darkMode"
          @update:modelValue="updateDarkMode"
        />
      </div>
      <a
        style="display: flex; align-items: center; margin: 2px 0 0 20px"
        href="https://gitee.com/ele-admin/element-plus-theme"
        target="_blank"
      >
        <img
          src="https://gitee.com/ele-admin/element-plus-theme/badge/star.svg?theme=dark"
          style="width: 75px"
        />
      </a>
    </div>
    <div class="app-body">
      <div class="app-sidebar-wrapper">
        <div class="app-sidebar">
          <div class="app-sidebar-menus">
            <router-link
              v-for="item in menus"
              :key="item.path"
              :to="item.path"
              :class="[
                'app-menu-item',
                { 'is-active': route.path === item.path }
              ]"
            >
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </router-link>
          </div>
          <div class="app-sidebar-label">主题色</div>
          <div class="app-theme-colors">
            <div
              v-for="item in themeColors"
              :key="item.color"
              :class="[
                'app-theme-color-item',
                { 'is-active': themeColor === item.color }
              ]"
              :style="{ background: item.color }"
              @click="changeThemeColor(item)"
            >
              <el-icon v-if="themeColor === item.color">
                <IconSelect style="transform: translateY(1px)" />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="app-content">
        <router-view v-slot="{ Component }">
          <transition name="slide-bottom" mode="out-in" appear>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <el-backtop />
  </div>
</template>

<script setup>
  import { ref, markRaw } from 'vue';
  import { useRoute } from 'vue-router';
  import {
    Select as IconSelect,
    Edit,
    Document,
    Calendar,
    Memo,
    Guide,
    Tickets,
    Discount,
    Files
  } from '@element-plus/icons-vue';
  import MoonOutlined from '@/components/MoonOutlined.vue';
  import SunOutlined from '@/components/SunOutlined.vue';

  const route = useRoute();

  const menus = ref([
    {
      path: '/home',
      icon: markRaw(Edit),
      title: '表单组件'
    },
    {
      path: '/form',
      icon: markRaw(Document),
      title: '表单校验'
    },
    {
      path: '/date-picker',
      icon: markRaw(Calendar),
      title: '日期时间选择组件'
    },
    {
      path: '/tree',
      icon: markRaw(Guide),
      title: '树组件'
    },
    {
      path: '/table',
      icon: markRaw(Memo),
      title: '表格组件'
    },
    {
      path: '/descriptions',
      icon: markRaw(Tickets),
      title: '描述列表组件'
    },
    {
      path: '/tag',
      icon: markRaw(Discount),
      title: '标签组件'
    },
    {
      path: '/other',
      icon: markRaw(Files),
      title: '更多组件'
    }
  ]);

  const darkMode = ref(false);

  const darkSwitchRef = ref();

  const changeDarkTheme = (isDark) => {
    const $html = document.documentElement;
    if ($html) {
      if (isDark) {
        $html.classList.add('dark');
      } else {
        $html.classList.remove('dark');
      }
    }
    darkMode.value = isDark;
    const themeItem = themeColors.value.find(
      (item) => item.color === themeColor.value
    );
    changeThemeColor(themeItem);
    cacheTheme(isDark);
  };

  const updateDarkMode = (isDark) => {
    const el = darkSwitchRef.value?.querySelector?.('.el-switch__action');
    if (!el || typeof document.startViewTransition !== 'function') {
      changeDarkTheme(isDark);
      return;
    }
    const isOut = !isDark;
    document.documentElement.classList.add('disabled-transition');
    el.classList.add('view-transition-trigger');
    el.style.setProperty('view-transition-name', 'view-transition-trigger');
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    document
      .startViewTransition(() => changeDarkTheme(isDark))
      .ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        const anim = document.documentElement.animate(
          { clipPath: isOut ? [...clipPath].reverse() : clipPath },
          {
            duration: 400,
            easing: 'ease-in',
            pseudoElement: isOut
              ? `::view-transition-old(root)`
              : `::view-transition-new(root)`
          }
        );
        anim.onfinish = () => {
          el.style.removeProperty('view-transition-name');
          el.classList.remove('view-transition-trigger');
          document.documentElement.classList.remove('disabled-transition');
        };
      });
  };

  const themeColor = ref('#1677ff');

  const themeColors = ref([
    { color: '#1677ff' },
    {
      color: '#13C2C2',
      colors: [
        '#e6fffb',
        '#b5f5ec',
        '#87e8de',
        '#5cdbd3',
        '#36cfc9',
        '#13C2C2',
        '#08979c'
      ],
      darkColors: [
        '#112123',
        '#113536',
        '#144848',
        '#146262',
        '#138585',
        '#13C2C2',
        '#33bcb7'
      ]
    },
    {
      color: '#52C41A',
      colors: [
        '#f6ffed',
        '#d9f7be',
        '#b7eb8f',
        '#95de64',
        '#73d13d',
        '#52C41A',
        '#389e0d'
      ],
      darkColors: [
        '#162312',
        '#1d3712',
        '#274916',
        '#306317',
        '#3c8618',
        '#52C41A',
        '#6abe39'
      ]
    },
    {
      color: '#FA8C16',
      colors: [
        '#fff7e6',
        '#ffe7ba',
        '#ffd591',
        '#ffc069',
        '#ffa940',
        '#FA8C16',
        '#d46b08'
      ],
      darkColors: [
        '#2b1d11',
        '#442a11',
        '#593815',
        '#7c4a15',
        '#aa6215',
        '#FA8C16',
        '#e89a3c'
      ]
    },
    {
      color: '#722ED1',
      colors: [
        '#f9f0ff',
        '#efdbff',
        '#d3adf7',
        '#b37feb',
        '#9254de',
        '#722ED1',
        '#531dab'
      ],
      darkColors: [
        '#1a1325',
        '#24163a',
        '#301c4d',
        '#3e2069',
        '#51258f',
        '#722ED1',
        '#854eca'
      ]
    },
    {
      color: '#EB2F96',
      colors: [
        '#fff0f6',
        '#ffd6e7',
        '#ffadd2',
        '#ff85c0',
        '#f759ab',
        '#EB2F96',
        '#c41d7f'
      ],
      darkColors: [
        '#291321',
        '#40162f',
        '#551c3b',
        '#75204f',
        '#a02669',
        '#EB2F96',
        '#e0529c'
      ]
    }
  ]);

  const changeThemeColor = (item) => {
    themeColor.value = item.color;
    const id = 'ele-theme-var';
    const elem = document.getElementById(id);
    if (elem?.parentNode) {
      elem.parentNode.removeChild(elem);
    }
    const colors = darkMode.value ? item.darkColors : item.colors;
    if (colors) {
      const selector = darkMode.value ? 'html.dark' : ':root';
      const elem = document.createElement('style');
      elem.id = id;
      elem.setAttribute('type', 'text/css');
      elem.innerHTML = [
        `${selector}{`,
        `--el-color-primary:${colors[5]};`,
        `--el-color-primary-light-3:${colors[4]};`,
        `--el-color-primary-light-5:${colors[3]};`,
        `--el-color-primary-light-7:${colors[2]};`,
        `--el-color-primary-light-8:${colors[1]};`,
        `--el-color-primary-light-9:${colors[0]};`,
        `--el-color-primary-dark-2:${colors[6]};`,
        '}'
      ].join('');
      document.head.appendChild(elem);
    }
    cacheTheme(void 0, themeColor.value);
  };

  const themeCacheKey = 'themeConfig';

  const cacheTheme = (isDark, color) => {
    try {
      const cacheTheme = JSON.parse(
        localStorage.getItem(themeCacheKey) || '{}'
      );
      if (isDark != null) {
        cacheTheme.dark = isDark;
      }
      if (color != null) {
        cacheTheme.color = color;
      }
      localStorage.setItem(themeCacheKey, JSON.stringify(cacheTheme));
    } catch (e) {
      console.error(e);
    }
  };

  try {
    const cacheTheme = JSON.parse(localStorage.getItem(themeCacheKey) || '{}');
    if (cacheTheme.dark) {
      if (cacheTheme.color) {
        themeColor.value = cacheTheme.color;
      }
      changeDarkTheme(true);
    } else if (cacheTheme.color) {
      themeColor.value = cacheTheme.color;
      const themeItem = themeColors.value.find(
        (item) => item.color === themeColor.value
      );
      changeThemeColor(themeItem);
    }
  } catch (e) {
    console.error(e);
  }
</script>
