<template>
    <div>
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
    }
}
</script>