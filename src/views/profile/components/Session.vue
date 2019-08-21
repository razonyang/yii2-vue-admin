<template>
  <div class="block">
    <el-card v-for="session in sessions" :key="session.id" class="session-item">
      <div slot="header" class="clearfix">
        <span>
          {{ session.ip_address }} login at {{ formatTimestamp(session.create_time) }}
        </span>
        <el-button type="danger" size="small" icon="el-icon-delete" style="float: right;" @click="deleteSession(session.id)">
          {{ $t('common.delete') }}
        </el-button>
      </div>
      <div>
        {{ session.user_agent }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { findSessions, deleteSession } from '@/api/session'
import { formatTimestamp } from '@/utils/moment'

export default {
  data() {
    return {
      sessions: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      findSessions().then(response => {
        console.log(response.data)
        this.sessions = response.data.items
      })
    },
    formatTimestamp,
    deleteSession(id) {
      this.$confirm(this.$t('confirm.delete')).then(() => {
        deleteSession(id).then(response => {
          this.$message({
            message: response.message,
            type: 'success',
            duration: 5 * 1000
          })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.session-item {
  margin-top: 20px;
}
</style>
