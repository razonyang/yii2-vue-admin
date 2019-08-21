<template>
  <div class="app-container">

    <el-card>
      <el-tabs v-model="activeTab">

        <el-tab-pane :label="$t('systemSetting.mailer')" name="mailer">
          <mailer :user="user" />
        </el-tab-pane>

        <el-tab-pane :label="$t('systemSetting.upload')" name="upload">
          <upload :user="user" />
        </el-tab-pane>

      </el-tabs>
    </el-card>

  </div>
</template>

<script>
import Mailer from './components/Mailer'
import Upload from './components/Upload'

export default {
  name: 'Profile',
  components: { Mailer, Upload },
  data() {
    return {
      user: {},
      activeTab: 'mailer'
    }
  },
  computed: {
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        language: this.language,
        email: this.email,
        avatar: this.avatar
      }
    }
  }
}
</script>
