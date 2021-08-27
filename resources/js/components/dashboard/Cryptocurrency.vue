<template lang="html">
  <div>

    <div class="m-4 flex justify-center">
        <b-table striped hover  id="my-table"
        :per-page="perPage"
        :current-page="currentPage"
        :items="items" :fields="fields"
        :busy.sync="isBusy">
        </b-table>
        <b-pagination
         v-model="currentPage"
        :total-rows="items.length"
        :per-page="perPage"
        aria-controls="my-table"
        first-number
        last-number
        style="position:relative; left:40%;"
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
      fields: ['T', 'c', 'h', "l", "o",'t', "v", 'Favorite'],
      items: [],
      perPage:10,
      currentPage:1,
      isBusy: true
    }
  },
  watch:{
    locale(newVal)
    {
      this.getStocks(newVal);
    }
  },
  mounted(){
    this.getStocks(this.locale);
  },
  methods:{
    getStocks(locale)
    {
      this.$vs.loading()
      axios.get('api/getCryptos').then(response => {
        this.items = response.data.results;
        this.isBusy = false;
        this.$vs.loading.close()
      })
    }
  },
  rows() {
    return this.items.length
  }
}
</script>
