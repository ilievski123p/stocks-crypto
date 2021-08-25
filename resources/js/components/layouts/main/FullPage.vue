<template>
    <div>
        <div>
            <transition :name="routerTransition">
                <router-view :key="$route.path"/>
            </transition>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            routerTransition: 'none'
        }
    }
}
</script>