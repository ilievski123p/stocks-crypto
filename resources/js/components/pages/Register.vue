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
                    <div style="margin-top:5%; font-size:16px;" class=" font-weight-bold text-capitalize">Enter your name:</div>
                    <vs-input icon-no-border label-placeholder="Full Name" autofocus required type="text" v-model="name" icon="account_circle" style="width:65%;"/>
                </vs-row>
                <vs-row class="flex justify-content-between mb-2">
                    <div style="margin-top:5%; font-size:16px;" class=" font-weight-bold text-capitalize">Enter your email:</div>
                    <vs-input icon-no-border label-placeholder="Email" autofocus required type="email" v-model="email" icon="alternate_email" style="width:65%;"/>
                </vs-row>
                <vs-row class="flex justify-content-between">
                    <div style="margin-top:5%; font-size:16px;" class=" font-weight-bold text-capitalize">Enter your password:</div>
                    <vs-input icon-no-border label-placeholder="Password" required v-model="password" type="password" icon="password" style="width:65%;"/>
                </vs-row>
                 <vs-row class="flex justify-content-between">
                    <div style="margin-top:5%; font-size:16px;" class=" font-weight-bold text-capitalize">Re-enter your password:</div>
                    <vs-input icon-no-border label-placeholder="Password Confirm" required v-model="password_confirm" type="password" icon="password" style="width:65%;"/>
                </vs-row>
                <vs-row class="mt-2 flex justify-content-end">
                    <vs-button type="gradient" @click="register" color="primary">Sign up!</vs-button>
                </vs-row>

                <vs-row vs-justify="center">
                    <div class="text-center mt-1">
                        Already a member?
                        <a class="ml-2 font-bold" href="/login">Sign in here!</a>
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
            name: '',
            password_confirm:''
        }
    },
    methods:{
        register()
        {
            if (this.password !== this.password_confirm)
            {
                this.$vs.notify({title:'Error!',text:"Passwords don't match.",color:'danger',icon:'error'})
            }
            else
                axios.post('api/register',{email: this.email, password: this.password, name: this.name}).then(response => {
                    if (response.data.success)
                    {
                        window.sessionStorage.setItem('logged', this.email)
                        window.sessionStorage.setItem('user', response.data.user)
                        this.$router.push({name: 'stocks'})
                    }
                    else{
                        this.$vs.notify({title:'Error!',text:'Error has occured! Please try again.',color:'danger',icon:'error'})
                    }
                })
        }
    },
    created(){
        if (window.sessionStorage.getItem('logged'))
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