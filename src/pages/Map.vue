<template>

  <div class="q-pa-md">
  </br>
</br>
<q-tabs
        v-model="tab"
        inline-label
        class="bg-purple text-white shadow-2"
      >
        <q-tab name="mails" icon="shop" label="Где Купить?" />
        <q-tab name="alarms" icon="alarm" label="Где Покурить" />
      </q-tabs>
<div id="app">
  <yandex-map :coords="coords" @click="onClick">
    <ymap-marker
      marker-id="123"
      :coords="coords"
      :balloon-template="balloonTemplate"
    ></ymap-marker>
  </yandex-map>
</div>
<q-img
  src="../statics/pic/pic.png"
  spinner-color="white"
  style="height: 500px; width: 1240px"
  img-class="my-custom-image"
  class="rounded-borders"
>
  <div class="absolute-bottom text-subtitle1 text-center">
  Где покурить?
  </div>
</q-img>

    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>

        <q-btn color="primary" :disable="loading" label="Добавить заведение" @click="addRow" />
        <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Убрать заведение" @click="removeRow" />
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>
<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  data () {

    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Название',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Адрес', field: 'calories', sortable: true },
        { name: 'fat', label: 'Телефон', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Время работы', field: 'carbs' },
        { name: 'protein', label: 'Рейтинг', field: 'protein' },
        //{ name: 'sodium', label: 'Рейтинг', field: 'sodium' },
      ],
      data: [
        {
          id: 1,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 2,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 3,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 4,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 5,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 6,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 7,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 8,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 9,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        },
        {
          id: 10,
          name:'HookahPlace Лубянка' ,
          calories: 'Россия, Москва, Мясницкая улица, 24/7с1',
          fat: '+7 (917) 250-95-95',
          carbs:'Круглосуточно',
          protein: '4.8⭐️'
        }
      ],
      original: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ],
      placemarks: [
        {
          coords: [54.8, 39.8],
          properties: {}, // define properties here
          options: {}, // define options here
          clusterName: "1",
          callbacks: { click: function() {} }
        }
      ],
      components: { yandexMap, ymapMarker },

    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [ ...this.data.slice(0, index), addRow, ...this.data.slice(index) ]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [ ...this.data.slice(0, index), ...this.data.slice(index + 1) ]
        this.loading = false
      }, 500)
    }
  }
}
</script>
