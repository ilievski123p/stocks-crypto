<template>
    <div id="sl">
        <div>
            <transition :name="routerTransition">
                <div>
                    <navbar/>
                    <router-view class="mt-4" :key="$route.path"/>
                </div>
            </transition>
        </div>

    </div>
</template>
<script>
import Navbar from './Navbar.vue'
export default {
    data(){
        return{
            routerTransition: 'none'
        }
    },
    components:{
        Navbar
    },
    created(){
        if (!window.sessionStorage.getItem('logged'))
            this.$router.push({name: 'login'})
    }
}
</script>
<style scoped>
#sl {
    background: rgb(248, 248, 248);
	width: 100%;
	height: 100vh;
}
</style>