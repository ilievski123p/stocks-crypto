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
  export default {
    props:['times'],
    data() {
      return {
      items: [],
      fields:[

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
        }
      ],
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
  moutned(){
    if (this.times)
    {
    this.times.forEach(element => {
      this.items.push({
        "c": element.c,
        "h": element.h,
        "l": element.l,
        "o": element.o,

      })
    }) 

    console.log(this.items)
    }
  },
  methods:{
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