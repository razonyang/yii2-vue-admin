<template>
  <div class="form-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">

      <sticky :z-index="10" class-name="sub-navbar">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submit">
          {{ $t('common.submit') }}
        </el-button>
      </sticky>

      <div class="form-main-container">

        <el-form-item :label="$t('common.name')" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item :label="$t('common.description')" prop="description">
          <el-input v-model="form.description" />
        </el-form-item>

        <el-form-item :label="$t('common.permission')" prop="permissionNames">
          <el-checkbox-group v-model="form.permissionNames">
            <el-checkbox v-for="permission in permissions" :key="permission.name" :label="permission.name">
              {{ permission.description }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

      </div>

    </el-form>
  </div>
</template>

<script>
import { findRole, createRole, updateRole } from '@/api/role'
import { findPermissions } from '@/api/permission'
import Sticky from '@/components/Sticky'

const defaultForm = {
  name: '',
  description: '',
  permissionNames: []
}

export default {
  name: 'Detail',
  components: { Sticky },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      loading: false,
      rules: {
        name: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.name') }), trigger: 'blur' }
        ],
        description: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.description') }), trigger: 'blur' }
        ],
        permissionNames: [
          { type: 'array', required: true, message: this.$t('validate.required', { field: this.$t('common.permission') }), trigger: 'blur' }
        ]
      },
      tempRoute: {},
      permissions: []
    }
  },
  created() {
    this.fillUpPermissions()
    this.getDetail()

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    isEdit() {
      return this.id !== ''
    },
    fillUpPermissions() {
      findPermissions().then(response => {
        this.permissions = response.data.items
      }).catch(err => {
        console.log(err)
      })
    },
    getDetail() {
      if (!this.isEdit()) {
        this.form = Object.assign({}, defaultForm)
        return
      }

      findRole(this.id, { expand: 'permission_names' }).then(response => {
        this.form.name = response.data.name
        this.form.description = response.data.description
        this.form.permissionNames = response.data.permission_names

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.$t('route.roleEdit')
      const route = Object.assign({}, this.tempRoute, { title: `${title} #${this.form.name}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.$t('route.roleEdit')
      document.title = `${title} - ${this.form.name}`
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          const data = {
            name: this.form.name,
            description: this.form.description,
            permission_names: this.form.permissionNames
          }
          if (this.isEdit()) {
            updateRole(this.id, data).then(response => {
              this.success(response.data.name)
            })
          } else {
            createRole(data).then(response => {
              this.success(response.data.name)
            })
          }
          this.loading = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    success(id) {
      this.$notify({
        title: this.$t('common.success'),
        message: this.isEdit() ? this.$t('common.updateSuccessfully') : this.$t('common.createSuccessfully'),
        type: 'success',
        duration: 2000
      })

      this.$router.push({ name: 'roleEdit', params: { id: id }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.form-container {
  position: relative;

  .form-main-container {
    padding: 40px 45px 20px 50px;
  }
}
</style>
