<template>
  <div class="cmp-table">
    <Table stripe :columns="columns1" :data="data1" size="small" @on-row-click="toDetail"></Table>
  </div>
</template>

<script>
import { CHANGE_ID } from 'store/mutations_type'

import { getCompetitionMenu } from 'network/questions';


export default {
  name: "cmpTable",
  data () {
    return {
      columns1: [
                  {
                      title: '题目编号',
                      key: 'id'
                  },
                  {
                      title: '题目标题',
                      key: 'title'
                  },
                  {
                      title: '正确',
                      key: 'accepted'
                  },
                  {
                      title: '提交',
                      key: 'submitted'
                  },
                ],
      data1: [],
    }
  },
  activated () {
    const id = this.$route.params.id;
    this.getCompetitionMenu(id);
  },
  methods: {
    toDetail(index) {
        const pid  = index.id;
        this.$store.commit(CHANGE_ID, pid);
        this.$router.push("/detail/" + pid);
    },
    getCompetitionMenu (id) {
      getCompetitionMenu(id).then(res => {
        this.data1 = res.data.problems;
      })
    } 
  },
}
</script>

<style scoped>

</style>