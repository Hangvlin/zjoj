<template>
  <div class="main">
    <div class="card">
        <div class="wrapper-form">
          <h2 class="title">
              <span>用户登录</span>
          </h2>
          <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            <FormItem label="User" prop="user">
                <Input type="text" v-model="formCustom.username"></Input>
            </FormItem>
            <FormItem label="Password" prop="passwd">
                <Input type="password" v-model="formCustom.passwd"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
                <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
            </FormItem>
          </Form>
        </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from 'network/user';
import { CHANGE_USERNAME, SHOW_EXIT } from 'store/mutations_type';

export default { 
  name: "MainSector",
  data () {
      const validatePass = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('Please enter your password'));
          } else {
              if (this.formCustom.passwdCheck !== '') {
                  // 对第二个密码框单独验证
                  this.$refs.formCustom.validateField('passwdCheck');
              }
              callback();
          }
      };
      const validatePassCheck = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('Please enter your password again'));
          } else if (value !== this.formCustom.passwd) {
              callback(new Error('The two input passwords do not match!'));
          } else {
              callback();
          }
      };
      const validateAge = (rule, value, callback) => {
          if (!value) {
              return callback(new Error('Age cannot be empty'));
          }
      };
      
      return {
          formCustom: {
              passwd: '',
              passwdCheck: '',
              username: ''
          },
          ruleCustom: {
              passwd: [
                  { validator: validatePass, trigger: 'blur' }
              ],
              passwdCheck: [
                  { validator: validatePassCheck, trigger: 'blur' }
              ],
              age: [
                  { validator: validateAge, trigger: 'blur' }
              ]
          }
      }
  },
  methods: {
      handleSubmit (name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                const data = {
                    action: 'login',
                    username: this.formCustom.username,
                    password: this.formCustom.passwd
                };

                this.loginUser(data);
              } else {
                  this.$Message.error('登录失败！');
              }
          })
      },
      handleReset (name) {
          this.$refs[name].resetFields();
      },
      loginUser (data) {
          loginUser(data).then(res => {
              
              this.$store.commit(CHANGE_USERNAME, this.formCustom.username);
              this.$store.commit(SHOW_EXIT, true);

              this.$Message.success('登录成功！');

              setTimeout(() => {
                this.$router.push('/home');
              }, 500);
          })
      }
  }
}
</script>

<style scoped>
  .main {
    width: 50%;
    margin: 0 auto;
    /* overflow: hidden; */
  }

  .wrapper-form {
    position: relative;
    z-index: 9999;
    width: 50%;
    padding: 5% 10% 5% 5%;
    margin: 0 auto;
    margin-top: 10%;
    margin-bottom: 10%;
    border: 1.5px solid rgba(228, 225, 225, 0.815);
    box-sizing: border-box;
    background: rgb(255,255,255);
    transition: all 1s;
    
  }

  .wrapper-form:hover {
      
      box-shadow: 0px 0px 10px 2px rgba(59, 61, 65, 0.815);
  }

  .title {
    text-align: center;
    padding-left: 40px;
    margin-bottom: 39px;
  }

  .title span {
      border-bottom: 6px solid rgba(0, 0, 0, 0.815);
  }

  .card {
      margin-top: 50px;
      margin-bottom: 132px;
      padding: 1px 0;
      background: white;
      box-shadow: 12px 12px 18px  rgba(0, 0, 0, .3);
      background: linear-gradient(45deg, white 70%, #e8eaec 0, #e8eaec 75%, #17233d 0, #17233d 100%);
  }
</style>