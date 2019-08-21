<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane :label="$t('common.session')" name="session">
                <session />
              </el-tab-pane>
              <el-tab-pane :label="$t('common.account')" name="account">
                <account :user="user" />
              </el-tab-pane>
              <el-tab-pane :label="$t('common.password')" name="password">
                <password />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Account from './components/Account'
import Password from './components/Password'
import Session from './components/Session'

export default {
  name: 'Profile',
  components: { UserCard, Account, Password, Session },
  data() {
    return {
      user: {},
      activeTab: 'session'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'username',
      'firstName',
      'lastName',
      'language',
      'email',
      'avatar'
    ])
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
