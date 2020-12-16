<template>
  <div class="main-page">
    <div class="info">
      <p class="title">{{title}}</p>
      <p class="tip">诚信考试，不要作弊！</p>
      <p class="des">
        {{desc}}
      </p>
      <div class="time">
        开始时间:
        <span class="start">
          {{start}}
        </span>
        结束时间:
        <span class="end">
          {{end}}
        </span>
      </div>
    </div>
    <cmp-table />
  </div>
</template>

<script>
import cmpTable from './cmpTable';
import { getCompetitionMenu } from 'network/questions';

export default {
  name: "MainPages",
  components: {
    cmpTable
  },
  data () {
    return {
      title:'不要作弊',
      desc: '具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述具体描述',
      start: 'asdaasdas',
      end: 'asdasdasd'
    }
  },
  activated () {
    const id = this.$route.params.id;
    this.getCompetitionMenu(id);
  },
  methods: {
    getCompetitionMenu (id) {
      getCompetitionMenu(id).then(res => {
        const ans = res.data;
        this.title = ans.title;
        this.desc = ans.desc;
        this.start = ans.start_at;
        this.end = ans.finish_at;
        console.log(res);
      })
    } 
  }
}
</script>

<style scoped>
  .main-page {
    width: 60%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
    padding: 5px;
    border: 1px solid #a5a1a1;
    border-radius: 5px;
    background: #ffffff;
  }

  .info {
    text-align: center;
  }

  .title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: bold;
  }

  .tip {
    color: red;
    font-size: 25px;
    font-weight: bold;
  }

  .des {
    width: 60%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.5;
    text-align: left;
    text-indent: 2em;
  }

  .time {
    margin-bottom: 100px;
  }

  .time .end {
    color: orange
  }

  .time .start {
    margin-right: 30px;
    color: orange
  }
</style>