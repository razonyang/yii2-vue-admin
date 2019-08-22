<template>
  <div class="form-container">
    <el-form ref="form" :model="form" :rules="rules" class="form-container" label-position="top">

      <sticky :z-index="10" :class-name="'sub-navbar '+form.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submit">
          {{ $t('common.submit') }}
        </el-button>
      </sticky>

      <div class="form-main-container">
        <el-row>

          <el-form-item style="margin-bottom: 40px;" prop="title">
            <MDinput v-model="form.name" :maxlength="100" name="name" required>
              {{ $t('common.name') }}
            </MDinput>
          </el-form-item>
        
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky'
import { findCategory, createCategory, updateCategory } from '@/api/article-category'

const defaultForm = {
  name: ''
}

export default {
  name: 'Detail',
  components: { MDinput, Sticky },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        const message = this.$t('validate.required', { field: this.$t('common.' + rule.field) })
        callback(new Error(message))
      } else {
        callback()
      }
    }
    return {
      form: Object.assign({}, defaultForm),
      loading: false,
      rules: {
        name: [{ validator: validateRequire }],
      },
      tempRoute: {}
    }
  },
  computed: {
    releaseTime: {
      // set and get is useful when the data
      // returned by the back end api is different from the front end
      // back end return => "2013-06-25 06:59:25"
      // front end need timestamp => 1372114765000
      get() {
        return (+new Date(this.form.release_time * 1000))
      },
      set(val) {
        this.form.release_time = (new Date(val)).getTime() / 1000
      }
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

      findCategory(this.id).then(response => {
        this.form = response.data

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.$t('route.articleCategoryEdit')
      const route = Object.assign({}, this.tempRoute, { title: `${title} #${this.form.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.$t('route.articleCategoryEdit')
      document.title = `${title} - ${this.form.id}`
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.isEdit()) {
            updateCategory(this.id, this.form).then(response => {
              this.success()
            })
          } else {
            createCategory(this.form).then(response => {
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
        this.$router.push({ name: 'articleCategoryEdit', params: { id: id }})
      }
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

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}
</style>
