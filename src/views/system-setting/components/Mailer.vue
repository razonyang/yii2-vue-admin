<template>
  <el-form>
    <el-form-item :label="$t('mailer.host')">
      <el-input v-model.trim="host" />
    </el-form-item>
    <el-form-item :label="$t('mailer.port')">
      <el-input v-model.trim="port" />
    </el-form-item>
    <el-form-item :label="$t('mailer.username')">
      <el-input v-model.trim="username" />
    </el-form-item>
    <el-form-item :label="$t('mailer.password')">
      <el-input v-model.trim="password" />
    </el-form-item>
    <el-form-item :label="$t('mailer.encryption')">
      <el-input v-model.trim="encryption" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">{{ $t('common.update') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { updateUser } from '@/api/user'
export default {
  props: {
    mailer: {
      type: Object,
      default: () => {
        return {
          id: 0,
          username: '',
          email: '',
          avatar: '',
          firstName: '',
          lastName: '',
          language: 'en'
        }
      }
    }
  },
  methods: {
    submit() {
      const data = {}
      updateUser(this.user.id, data).then(response => {
        this.$message({
          message: 'User information has been updated successfully',
          type: 'success',
          duration: 5 * 1000
        })
      })
    }
  }
}
</script>
