<template>
  <div class="detail">
    <div class="container">
      <h1 class="title">
        {{iid}}. {{title}}
      </h1>
      <Tabs>
        <TabPane label="题目" icon="md-list-box">
          <div class="question-wrapper clearfix">
            <div class="qes-container">
            <p class="qes-info">
              {{desc}}
            </p>
            <div class="input">
              <h3>输入格式</h3>
              <p class="info">
                {{input}}
              </p>
            </div>
            <div class="output">
              <h3>输出格式</h3>
              <p class="info">
                {{output}}
              </p>
            </div>
            <div class="sample">
              <h3>样例输入</h3>
              <pre class="info sample-info"><code>{{sample}}</code></pre>
            </div>
            <div class="sample">
              <h3>样例输出</h3>
              <pre class="info sample-info"><code>{{sampleout}}</code></pre>
            </div>
            </div>
            <div class="qes-news">
              <List header="题目参数" border size="small">
                  <ListItem>
                    <div class="text-container">
                      <span class="left">难度：</span>
                      <span class="right">简单</span>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div class="text-container">
                      <span class="left">时/空限制：</span>
                      <span class="right">{{time}}ms / {{memory}}KB</span>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div class="text-container">
                      <span class="left">总通过数：</span>
                      <span class="right">{{accepted}}</span>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div class="text-container">
                      <span class="left">总提交数：</span>
                      <span class="right">{{submitted}}</span>
                    </div>
                  </ListItem>
                  <ListItem>
                    <div class="text-container">
                      <span class="left">来源：</span>
                      <span class="right">软工一班</span>
                    </div>
                  </ListItem>
                  <ListItem>
                    <Dropdown>
                        <a href="javascript:void(0)">
                            算法标签
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list" @on-visible-change='showItem'>
                            <DropdownItem>
                              <Tag v-if="tags1" color="magenta">{{tags1}}</Tag>
                              <Tag v-if="tags2" color="red">{{tags2}}</Tag>
                              <Tag v-if="tags3" color="volcano">{{tags3}}</Tag>
                              <Tag v-if="tags4" color="volcano">{{tags4}}</Tag>
                              <Tag v-if="tags5" color="volcano">{{tags5}}</Tag>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                  </ListItem>
              </List>
            </div>
          </div>
          <Divider />
          <div class="code-container">
            <div class="code-header">
              <p>代码类型</p>
              <Select v-model="model1" style="width:200px" class="code-select">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
            <div class="code-make">
            <codemirror
              ref="myCm"
              :value="msg"
              v-model="msg"
              :options="cmOptions"
              @changes="changes()"
              class="code"
            >
            </codemirror>
            </div>
            <Button 
              :loading="isloading"
              type="success" 
              class="submit" 
              shape="circle" 
              icon="ios-cloud-upload-outline"
              
              @click="submit()"
              >提交代码</Button>
          </div>
          <Divider />
          <div class="state clearfix">
            <p>代码提交状态: </p>
            <Alert type="success" v-if="acceptedShow" class="suc" show-icon>正确</Alert>
            <Alert type="error" v-if="errorShow" class="suc" show-icon>答案错误</Alert>
            <Alert type="error" v-if="compileError" class="suc" show-icon>编译错误</Alert>
            <Alert type="error" v-if="compileError" class="err" show-icon>
                错误详情
                <span slot="desc">
                  {{errorInfo}}
                </span>
            </Alert>
          </div>
        </TabPane>
        <TabPane label="讨论" icon="md-list">暂时不支持</TabPane>
        <TabPane label="题解" icon="ios-browsers">暂时不支持</TabPane>
        <TabPane label="视频讲解" icon="md-chatboxes">暂时不支持</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import InfoArea from './childcpns/InfoArea';

import { getDetailQuestion, getQuestionTags } from 'network/detail';
import { commitCode, getResult } from 'network/judger';

import { codemirror } from 'vue-codemirror';
import 'codemirror/addon/selection/active-line';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';

require("codemirror/mode/python/python.js");
require('codemirror/addon/fold/foldcode.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/addon/fold/brace-fold.js');
require('codemirror/addon/fold/xml-fold.js');
require('codemirror/addon/fold/indent-fold.js');
require('codemirror/addon/fold/markdown-fold.js');
require('codemirror/addon/fold/comment-fold.js');

export default {
  name: "Detail",
  components: {
    InfoArea,
    codemirror
  },
  data() {
    return {
        errorInfo: '',
        compileError: false,
        isloading: false,
        errorShow: false,
        acceptedShow: false,
        title: '',
        desc: '',
        accepted: 0,
        iid: '',
        input: '',
        output: '',
        memory: 0,
        sample: '',
        sampleout: '',
        submitted: 0,
        time: 0,
        accepted: 0,
        sid: '',
        tags1: '',
        tags2: '',
        tags3: '',
        tags4: '',
        tags5: '',
        tags6: '',
        msg: '',
        myCm: "",
        placeholder: "输入你的代码",
        cmOptions: {
          value: "",
          mode:'javascript',
          theme: "foo bar",
          smartIndent: true,
          tabSize: 4,
          readOnly: false,
          showCursorWhenSelecting: true,
          lineNumbers: true,
          firstLineNumber: 1,
          styleActiveLine: true,
          Autofocus: true
      },
      cityList: [
                  {
                      value: 'C++',
                      label: 'C++',
                  },
                  {
                      value: 'C',
                      label: 'C',
                  },
                  {
                      value: 'Python',
                      label: 'Python',
                  },
              ],
              model1: ''
    }
  },
  computed: {
    
  },
  activated() {
    const id = this.$route.params.id;
    this.getDetailQuestion(id);
    
    this.getQuestionTags(id);
  },
  methods: {
    changes() {
      if (this.msg == '') {
        this.placeholder = "输入你的代码";
      }else{
        this.placeholder = '';
      }
    },
    submit() {
      const data = {
        action: 'submit',
        uid: 1,
        source: this.msg,
        pid: this.iid,
        cid: this.cid || '',
        language: 1
      };


      this.commitCode(data);
      this.isloading = true;

      const timer = setInterval(() => {
         const sid = {
          action: 'ajax',
          sid:this.sid,
        }
        this.getResult(sid, timer);
      }, 2000);
      
    },
    showItem () {
      console.log("ok");
    },

    /* 请求问题数据 */
    getDetailQuestion (id) {
      getDetailQuestion(id).then(res => {
        const ans = res.data;
        this.title = ans.title;
        this.desc = ans.desc;
        this.iid = ans.id;
        this.input = ans.input;
        this.output = ans.output;
        this.sample = ans.sample_input;
        this.sampleout = ans.sample_output;
        this.time = ans.time_limit;
        this.memory = ans.memory_limit;
        this.submitted = ans.submitted;
        this.accepted = ans.accepted;
      })
    },

    getQuestionTags (id) {
      getQuestionTags(id).then(res => {
        const ans = res.data;
        console.log(res);
          this.tags1 = ans[0].name;
          this.tags2 = ans[1].name;
          this.tags3 = ans[2].name;
          this.tags4 = ans[3].name;
          this.tags5 = ans[4].name;
      })
    },

    commitCode (data) {
      commitCode(data).then(res => {
        console.log(res);
        this.sid = res.data;
      })
    },

    getResult (data, timer) {
      getResult(data).then(res => {
        let ans = res.data.result;
        console.log(ans);
        if (ans != 9 && ans != 8) {
          console.log(res);
          if (ans === 0) {
            this.acceptedShow = true;
            this.errorShow = false;
            this.compileError = false;
          }
          if (ans === 1) {
            this.acceptedShow = false;
            this.errorShow = true;
          }
          if (ans === 2) {
            this.compileError = true;
            this.errorShow = false;
            this.acceptedShow = false;
            this.errorInfo = res.data.details;
            console.log(this.errorInfo);
          }
          clearInterval(timer);
          this.isloading = false;
        }
      })
    } 
  }
}
</script>

<style scoped>
  .clearfix::after {
    content: "";
    clear: both;
    display: block;
  }

  .text-container {
    width: 100%;
    padding: 0 20px 0 0;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .detail {
    overflow: hidden;
  }
  .container {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
    border: 1px solid transparent;
    border-color: #ddd;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.08);
    border-radius: 4px;
  }

  .question-wrapper {
    margin-bottom: 30px;
  }

  .title {
    margin-top: 30px;
  }
  .input h3,
  .output h3 {
    margin: 20px 0 10px 0;
  }

  .info {
    margin-bottom: 15px;
    font-size: 16px;
  }

  .sample pre {
    padding: 2px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-kerning: auto;
    font-size: 100%;
    font-stretch: normal;
    font-style: normal;
    font-variant: normal;
    font-variant-ligatures: normal;
    font-weight: normal;
    border: 1px solid #f0f0f0;
    background-color: #f6f8fa;
    border-radius: 3px;
    color: black;
  }

  .qes-info {
    margin: 10px 0 15px 0;
    font-size: 16px;
  }

  .qes-container {
    float: left;
    width: 65%;
  }

  .qes-news {
    float: right;
     width: 30%;
     margin-right: 30px;
     margin-top: 30px;
  }


  .code {
    width: 100%;
    text-align: left;
    border: 1px solid #c2c7d0;
    margin-bottom: 50px;
  }

  .CodeMirror-line span {
    color: #505050;
  }

  .CodeMirror-scroll {
    height: 230px !important;

  }

  .code-container {
    width: 100%;
  }

  .code-select {
    float: right;
    margin-top: 15px;
    margin-right: 30px;
  }

  .code-header {
    width: 100%;
    height: 60px;
    background: #f8f9fa;
    border: 1px solid #c2c7d0;
    margin-bottom: 0;
  }

  .code-header p {
    float: left;
    font-size: 20px;
    margin-top: 15px;
    margin-left: 20px;
  } 

  .submit {
    float: right;
    margin-top: -30px;
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .state {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
  }

  .state p {
    float: left;
    padding-top: 1px;
    font-size: 18px;
  }
  
  .state .suc {
    float: left;
    margin-left: 10px;
  }

  .state .err {
    width: 100%;
  }
</style>