<template>
  <div class="nav-bar">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1" class="logo" to="/home">
            <Icon type="md-ionic" />
            在线测评系统
        </MenuItem>
        <!-- <MenuItem name="2">
            <Icon type="ios-people" />
            讨论版
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-book" />
            常见问答
        </MenuItem> -->
        <MenuItem name="4" to="/questions" >
            <Icon type="md-chatboxes" />
            问题
        </MenuItem>
        <!-- <MenuItem name="5">
            <Icon type="md-apps" />
            来源/分类
        </MenuItem>
        <MenuItem name="6" to="/state">
            <Icon type="ios-paper" />
            状态
        </MenuItem>
        <MenuItem name="7" to="rank">
            <Icon type="ios-paper" />
            排名
        </MenuItem>
        <MenuItem name="8">
            <Icon type="md-bookmark" />
            名校联赛
        </MenuItem> -->
        <MenuItem name="9" to="/competition">
            <Icon type="ios-create"/>
            竞赛&作业
        </MenuItem>
        <Submenu name="10" class="login">
            <template slot="title">
                {{this.$store.state.username}}
            </template>
            <MenuGroup title="可选操作">
                <div v-if="!this.$store.state.isShow">
                    <MenuItem name="10-1" to="/login">登录</MenuItem>
                    <MenuItem name="10-2" to="/register">注册</MenuItem>
                </div>
                <div v-if="this.$store.state.isShow">
                    <MenuItem name="10-1" to="">退出</MenuItem>
                </div>
            </MenuGroup>
        </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
      return {
        
      }
  }

}
</script>

<style scoped>
  .logo {
    margin-left: 8%;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .login {
    margin-left: 54%;
  }
</style>