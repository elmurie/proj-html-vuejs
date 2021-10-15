<template>
  <div id="app">
    <Header :links="headerLinks"/>
    <Main/>
    <Footer :links="footerLinks"/>
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
</style>
