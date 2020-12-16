<template>
  <div class="search">
    <div class="wrapper-search">
        <Input 
          search 
          enter-button 
          class="s-input"
          v-model="value"
          @on-search="getSquestions(value)"  
          placeholder="输入题号" />
    </div>
  </div>
</template>

<script>
import { searchQuestions } from 'network/search';
import { CHANGE_QUESTIONARR } from 'store/mutations_type';

export default {
  name: "Search",
  data(){
    return {
      value: '',
      questionArr: '',
    }
  },
  methods: {
    searchQuestions (data) {
      searchQuestions(data).then(res => {
        this.questionArr = res.data;
        this.$store.commit(CHANGE_QUESTIONARR, res.data);
        this.$emit('searchquestions');
      })
    },

    getSquestions(value) {
      console.log(value);
      const data = {
        action: 'search',
        keyword: this.value,
        page: 0,
        size: 10
      }

      this.searchQuestions(data);
    }
  }
}
</script>

<style scoped>
  .wrapper-search {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
    /* background: #515a6e; */
  }

  .s-input >>>.ivu-input {
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }

  .s-input >>>.ivu-input-group-append, 
  .s-input >>>.ivu-input-group-prepend {
    border-radius: 20px;
  }
</style>