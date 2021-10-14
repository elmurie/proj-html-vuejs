<template>
  <div id="app">
    <Header :links="headerLinks"/>
    <Main/>
    <Footer/>
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
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/common.scss';
</style>
