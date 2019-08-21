<template>
  <div class="form-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">

      <sticky :z-index="10" :class-name="'sub-navbar '+form.status">
        <StatusDropdown v-model="form.status" />
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submit">
          {{ $t('common.submit') }}
        </el-button>
      </sticky>

      <div class="form-main-container">

        <el-form-item :label="$t('common.username')" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>

        <el-form-item :label="$t('common.firstName')" prop="firstName">
          <el-input v-model="form.firstName" />
        </el-form-item>

        <el-form-item :label="$t('common.lastName')" prop="lastName">
          <el-input v-model="form.lastName" />
        </el-form-item>

        <el-form-item :label="$t('common.email')" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>

        <el-form-item :label="$t('common.password')" prop="password">
          <el-input v-model="form.password" show-password />
        </el-form-item>

        <LanguageDropdown :language="form.language" />

        <el-form-item :label="$t('common.role')" prop="roleNames">
          <el-select v-model="form.roleNames" :remote-method="getRoles" filterable multiple default-first-option remote placeholder="Roles">
            <el-option v-for="role in roleOptions" :key="role.name" :value="role.name" :label="role.description" />
          </el-select>
        </el-form-item>

      </div>
    </el-form>
  </div>
</template>

<script>
import { findUser, createUser, updateUser } from '@/api/user'
import { findRoles } from '@/api/role'
import Sticky from '@/components/Sticky'
import { StatusDropdown, LanguageDropdown } from '@/components/Dropdown'

const defaultForm = {
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  language: 'en',
  status: 1,
  roleNames: []
}

export default {
  name: 'Detail',
  components: { Sticky, StatusDropdown, LanguageDropdown },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      loading: false,
      roleOptions: [],
      roles: [],
      rules: {
        username: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.username') }), trigger: 'blur' }
        ],
        firstName: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.firstName') }), trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.lastName') }), trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.email') }), trigger: 'blur' }
        ],
        language: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.language') }), trigger: 'blur' }
        ],
        password: [
          { required: !this.isEdit(), message: this.$t('validate.required', { field: this.$t('common.password') }), trigger: 'blur' }
        ],
        roleNames: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.role') }), trigger: 'blur' }
        ]
      },
      tempRoute: {}
    }
  },
  created() {
    this.getDetail()

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    isEdit() {
      return this.id > 0
    },
    getDetail() {
      if (!this.isEdit()) {
        this.form = Object.assign({}, defaultForm)
        return
      }

      findUser(this.id, { expand: 'role_names' }).then(response => {
        this.form.username = response.data.username
        this.form.firstName = response.data.first_name
        this.form.lastName = response.data.last_name
        this.form.email = response.data.email
        this.form.status = response.data.status
        this.form.language = response.data.language
        this.form.roleNames = response.data.role_names

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.$t('route.userEdit')
      const route = Object.assign({}, this.tempRoute, { title: `${title} #${this.form.username}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.$t('route.userCreate')
      document.title = `${title} - ${this.form.id}`
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          const data = {
            username: this.form.username,
            first_name: this.form.firstName,
            last_name: this.form.lastName,
            email: this.form.email,
            status: this.form.status,
            password: this.form.password,
            language: this.form.language,
            role_names: this.form.roleNames
          }
          if (this.isEdit()) {
            updateUser(this.id, data).then(response => {
              this.success()
            })
          } else {
            createUser(data).then(response => {
              this.success(response.data.id)
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
      if (this.isEdit()) {
        this.getDetail()
      } else {
        this.$router.push({ name: 'userEdit', params: { id: id }})
      }
    },
    getRoles(name) {
      findRoles({ filter: { name: name }}).then(response => {
        this.roleOptions = response.data.items
      })
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
