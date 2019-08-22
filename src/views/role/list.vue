<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filter.name" :placeholder="$t('common.name')" style="width: 180px;" class="filter-item" @keyup.enter.native="search" />
      <el-input v-model="listQuery.filter.description" :placeholder="$t('common.description')" style="width: 200px;" class="filter-item" @keyup.enter.native="search" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="search">
        {{ $t('common.search') }}
      </el-button>
      <router-link to="/system/role/create/">
        <el-button v-if="checkPermission(['roleCreate'])" class="filter-item" type="success" icon="el-icon-plus">
          {{ $t('common.create') }}
        </el-button>
      </router-link>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" :label="$t('common.name')">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('common.description')">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" :label="$t('common.createTime')">
        <template slot-scope="scope">
          <span>{{ formatTimestamp(scope.row.create_time) }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" :label="$t('common.updateTime')">
        <template slot-scope="scope">
          <span>{{ formatTimestamp(scope.row.update_time) }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('common.actions')" width="240px">
        <template slot-scope="scope">
          <router-link v-if="checkPermission(['roleUpdate'])" :to="'/system/role/edit/'+scope.row.name">
            <el-button type="primary" size="small" icon="el-icon-edit">
              {{ $t('common.edit') }}
            </el-button>
          </router-link>
          <el-button v-if="checkPermission(['roleDelete'])" type="danger" size="small" icon="el-icon-delete" @click="handleDelete(scope.row.name)">
            {{ $t('common.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { findRoles, deleteRole } from '@/api/role'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import checkPermission from '@/utils/permission'
import { formatTimestamp } from '@/utils/moment'

export default {
  name: 'RoleList',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        filter: {
          name: '',
          description: ''
        }
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    search() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      this.listLoading = true
      findRoles(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.meta.total_count
        this.listLoading = false
      })
    },
    handleDelete(name) {
      this.$confirm(this.$t('confirm.delete')).then(() => {
        deleteRole(name).then(response => {
          this.getList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      })
    },
    checkPermission,
    formatTimestamp
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
