<template>
  <div class="com-form wrapper-table">
    <search @searchcompetitons="changeComArr" />
    <Table 
        stripe 
        :columns="columns1" 
        :data="data1"
        size="small"
        @on-row-click="toDetail"
    >
    </Table>
    <div class="page">
      <Page :total="data1.length" show-elevator class="page" />
    </div>
  </div>
</template>

<script>
import Search from './Search';

import { CHANGE_ID } from '@/store/mutations_type';

import { getCompetition } from 'network/questions'

export default {
  name: "ComForm",
  components: {
    Search
  },
  data () {
    return {
      columns1: [
          {
            title: '编号',
            key: 'id'
          },
          {
            title: '标题',
            key: 'title'
          },
          {
            title: '结束时间',
            key: 'finish_at'
          }
      ],
      data1: [
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     END: '运行中  剩余 5天22小时55分11秒'
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     END: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     END: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // },
          // {
          //     ID: '1055',
          //     Name: '20级新生选拔天梯赛( 一 )',
          //     Status: '运行中  剩余 5天22小时55分11秒',
          // }
      ]
    }
  },
  activated () {
      this.getCompetition();
  },
  methods: {
      toDetail(index) {
          const pid  = index.id;
          this.$store.commit(CHANGE_ID, pid);
          this.$router.push("/cmpdetail/" + pid);
      },
      getCompetition () {
          getCompetition().then(res => {
              this.data1 = res.data;
          })
      },
      changeComArr () {
        this.data1 = this.$store.state.competitonArr;
      }
  }
}
</script>

<style scoped>
  .main-table {
    width: 70%;
    padding: 20px;
    margin: 0 auto;
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