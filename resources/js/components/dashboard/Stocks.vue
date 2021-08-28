<template lang="html">
  <div>

    <div class="m-4">
          <!-- <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              @input="handleSearch"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" class="bg-primary" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group> -->




        <b-table striped hover  id="my-table"
        :per-page="perPage"
        :current-page="currentPage"
        :items="items" :fields="fields"
        :busy.sync="isBusy"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        >


         <template #cell(t)="data">
             {{ data.value }}
          </template>

          <template #cell(Favorite)="data">
              <div v-if="!favorites.includes(data.item.T)" class="text-primary underline hover:cursor-pointer" @click="addToFavorites(data)">
                Add to Favorites
              </div>
              <div v-else class="text-primary underline hover:cursor-pointer">
                Added!
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
        'Favorite'
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
    this.getStocks();
  },
  methods:{
    getStocks()
    {
      this.$vs.loading();
      axios.post('api/getStocks').then(response => {
        this.items = response.data.results;
        this.isBusy = false;
        this.$vs.loading.close();
        })
      axios.get('api/getFavorites').then(response => {
        response.data = response.data.filter(x => x.type == 'stocks');
        response.data.forEach(element => {
            this.favorites.push(element.code)
        })       
       this.$vs.loading.close();
      })


    },
    addToFavorites(row)
    {
      axios.post('api/addToFavorites',{stock: row.item, type: 'stocks'}).then(response => {
        if (response.data)
        {
          this.$vs.notify({title:'Success',text:'The stock has been added to your favorites!',color:'success'})   
          
          this.getStocks();
        }
      })
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
