<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filter.id" :placeholder="$t('common.id')" style="width: 80px;" class="filter-item" @keyup.enter.native="search" />
      <el-input v-model="listQuery.filter.name" :placeholder="$t('common.name')" style="width: 200px;" class="filter-item" @keyup.enter.native="search" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="search">
        {{ $t('common.search') }}
      </el-button>
      <router-link to="/article-category/create/">
        <el-button v-if="checkPermission(['articleCategoryCreate'])" class="filter-item" type="success" icon="el-icon-plus">
          {{ $t('common.create') }}
        </el-button>
      </router-link>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" :label="$t('common.id')" width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('common.name')">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
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
          <router-link v-if="checkPermission(['articleCategoryUpdate'])" :to="'/article-category/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              {{ $t('common.edit') }}
            </el-button>
          </router-link>
          <el-button v-if="checkPermission(['articleCategoryDelete'])" type="danger" size="small" icon="el-icon-delete" @click="handleDelete(scope.row.id)">
            {{ $t('common.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { findCategories, deleteCategory } from '@/api/article-category'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { getStatuses, getStatusName } from '@/utils/status'
import checkPermission from '@/utils/permission'
import { formatTimestamp } from '@/utils/moment'

export default {
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      statuses: getStatuses(),
      listQuery: {
        page: 1,
        limit: 20,
        filter: {
          id: '',
          name: ''
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
      findCategories(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.meta.total_count
        this.listLoading = false
      })
    },
    getStatusName,
    handleDelete(id) {
      this.$confirm(this.$t('confirm.delete')).then(() => {
        deleteCategory(id).then(response => {
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
