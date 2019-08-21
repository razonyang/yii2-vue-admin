<template>
  <a :click="cancel">
    <el-button>{{ $t('common.cancel') }}</el-button>
  </a>
</template>

<script>
export default {
  name: 'CancelButton',
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    cancel() {
      this.$confirm(this.$t('confirm.cancel')).then(() => {
        this.$router.go(-1)
      })
    }
  }
}
</script>
