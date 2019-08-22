<template>
  <div class="form-container">
    <el-form ref="form" :model="form" :rules="rules" class="form-container" label-position="top">

      <sticky :z-index="10" :class-name="'sub-navbar '+form.status">
        <StatusDropdown v-model="form.status" />
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submit">
          {{ $t('common.submit') }}
        </el-button>
      </sticky>

      <div class="form-main-container">
        <el-row>

          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="form.title" :maxlength="100" name="name" required>
                {{ $t('common.title') }}
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="60px" :label="$t('common.author')" class="postInfo-container-item" prop="author">
                    <el-input v-model="form.author" />
                  </el-form-item>
                </el-col>

                <el-col :span="10">
                  <el-form-item label-width="120px" :label="$t('common.releaseTime')" class="postInfo-container-item" prop="release_time">
                    <el-date-picker v-model="releaseTime" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="Select date and time" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="120px" :label="$t('article.category')" class="postInfo-container-item" prop="release_time">

                    <el-select
                      v-model="form.category_id"
                      clearable
                      filterable
                      remote
                      :remote-method="findCategories"
                      :loading="loading"
                    >
                      <el-option
                        v-for="item in categories"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      />
                    </el-select>

                  </el-form-item>
                </el-col>

              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="70px" :label="$t('common.summary')" prop="summary">
          <el-input v-model="form.summary" :rows="2" type="textarea" class="article-textarea" autosize placeholder="Please enter the content" />
          <span v-show="summaryLength" class="word-counter">{{ summaryLength }}words</span>
        </el-form-item>

        <el-form-item :label="$t('common.cover')" label-position="top" prop="cover" style="margin-bottom: 30px;">
          <Upload v-model="form.cover" />
        </el-form-item>

        <el-form-item :label="$t('common.content')" prop="content" style="margin-bottom: 30px;">
          <Tinymce ref="editor" v-model="form.content" :height="400" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Upload from '@/components/Upload/SingleImage'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky'
import { findArticle, createArticle, updateArticle } from '@/api/article'
import { findCategories } from '@/api/article-category'
import { StatusDropdown } from '@/components/Dropdown'

const defaultForm = {
  status: 1,
  category_id: undefined,
  title: '',
  content: '',
  summary: '',
  cover: '',
  version: undefined,
  release_time: undefined
}

export default {
  name: 'Detail',
  components: { Tinymce, MDinput, Upload, Sticky, StatusDropdown },
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
      categories: [],
      rules: {
        title: [{ validator: validateRequire }],
        summary: [{ validator: validateRequire }],
        release_time: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        author: [{ validator: validateRequire }]
      },
      tempRoute: {}
    }
  },
  computed: {
    summaryLength() {
      return this.form.summary.length
    },
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

      findArticle(this.id, { expand: 'version,content' }).then(response => {
        this.form = response.data
        this.categories = [
          {
            id: response.data.category_id,
            name: response.data.category_name
          }
        ]

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = this.$t('route.articleEdit')
      const route = Object.assign({}, this.tempRoute, { title: `${title} #${this.form.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = this.$t('route.articleEdit')
      document.title = `${title} - ${this.form.id}`
    },
    findCategories(query) {
      findCategories({ filter: { name: query }}).then(response => {
        this.categories = response.data.items
      })
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.isEdit()) {
            updateArticle(this.id, this.form).then(response => {
              this.success()
            })
          } else {
            createArticle(this.form).then(response => {
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
        this.$router.push({ name: 'articleEdit', params: { id: id }})
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

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
