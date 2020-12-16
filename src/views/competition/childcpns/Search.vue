<template>
  <div class="search">
    <div class="wrapper-search">
        <Input 
          search 
          enter-button 
          class="s-input" 
          placeholder="输入题号"
          v-model="value"
          @on-search="searchCompetition" />
    </div>
  </div>
</template>

<script>
import { searchCompetitions } from 'network/search';
import { CHANGE_COMPETITION } from 'store/mutations_type';

export default {
  name: "Search",
  data() {
    return {
      value: '',
    }
  },
  methods: {
    searchCompetitions (data) {
      searchCompetitions(data).then(res => {
        this.$store.commit(CHANGE_COMPETITION, res.data);
        this.$emit("searchcompetitons");
      })
    },
    searchCompetition () {
      const data = {
        action: 'search',
        keyword: this.value,
        page: 0,
        size: 10
      }
      this.searchCompetitions(data);
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