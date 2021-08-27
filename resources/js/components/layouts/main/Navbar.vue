<template>
 <div>
  <b-navbar class="navbar navbar-dark bg-primary borders" align="center">
    <b-navbar-nav>
      <b-nav-item style="position:relative; left:50px;" href="/">
      Stocks & Cryptocurrency
      </b-nav-item>

      <!-- <vs-row style="position:relative; left:500px;" class=""> -->
        <b-nav-item href="/" style="position:relative; left:400px;">Stocks</b-nav-item>
        <b-nav-item href="favorite_stocks" style="position:relative; left:500px;">Favorite Stocks</b-nav-item>
        <b-nav-item href="/cryptocurrency" style="position:relative; left:600px;">Cryptocurrency</b-nav-item>
        <b-nav-item href="favorite_cryptocurrency" style="position:relative; left:700px;">Favorite Cryptocurrency</b-nav-item>
      <!-- </vs-row> -->


       <b-nav-item-dropdown style="position:relative; left:1100px;">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{user}}</em>
          </template>
          <b-dropdown-item href="user_profile">Profile</b-dropdown-item>
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
     if (window.sessionStorage)
        return window.sessionStorage.user
      else
        return ''
   }
 },
 methods:{
    logout(){
      window.sessionStorage.removeItem("logged");
      window.sessionStorage.removeItem("user");
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