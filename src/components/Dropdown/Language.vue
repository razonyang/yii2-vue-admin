<template>
  <el-form-item :label="$t('common.language')" prop="language">
    <el-select v-model="language">
      <el-option v-for="lang in languages" :key="lang.value" :label="lang.label" :value="lang.value" />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default: 'en'
    },
    languages: {
      type: Array,
      default: function() {
        return [
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
    }
  }
}
</script>
