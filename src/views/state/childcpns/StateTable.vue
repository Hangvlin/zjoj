<template>
  <div class="state-table container wrapper-table">
    <Table :data="tableData1" :columns="tableColumns1" size="small" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StateTable",
  data () {
      return {
          tableData1: this.mockTableData1(),
          tableColumns1: [
              {
                title: 'ID',
                key: 'ID'
              },
              {
                  title: '用户',
                  key: 'User',
                  render: (h, params) => {
                      return h('div', params.row.User);
                  }
              },
              {
                  title: '问题',
                  key: 'question',
                  render: (h, params) => {
                      return h('div', params.row.question);
                  }
              },
              {
                  title: 'Status',
                  key: 'status',
                  render: (h, params) => {
                      const row = params.row;
                      const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error';
                      const text = row.status === 1 ? '编译错误' : row.status === 2 ? '正确' : '错误';
                      return h('Tag', {
                          props: {
                              type: 'solid',
                              color: color
                          }
                      }, text);
                  }
              },
              {
                  title: '内存',
                  key: 'time',
                  render: (h, params) => {
                      return h('div', params.row.time + 'bits');
                  }
              },
              {
                  title: '耗时',
                  key: 'time',
                  render: (h, params) => {
                      return h('div', params.row.time + 's');
                  }
              },
              {
                  title: '语言',
                  key: 'time',
                  render: (h, params) => {
                      return h('div', params.row.lauguage);
                  }
              },
              {
                  title: '代码长度',
                  key: 'update',
                  render: (h, params) => {
                      return h('div', params.row.codeLength + "B");
                  }
              },
              {
                  title: '提交时间',
                  key: 'time',
                  render: (h, params) => {
                      return h('div', params.row.time );
                  }
              },
          ]
      }
  },
  methods: {
      mockTableData1 () {
          let data = [];
          // 请求的数据
          const userName = ['City', 'People', 'Cost', 'Life', 'Entertainment', 'City', 'People', 'Cost', 'Life', 'Entertainment'];
          const question = ['1002', '1003', '1001','1002', '1003', '1001','1002', '1003', '1001', '1001'];
          const status = [1, 2, 2 ,1, 1, 1, 2, 2 ,1, 1];
          const time = ['30', '31', '32', '33', '34', '30', '31', '32', '33', '34'];
          const codeLength = ['1024', '1000','1024', '1000','1024', '1000','1024', '1000','1024', '1000'];
          const lauguage = ['c++', 'c', 'python', 'JavaScript','c++', 'c', 'python', 'JavaScript','c++', 'c'];
          for (let i = 0; i < 10; i++) {
              data.push({
                  ID: Math.floor(Math.random () * 100 + 1),
                  status: status[i],
                  User: userName[i],
                  question: question[i],
                  time: time[i],
                  codeLength: codeLength[i],
                  lauguage: lauguage[i],
              })
          }
          return data;
      },
      changePage () {
          // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
          this.tableData1 = this.mockTableData1();
      }
  }
}
</script>

<style scoped>
    .container {
        width: 80%;
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
</style>