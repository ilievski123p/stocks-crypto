<template>
 <div>
  <b-navbar class="navbar navbar-dark bg-primary borders" align="center">
    <b-navbar-nav>
      <b-nav-item style="position:relative; left:50px;" href="/">Stocks & Cryptocurrency</b-nav-item>

       <b-nav-item-dropdown style="position:relative; left:1600px;">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{user}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>
export default {
 data(){
   return {
   }
 },
 computed:{
   user(){
     if (window.localStorage)
        return window.localStorage.user
      else
        return ''
   }
 },
 methods:{
    logout(){
      window.localStorage.removeItem("logged");
      window.localStorage.removeItem("user");
      this.$router.push({name: 'login'})
    }
 }
}
</script>
<style scoped>
.borders{
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>