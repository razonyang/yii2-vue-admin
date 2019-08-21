<template>
  <el-form>
    <el-form-item :label="$t('common.username')">
      <el-input v-model.trim="user.username" />
    </el-form-item>
    <el-form-item :label="$t('common.firstName')">
      <el-input v-model.trim="user.firstName" />
    </el-form-item>
    <el-form-item :label="$t('common.lastName')">
      <el-input v-model.trim="user.lastName" />
    </el-form-item>
    <el-form-item :label="$t('common.email')">
      <el-input v-model.trim="user.email" />
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
    user: {
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
