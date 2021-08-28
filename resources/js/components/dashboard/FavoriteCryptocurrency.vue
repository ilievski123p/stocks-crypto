<template lang="html">
  <div>

    <div class="m-4">
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" class="bg-primary" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>

        <b-table striped hover  id="my-table"
        :per-page="perPage"
        :current-page="currentPage"
        :items="items" :fields="fields"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        >


         <template #cell(t)="data">
             {{ data.value }}
          </template>

                   <template #cell(Full_Info)="data">
              <div class="text-primary underline hover:cursor-pointer" @click="openFullInfo(data)">
                Open Full Info
              </div>
          </template>

        </b-table>


        <b-pagination
         v-model="currentPage"
        :total-rows="items.length"
        :per-page="perPage"
        aria-controls="my-table"
        first-number
        last-number
        class="flex justify-content-end"
        />
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import router from 'vue-router'
export default {
  data(){
   return {
      locales:[],
      fields:[
        {
          key: 'T',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'c',
          label: 'Closed Price',
          sortable: true,
        },
        {
          key: 'h',
          label: 'Highest Price',
          sortable: true,
        },
        {
          key: 'l',
          label: 'Lowest Price',
          sortable: true,
        },
        {
          key: 'o',
          label: 'Opened Price',
          sortable: true,
        },
        {
          key: 't',
          label: 'Start of aggregated window',
          formatter: 'dateFormatter',
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        {
          key: 'v',
          label: 'Trading Volume',
          sortable: true,

        },
        'Full_Info'
      ],
      items: [],
      perPage:10,
      currentPage:1,
      isBusy: true,
      favorites:[],
      filter: null,
      filterOn: [],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
    }
  },
  mounted(){
    this.getCrypto();
  },
  methods:{
    getCrypto()
    {
      this.$vs.loading();
      axios.get('api/getFavorites').then(response => {
        response.data = response.data.filter(x => x.type == 'crypto');
        response.data.forEach(element => {
            this.items.push(JSON.parse(element.code_full))
        })
        this.$vs.loading.close();
      })


    },
    openFullInfo(row)
    {
        this.$router.push({name: 'full_info', params: {value: row.item}})
    },
    dateFormatter(value)
    {
      const miliseconds = value
      const dataObject = new Date(miliseconds);
      return dataObject.toLocaleString()
    },
    onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      // handleSearch()
      // {
      //   this.setTimeout(this.filter(),1500)
      // },
      // filter(row)
      // {
      //   if (row.name.contains(this.filter))
      //     return true
      //   else 
      //     return false
      // }
    },
    computed:{
      rows() {
        return this.items.length
      },
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    }   
}
</script>
