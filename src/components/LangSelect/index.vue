<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="lang in languages" :key="lang.value" :disabled="language === lang.value" :command="lang.value">
        {{ lang.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { getLanguage } from '@/lang'
export default {
  data: function() {
    return {
      language: getLanguage(),
      languages: [
        {
          label: 'English',
          value: 'en'
        },
        {
          label: '简体中文',
          value: 'zh-CN'
        },
        {
          label: '繁體中文',
          value: 'zh-TW'
        }
      ]
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.language = lang
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
