<template>
<div class="m-4" v-if="ticker">
<div>
 <vs-row class="vx-row flex justify-content-between mb-4">   
  <b-card header-tag="header" style="width:23%;" class="mr-4" footer-tag="footer">
    <b-card-text>
          <vs-row class="flex justify-content-between">   
            <div class="mr-4" style="font-weight:bold;">Country</div>
            <div>{{ticker.country}}</div>
          </vs-row>
          <vs-row class="flex justify-content-between">   
            <div class="mr-4" style="font-weight:bold;">Industry</div>
            <div>{{ticker.industry}}</div>
          </vs-row>
          <vs-row class="flex justify-content-between">   
            <div class="mr-4" style="font-weight:bold;">Sector</div>
            <div>{{ticker.sector}}</div>
          </vs-row>
          <vs-row class="flex justify-content-between">   
            <div class="mr-4" style="font-weight:bold;">Number of employees:</div>
            <div>{{ticker.employees}}</div>
          </vs-row>
          <hr/>
          <vs-row class="flex justify-content-between">   
            <div class="mr-4" style="font-weight:bold;">Phone</div>
            <div>{{ticker.phone}}</div>
          </vs-row>
          <vs-row class="flex justify-content-between">   
            <div class="mr-4" style="font-weight:bold;">Address</div>
            <div>{{ticker.hq_address}}</div>
          </vs-row>
    </b-card-text>
  </b-card>

    <b-card header-tag="header" style="width:75%;" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">
        <div>{{ticker.name}}</div>
        </h6>
      </template>


    <b-card-text>
      <div class="w-1/2">{{ticker.description}}</div>
      <hr/>
      <div>
          <vs-row class="flex justify-content-start">   
            <div class="mr-4" style="font-weight:bold;">Exchange market:</div>
            <div style="margin-left:5%;">{{ticker.hq_address}}</div>
          </vs-row>
          <vs-row class="flex justify-content-start">   
            <div class="mr-4" style="font-weight:bold;">Symbol:</div>
            <div style="margin-left:10%;">{{ticker.symbol}}</div>
          </vs-row>
          <vs-row class="flex justify-content-start">   
            <div class="mr-4" style="font-weight:bold;">Exchange Symbol:</div>
            <div style="margin-left:4.8%;">{{ticker.exchangeSymbol}}</div>
          </vs-row>        
      </div>
    </b-card-text>
  </b-card>
 </vs-row>
</div>


<div>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="Graph View" active>
        <graph-view  :times="times"/>
    </b-tab>
    <!-- <b-tab title="Table View">
        <table-view :times="times" />
    </b-tab> -->
  </b-tabs>
</div>

<div class="mt-4">
  <b-card
        title="Similar to this:"
        class="mb-4"
    >
    <b-card-text>
        <div class="flex justify-content-start">
          <vs-chip v-for="(item,index) in ticker.similar" color="primary" @click="redirectToClick(item)" :key="index"> {{item}} </vs-chip>
        </div>
    </b-card-text>
  </b-card>  
</div>

</div>
</template>
<script>
import router from 'vue-router'
import GraphView from './full_info/GraphView.vue'
import TableView from './full_info/TableView.vue'
import axios from 'axios'
export default {
    components: {
        GraphView,
        TableView
    },
    data(){
        return{
          ticker: null,
          times: null
        }
    },
    mounted(){
      
      axios.get('https://api.polygon.io/v1/meta/symbols/' + this.$route.params.code + '/company?&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9').then(response => {
        this.ticker = response.data
        }).catch(error => {
          // console.log(error)
          this.$router.push({name: 'not_available'})
        })

        axios.get('https://api.polygon.io/v2/aggs/ticker/'+ this.$route.params.code +'/range/1/day/2021-04-14/2021-08-14?adjusted=true&sort=asc&limit=1000&apiKey=axI0heizc_7p7_9aew40pAGjvQ7tf0H9').then(response =>{
          this.times = response.data
        }).catch(error => {
          console.log(error)
        })    
      },
    methods:{
      redirectToClick(where)
      {
        alert("Hello" + where);
      }
    }
}
</script>