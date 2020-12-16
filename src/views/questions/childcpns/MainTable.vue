<template>
  <div class="main-table">
    <div class="wrapper-table">
      <search @searchquestions="changeQuestions" />
      <Table stripe :columns="columns1" :data="data1" size="small" @on-row-click="toDetail"></Table>
      <div class="page">
          <Page :total="data1.length" show-elevator class="page" />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search';
import { CHANGE_ID } from '@/store/mutations_type';
import { getQuestions } from 'network/questions';

export default {
  name: "MainTable",
  components: {
    Search,
  },
  data () {
    return {
        columns1: [
            {
                title: '问题编号',
                key: 'id'
            },
            {
                title: '题目标题',
                key: 'title'
            },
            {
                title: '通过',
                key: 'accepted'
            },
            {
                title: '提交',
                key: 'submitted'
            },
        ],
        data1: []
    }
  },
  activated () {
    const data = {
        page: 0,
        size: 10,
    }
    this.getQuestions(data);
  },
  methods: {
    toDetail(index) {
        const pid  = index.id;
        this.$store.commit(CHANGE_ID, pid);
        this.$router.push("/detail/" + pid);
    },
    getQuestions (data) {
        getQuestions (data).then(res => {
            this.data1 = res.data;
        })
    },
    changeQuestions () {
      console.log(this.$store.state.questionArr);
      this.data1 = this.$store.state.questionArr;
    }
  },

}
</script>

<style scoped>
  .main-table {
    width: 70%;
    padding: 10px;
    margin: 0 auto;
    margin-top: 100px;
  }

  .wrapper-table {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid rgb(184, 179, 179);
    border-radius: 5px;
    box-sizing: border-box;
    /* background: #515a6e; */
    background: #fff;
  }

  .page {
      width: 80%;
      margin: 0 auto;
      margin-left: 20%;
      margin-top: 10px;
  }
</style>