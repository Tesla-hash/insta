<template>
  <q-page class="q-pt-xs">
  </br>
</br>
    <div class="q-ma-md">
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">900</q-item-label>
                  <q-item-label class="text-grey-4">Кол-во Почт</q-item-label>
                </q-item-section>

                <q-item-section side>
                <!--  <q-icon name="o_shopping_cart" class="box_1" size="60px"></q-icon>-->
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-1" style="width:70%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">1050</q-item-label>
                  <q-item-label class="text-grey-4">Кол-во телефонов</q-item-label>
                </q-item-section>

                <q-item-section side>
                <!--  <q-icon name="o_account_balance_wallet" class="box_2" size="60px"></q-icon>-->
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-2" style="width:40%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">80</q-item-label>
                  <q-item-label class="text-grey-4">Кол-во Прокси</q-item-label>

                </q-item-section>

                <q-item-section side>
                  <!--<q-icon name="o_account_balance" class="box_3" size="60px"></q-icon>-->
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-3" style="width:80%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-white">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">720</q-item-label>
                  <q-item-label class="text-grey-4">Никнеймы</q-item-label>
                </q-item-section>

                <q-item-section side>
              <!--    <q-icon name="o_people" class="box_4" size="60px"></q-icon>-->
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-4" style="width:30%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>

</template>


<script>
//    import Vue from 'vue';
  ///  import IEcharts from 'vue-echarts-v3/src/full.js';
  //  import echarts from 'echarts'
  //  import {exportFile} from 'quasar';
  ///  Vue.component('IEcharts', IEcharts);
    function wrapCsvValue(val, formatFn) {
        let formatted = formatFn !== void 0
            ? formatFn(val)
            : val
        formatted = formatted === void 0 || formatted === null
            ? ''
            : String(formatted)
        formatted = formatted.split('"').join('""')
        return `"${formatted}"`
    }
    export default {
        data() {
            return {
                areaChartOption: {
                    legend: {
                        textStyle: {
                            color: 'white',
                        }
                    },
                    grid: {
                        bottom: '9%',
                        left: '9%',
                        top: '10%',
                        right: '5%',
                        show: true
                    },
                    tooltip: {show: true},
                    xAxis: {
                        type: 'category',
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep'],
                        axisLine: {
                            lineStyle: {
                                color: 'grey'
                            },
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: 'white'
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: 'grey'
                            },
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: 'white'
                        }
                    },
                    series: [{
                        name: 'Sales',
                        data: [0, 600, 300, 700, 700, 1330, 600, 500, 0],
                        type: 'line',
                        areaStyle: {},
                        smooth: true,
                        color: '#e4a3e2'
                    },
                        {
                            name: 'Goals',
                            data: [0, 300, 600, 400, 1000, 730, 840, 300, 0],
                            type: 'line',
                            areaStyle: {},
                            smooth: true,
                            color: '#25c0ea'
                        }
                    ]
                },
                pieOptions: {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 0,
                        width: 300,
                        textStyle: {
                            color: 'white',
                        }
                    },
                    color: ['#66e398', '#cc9dd1', '#f0d377'],
                    series: [
                        {
                            name: 'Competitor',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inner',
                                    formatter: function (param, index) {
                                        return param.value + ' %'
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            selectedMode: 'single',
                            data: [
                                {value: 40, name: 'Product 1', selected: true},
                                {value: 20, name: 'Competitor 1', selected: false},
                                {value: 15, name: 'Competitor 2', selected: false},
                            ]
                        }
                    ]
                },
                stackedBarOptions: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:
                            {
                                type: 'shadow'
                            },
                        backgroundColor: 'rgba(50,50,50,0.9)',
                    },
                    legend: {
                        textStyle: {
                            color: 'white',
                        }
                    },
                    color: ['#cc9dd1', '#9cebaf', '#41eff7'],
                    // legend: {
                    //     y: "bottom",
                    //     data: [{name: 'Territory Sales', icon: 'circle'}, {
                    //         name: 'Remaining Nation Sales',
                    //         icon: 'circle'
                    //     }]
                    // },
                    grid:
                        {
                            bottom: '3%',
                            left: '15%',
                            top: '18%',
                            right: '5%',
                            show: true
                        },
                    calculable: true,
                    xAxis:
                        {
                            type: 'value',
                            position: 'top',
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                formatter: function (value, index) {
                                    return '$' + value;
                                },
                                color: 'white'
                            }
                        },
                    yAxis: [
                        {
                            type: 'category',
                            data: ['Alex Morrow', 'Joanna Carter', 'Jimmy Joanna', 'Mack Hales'],
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                fontSize: 12,
                                color: 'white'
                            }
                        }
                    ],
                    series:
                        [{
                            name: 'Qualification',
                            type: 'bar',
                            stack: 'A',
                            data: [300, 350, 400, 500]
                        }, {
                            name: 'Discovery',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 180, 250, 300]
                        }, {
                            name: 'Quote',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 120, 200, 220]
                        }]
                },
                filter: '',
                mode: 'list',
                columns: [
                    {name: 'activity_id', align: 'left', label: 'Activity ID', field: 'activity_id', sortable: true},
                    {
                        name: 'desc',
                        required: true,
                        label: 'Activity Name',
                        align: 'left',
                        field: row => row.name,
                        sortable: true
                    },
                    {name: 'regarding', align: 'left', label: 'Regarding', field: 'regarding', sortable: true},
                    {name: 'owner', align: 'left', label: 'Owner', field: 'owner', sortable: true},
                    {name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true},
                    {
                        name: 'creation_date',
                        align: 'left',
                        label: 'Creation Date',
                        field: 'creation_date',
                        sortable: true
                    }
                ],
                data: [
                    {
                        activity_id: "C001",
                        name: 'Advanced communications',
                        regarding: 'Presentation',
                        owner: 'John',
                        status: 'Pending',
                        creation_date: '12-09-2019'
                    },
                    {
                        activity_id: "C002",
                        name: 'New drug discussion',
                        regarding: 'Meeting',
                        owner: 'John',
                        status: 'Completed',
                        creation_date: '09-02-2019'
                    },
                    {
                        activity_id: "C003",
                        name: 'Universal services discussion',
                        regarding: 'Meeting',
                        owner: 'John',
                        status: 'Completed',
                        creation_date: '03-25-2019'
                    },
                    {
                        activity_id: "C004",
                        name: 'Add on business',
                        regarding: 'Business',
                        owner: 'John',
                        status: 'Pending',
                        creation_date: '03-18-2019'
                    },
                    {
                        activity_id: "C005",
                        name: 'Promotional Activity',
                        regarding: 'Personal',
                        owner: 'John',
                        status: 'Completed',
                        creation_date: '04-09-2019'
                    },
                ],
                pagination: {
                    rowsPerPage: 10
                }
            }
        },
        computed: {
            getBarChartOptions() {
                let dataAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];
                let market_share_data = [220, 120, 199, 234, 200, 330];
                let growth_data = [180, 182, 120, 290, 290, 320];
                return {
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: false,
                            color: 'white'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'grey'
                            },
                            show: false
                        },
                        z: 10
                    },
                    tooltip: {},
                    legend: {
                        show: true,
                        textStyle: {
                            color: 'white',
                        }
                    },
                    grid: {
                        bottom: '9%',
                        left: '9%',
                        top: '10%',
                        right: '5%',
                        show: true
                    },
                    yAxis: {
                        axisLine: {
                            lineStyle: {
                                color: 'grey'
                            },
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: 'white'
                        }
                    },
                    series: [
                        {
                            name: 'Market Share',
                            type: 'bar',
                            barGap: '15%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#f6c7a3'},
                                            {offset: 0.5, color: '#f6ac71'},
                                            {offset: 1, color: '#f6ac71'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#f6ac71'},
                                            {offset: 0.7, color: '#f6ac71'},
                                            {offset: 1, color: '#f6c7a3'}
                                        ]
                                    )
                                }
                            },
                            data: market_share_data
                        },
                        {
                            name: 'Growth',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#b08eb3'},
                                            {offset: 0.5, color: '#a773b3'},
                                            {offset: 1, color: '#ad6bb3'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#ad6bb3'},
                                            {offset: 0.7, color: '#a773b3'},
                                            {offset: 1, color: '#b08eb3'}
                                        ]
                                    )
                                }
                            },
                            data: growth_data
                        }
                    ]
                }
            }
        },
        methods: {
            SaveImage(type) {
                const linkSource = this.$refs[type].getDataURL();
                const downloadLink = document.createElement('a');
                document.body.appendChild(downloadLink);
                downloadLink.href = linkSource;
                downloadLink.target = '_self';
                downloadLink.download = type + '.png';
                downloadLink.click();
            },
            exportTable() {
                // naive encoding to csv format
                const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
                    this.data.map(row => this.columns.map(col => wrapCsvValue(
                        typeof col.field === 'function'
                            ? col.field(row)
                            : row[col.field === void 0 ? col.name : col.field],
                        col.format
                    )).join(','))
                ).join('\r\n')
                const status = exportFile(
                    'activity.csv',
                    content,
                    'text/csv'
                )
                if (status !== true) {
                    this.$q.notify({
                        message: 'Browser denied file download...',
                        color: 'negative',
                        icon: 'warning'
                    })
                }
            }
        }
    }
</script>

<style scoped>
  .box_1 {
    color: #0dceec;
  }
  .box_2 {
    color: #fe434f;
  }
  .box_3 {
    color: #15ca20;
  }
  .box_4 {
    color: #ff9700;
  }
  .theme_color {
    background-color: #343a40 !important
  }
  .shadow {
    -webkit-box-shadow: 0 3px 20px rgba(34, 48, 53, 0.81) !important;
    box-shadow: 0 3px 20px rgba(34, 48, 53, 0.81) !important;
    border: none !important;
  }
  .progress-base {
    height: 8px;
    border-radius: 3px;
    background-color: #e9ecef;
  }
  .progress-bar-1 {
    height: 8px;
    border-radius: 3px;
    background: #17ead9;
    background: -webkit-linear-gradient(45deg, #17ead9, #6078ea) !important;
    background: linear-gradient(45deg, #17ead9, #6078ea) !important;
  }
  .progress-bar-2 {
    height: 8px;
    border-radius: 3px;
    background: #f54ea2;
    background: -webkit-linear-gradient(45deg, #f54ea2, #ff7676) !important;
    background: linear-gradient(45deg, #f54ea2, #ff7676) !important;
  }
  .progress-bar-3 {
    height: 8px;
    border-radius: 3px;
    background: #42e695;
    background: -webkit-linear-gradient(45deg, #42e695, #3bb2b8) !important;
    background: linear-gradient(45deg, #42e695, #3bb2b8) !important;
  }
  .progress-bar-4 {
    height: 8px;
    border-radius: 3px;
    background: #ffdf40;
    background: -webkit-linear-gradient(45deg, #ffdf40, #ff8359) !important;
    background: linear-gradient(45deg, #ffdf40, #ff8359) !important;
  }
  .border-top {
    border-top: 1px solid #efefef;
  }
  .chip_pending {
    background: #ffdf40;
    background: -webkit-linear-gradient(45deg, #ffdf40, #ff8359) !important;
    background: linear-gradient(45deg, #ffdf40, #ff8359) !important;
  }
  .chip_completed {
    background: #42e695;
    background: -webkit-linear-gradient(45deg, #42e695, #3bb2b8) !important;
    background: linear-gradient(45deg, #42e695, #3bb2b8) !important;
  }
</style>
