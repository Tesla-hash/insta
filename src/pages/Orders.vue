<template>
  <q-page-container>
    <q-page padding>
      <div class="column" style="height: 15px">
        <div class="col"></div>
      </div>
      <div class="q-pa-md">
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Поиск">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle v-model="visibleColumns" val="para" label="Пара" />
          <q-toggle v-model="visibleColumns" val="arrow" label="Направление" />
          <q-toggle v-model="visibleColumns" val="type" label="Тип" />
          <q-toggle v-model="visibleColumns" val="price" label="Цена" />
          <q-toggle v-model="visibleColumns" val="volume" label="Объем" />
          <q-toggle v-model="visibleColumns" val="end_time" label="Cтатус" />
          <q-toggle v-model="visibleColumns" val="average_price" label="Средняя цена(USDT)" />
          <q-toggle v-model="visibleColumns" val="volume_usdt" label="Общая сумма(USDT)" />
        </div>
        <q-select
        v-else
        v-model="visibleColumns"
        multiple
        borderless
        dense
        options-dense
        :display-value="$q.lang.table.columns"
        emit-value
        map-options
        :options="columns"
        option-value="name"
        style="min-width: 150px"
        />
      </br>

      <q-table
      title="Текущие Ордера"
      :data="users"
      :columns="columns"
      row-key="time"
      dark
      :visible-columns="visibleColumns"
      :filter="filter"
      >
      <template v-slot:top-right>
        <q-btn
        color="primary"
        icon-right="archive"
        label="Открыть ордер"
        no-caps
        to = '/create'
        />
      </template>
    </q-table>
  </div>
</q-page>
</q-page-container>
</template>


<script>
import DataService from "../services/DataService";

export default {
  data () {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      title: "",
      filter: '',
      selected: [],
      visibleColumns: [ 'para', 'arrow', 'type', 'price', 'volume', 'end_time', 'average_price', 'volume_usdt'],
      columns: [
        {
          name: 'time',
          required: true,
          label: 'Время',
          align: 'left',
          field: time => new Date(time.createTime * 1000).toISOString().slice(8, 19).replace('T', ' '),
          format: val => `${val}`,
          sortable: true
        },
        //  { name: 'time', label: 'Время', field: 'createTime', sortable: true },
        { name: 'para', label: 'Пара', field: 'symbol', sortable: true },
        { name: 'arrow', label: 'Направление', field: 'side',sortable: true },
        { name: 'type', label: 'Тип', field: 'type',sortable: true },
        { name: 'price', label: 'Цена', field: 'price',sortable: true },
        { name: 'volume', label: 'Объем', field: 'quantity', sortable: true},
        { name: 'end_time', label: 'Статус', field: 'status', sortable: true},
        { name: 'average_price', label: 'Средняя цена(USDT)', field: 'avgPrice', sortable: true},
        { name: 'volume_usdt', label: 'Общая сумма(USDT)', field: 'tradeTotal', sortable: true},
        //{ name: 'operation', label: 'Операция', field: 'operation', sortable: true}

      ],
      //  users : []
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },
    retrieveUsers() {
      DataService.get_user_orders()
      .then(response => {
        this.users = response.data;

        //console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
  },
  mounted() {
    this.retrieveUsers();
  }

}

</script>
