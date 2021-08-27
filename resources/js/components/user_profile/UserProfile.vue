<template>
    <div id="slot">
      

    <vs-row class="flex justify-content-center vertical-center h-75">
        <vs-col vs-w="4">
            <vs-card class="h-75" v-if="user">
            <div class="text-left" slot="header">
                <h2 class="font-weight-bolder">
                Hello {{name}}!
                </h2>
            </div>
            <div>
                <vs-row class="flex justify-content-between mb-2">
                    <div style="margin-top:3%; font-size:16px;" class=" font-weight-bold text-capitalize">Change Full name:</div>
                    <vs-input icon-no-border autofocus v-model="user.name" icon-after="true" icon="account_circle"  style="width:65%;"/>
                </vs-row>
                <vs-row class="flex justify-content-between mb-2">
                    <div style="margin-top:3%; font-size:16px;" class=" font-weight-bold text-capitalize">Change Email:</div>
                    <vs-input icon-no-border autofocus v-model="user.email" icon-after="true" icon="email" style="width:65%;"/>
                </vs-row>
                <vs-row class="flex justify-content-between mb-2">
                    <div style="margin-top:3%; font-size:16px;" class=" font-weight-bold text-capitalize">Change Password:</div>
                    <vs-input icon-no-border autofocus v-model="password" :type="type" icon-after="true" v-on:icon-click="handleClick" :icon="icon" style="width:65%;"/>
                </vs-row>

                <vs-row class="flex justify-content-end mb-2">
                    <vs-button type="gradient" @click="saveChanges">Save Changes</vs-button>
                </vs-row>
            </div>
            </vs-card>
        </vs-col>
        </vs-row>



    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            user: null,
            password:'',
            name:'',
            type:'password',
            icon: 'lock',
            show_password: false
        }
    },
    mounted(){
        this.getUser();
        this.name = window.sessionStorage.getItem('user')
    },

    methods:{
        getUser(){
            this.$vs.loading();
            axios.get('api/getUser').then(response => {
                this.user = response.data
                this.$vs.loading.close();
            })
        },
        saveChanges()
        {
            axios.post('api/updateUser', {user: this.user, password: this.password}).then(response => {
                if (response.data.response)
                {
                    window.sessionStorage.setItem('user', response.data.user.name);
                    this.getUser();
                    this.$vs.notify({title:'Success',text:'Refresh the page to see the changes',color:'success'})                }
            })
        },
        handleClick(){
            this.show_password = !this.show_password
            if (this.show_password)
            {
                this.type = 'type'
                this.icon = 'lock'
            }
            else
            {
                this.type = 'password'
                this.icon = 'lock_open'
            }
        }
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
.background-color {
    /* background: rgb(244, 244, 244); */
}

</style>