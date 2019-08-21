<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item :label="$t('common.description')" prop="description">
        <el-input v-model="form.description" />
      </el-form-item>

      <el-form-item :label="$t('common.value')" prop="value">
        <el-input v-model="form.value" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">{{ $t('common.submit') }}</el-button>
        <el-button>{{ $t('common.cancel') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { findSetting, updateSetting } from '@/api/setting'

const defaultForm = {
  description: '',
  value: ''
}

export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      form: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        description: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.description') }), trigger: 'blur' }
        ],
        value: [
          { required: true, message: this.$t('validate.required', { field: this.$t('common.value') }), trigger: 'blur' }
        ]
      },
      tempRoute: {}
    }
  },
  created() {
    if (this.$route.params && this.$route.params.id) {
      this.id = this.$route.params.id
    }
    this.getDetail()

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    getDetail() {
      findSetting(this.id).then(response => {
        this.form.description = response.data.description
        this.form.value = response.data.value

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.$t('route.settingEdit')
      const route = Object.assign({}, this.tempRoute, { title: `${title} #${this.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.$t('route.settingEdit')
      document.title = `${title} - ${this.id}`
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          const data = {
            description: this.form.description,
            value: this.form.value
          }
          updateSetting(this.id, data).then(response => {
            this.success()
          })
          this.loading = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    success() {
      this.getDetail()
      this.$notify({
        title: this.$t('common.success'),
        message: this.$t('common.updateSuccessfully'),
        type: 'success',
        duration: 2000
      })
    }
  }
}
</script>
