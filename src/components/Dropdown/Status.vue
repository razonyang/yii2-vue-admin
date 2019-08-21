<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ status === 1 ? $t('common.active') : $t('common.inactive') }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-padding">
      <el-dropdown-item>
        <el-radio-group v-model="status" style="padding: 10px;">
          <el-radio :label="1">
            {{ $t('common.active') }}
          </el-radio>
          <el-radio :label="0">
            {{ $t('common.inactive') }}
          </el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  computed: {
    status: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
