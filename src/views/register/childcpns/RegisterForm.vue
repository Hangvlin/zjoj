<template>
  <div class="register-form">
    <h2>
      <span>注册账号</span>
    </h2>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="User">
            <Input v-model="formValidate.User" placeholder="输入你的用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formValidate.passwd"></Input>
        </FormItem>
        <FormItem label="昵称" prop="nickName">
            <Input v-model="formValidate.nickName" placeholder="输入你的昵称"></Input>
        </FormItem>
        <FormItem label="手机号码" prop="phone">
            <Input v-model="formValidate.phone" placeholder="输入你的手机号码"></Input>
        </FormItem>
        <FormItem label="邮件地址" prop="mail">
            <Input v-model="formValidate.mail" placeholder="输入你的邮箱"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { registerUser } from 'network/user.js';

export default {
  name: "RegisterForm",
  data () {
      return {
          formValidate: {
              User: '',
              passwd: '',
              nickName: '',
              phone: '',
              mail: '',
          },
          ruleValidate: {
              User: [
                  { required: true, message: '用户名不能为空', trigger: 'blur' }
              ],
              mail: [
                  { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
              ],
              passwd: [
                  {required: true, message: '密码不能为空', trigger: 'blue'},
              ],
              phone: [
                  {type: '', message: '格式错误！请输入数字', trigger: 'blur'}
              ],
          }
      }
  },
  methods: {
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                const data = {
                    action: 'register',
                    username: this.formValidate.User,
                    password: this.formValidate.passwd,
                    nickname: this.formValidate.nickName || "没昵称",
                    email: this.formValidate.mail,
                    mobilephone: this.formValidate.phone,
                };
                // 发送请求
                this.registerUser(data);
            } else {
                this.$Message.error('注册失败');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    },
    registerUser (data) {
        registerUser(data).then(res => {
            this.$Message.success('注册成功');
            // 跳转到登录页面
            setTimeout(() => {
                this.$router.push('/login');
            }, 500);
        })
    }
  }
}
</script>

<style scoped>
  h2 {
    margin-bottom: 30px;
    text-align: center;
  }

  h2 span {
    border-bottom: 6px solid #000;
    padding-bottom: 3px;
  }

  .register-form {
    width: 40%;
    margin: 0 auto;
    background: #ffffff;
    padding: 20px 30px 20px 10px;
    margin-top: 80px;
    margin-bottom: 120px;
    border: 2px solid rgb(211, 206, 206);
    border-radius: 5px;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, .3);
  }
</style>