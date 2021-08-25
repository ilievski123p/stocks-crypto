<template>

  <Navbar
    class="navbar"
    :logo="logo"
    :links="links"
    :darkBackground="true"
    onHover="slide"
 
    logoTextClass="logo-text"
    logoImgClass="logo-img"
    linkClass="navbar-link"
    dropdownBackgroundColor="rgba(0, 0, 0, 0.4)"
    />
</template>
 
<script>
import Navbar from 'vue-navbar-component'
export default {
  components:{
    Navbar
  },
   data() {
      return {
        logo: {
          // img: require('./assets/logo.png')
        },
        links: [
          {
            name: 'Store',
            click: () => this.$router.push('/store'),
          },
          {
            name: 'Gallery',
            click: () => this.$router.push('/gallery'),
          },
          {
            name: 'About',
            dropdown: [
              {
                name: 'Our story',
                click: () => this.$router.push('/our-story')
              },
              {
                name: 'Contact',
                click: () => this.$router.push('/our-story')
              },
            ]
          },
        ]
      }
    }
    
}
</script>