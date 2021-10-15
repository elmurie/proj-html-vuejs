<template>
  <div id="app">
    <Header :links="headerLinks"/>
    <Main/>
    <Footer :links="footerLinks"/>
    <!-- Fixed icons to the right -->
    <ul class="icons-fixed d-flex flex-column align-items-center">
        <li><a href="#"><font-awesome-icon :icon="['fas', 'ruler-combined']"/></a></li>
        <li><a href="#"><font-awesome-icon :icon="['far', 'life-ring']"/></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fas', 'book']"/></a></li>
        <li><a href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></a></li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  created(){
    document.title = "MaxCoach"
  },
  data() {
    return {
      headerLinks : {
        links : ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        icons : ['twitter', 'facebook-f', 'instagram', 'linkedin'],
        logoImg : require('./assets/img/dark-logo.png')
      },
      footerLinks : {
        links : {
          address : ['Address', '382 NE 191st St # 87394 Miami, FL 33179-3899', '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)', 'support@maxcoach.com'],
          icons : ['facebook-square', 'twitter', 'instagram', 'linkedin'],
          explore: ['Explore', 'Start here', 'Success story', 'Blog', 'Courses', 'Contact us'],
          info : ['Information', 'Membership', 'Purchase guide', 'Privacy policy', 'Terms of services'],
          igImg : [
              require("./assets/img/footer-1.jpg"), 
              require("./assets/img/footer-2.jpg"), 
              require("./assets/img/footer-3.jpg"), 
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/common.scss';
  #app {
    position : relative;
    .icons-fixed {
            position: fixed;
            z-index: 10;
            background-color: $mainBGC;
            right: 0;
            top: 12.2%;
            padding : .3125rem;
            box-shadow: -0.25rem .25rem .9375rem .1875rem #0000004f;

            & li {
                margin : .4em 0;
            }
        }
  }
</style>
