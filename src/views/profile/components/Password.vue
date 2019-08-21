<template>
  <el-form>
    <el-form-item :label="$t('common.password')">
      <el-input v-model.trim="password" />
    </el-form-item>
    <el-form-item :label="$t('common.newPassword')">
      <el-input v-model.trim="newPassword" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">{{ $t('common.update') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { changePassword } from '@/api/user'
export default {
  data: function() {
    return {
      password: '',
      newPassword: ''
    }
  },
  methods: {
    submit() {
      changePassword(this.password, this.newPassword).then(response => {
        this.$message({
          message: response.message,
          type: 'success',
          duration: 5 * 1000
        })
      })
    }
  }
}
</script>
