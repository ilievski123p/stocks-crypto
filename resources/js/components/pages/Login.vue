<template>
    <div>
        
        <vs-row class="flex justify-content-center vertical-center h-75">
        <vs-col vs-w="4">
            <vs-card class="h-75">
            <div class="text-center" slot="header">
                <h2 class="font-weight-bolder">
                Welcome to  Stocks & Cryptocurrency!
                </h2>
            </div>
            <div>
                <vs-row class="flex justify-content-between mb-2">
                    <div style="margin-top:5%; font-size:16px;" class=" font-weight-bold text-capitalize">Enter your email:</div>
                    <vs-input icon-no-border label-placeholder="Email" autofocus required type="email" v-model="email" icon="account_circle" style="width:65%;"/>
                </vs-row>
                <vs-row class="flex justify-content-between">
                    <div style="margin-top:6%; font-size:16px;" class=" font-weight-bold text-capitalize">Enter your password:</div>
                    <vs-input icon-no-border label-placeholder="Password" required v-model="password" type="password" icon="password" style="width:65%;"/>
                </vs-row>
                <div class="float-right mt-2">
                    <vs-button type="gradient" @click="login" color="primary">Sign in!</vs-button>
                </div>

                <vs-row vs-justify="center">
                    <div class="text-center mt-1">
                        Not a member?
                        <a class="ml-2 font-bold" href="/register">Sign up here!</a>
                    </div>
                </vs-row>
            </div>
            </vs-card>
        </vs-col>
        </vs-row>

    </div>
</template>
<script>
import axios from 'axios'
import router from 'vue-router'
export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        login()
        {
            axios.post('api/login',{email: this.email, password: this.password}).then(response => {
                if (response.data.success)
                {
                    window.localStorage.setItem('logged', this.email)
                    this.$router.push({name: 'stocks'})
                }
                else{
                    this.$vs.notify({title:'Error!',text:'Invalid username or password.',color:'danger',icon:'error'})
                }
            })
        }
    },
    created(){
        if (window.localStorage.getItem('logged'))
            this.$router.push({name: 'stocks'})
    }
}
</script>

<style scoped>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 60%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

</style>