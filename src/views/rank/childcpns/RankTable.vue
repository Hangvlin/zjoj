<template>
  <div class="rank-table wrapper-table">
    <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button>
  </div>
</template>

<script>
export default {
        data () {
            return {
                columns8: [
                    {
                        "title": "Rank",
                        "key": "Rank",
                        "fixed": "left",
                        "width": 66,
                        "align": "center",
                    },
                    {
                        "title": "ID",
                        "key": "ID",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1
                            },
                            {
                                label: 'Less than 4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "User",
                        "key": "User",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Solve",
                        "key": "Solve",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Penalty",
                        "key": "Penalty",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "A",
                        "key": "B",
                        "width": 100,
                    },
                    {
                        "title": "B",
                        "key": "B",
                        "width": 100,
                    },
                    {
                        "title": "C",
                        "key": "C",
                        "width": 100,
                    },
                    {
                        "title": "D",
                        "key": "D",
                        "width": 100,
                    },
                ],
                data7: [
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1111,
                         cellClassName: {
                            A: 'demo-table-info-cell-age',
                            B: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },{
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                    {
                        "Rank": "1",
                        "ID": "190310",
                        "User": "qw",
                        "Solve": 1,
                        "Penalty": 5627,
                        "A": 1563,
                        "B": 4254,
                        "C": 1438,
                        "D": 1438,
                    },
                ],
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            },
        },
    }
</script>

<style scoped>
  .wrapper-table {
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid rgb(184, 179, 179);
    border-radius: 5px;
    box-sizing: border-box;
    background: #fff;
  }

    .demo-table-info-cell-age >>> .ivu-table-cell {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>