<template>
    <main>
        <Hero/>
        <Services/>
        <Mission/>
        <Testimonials/>
        <Latest/>
        <Blog/>
        <Upcoming/>
        <Newsletter/>
    </main>
</template>

<script>
import Hero from './Hero.vue';
import Services from './Services.vue';
import Mission from './Mission.vue';
import Testimonials from './Testimonials.vue';
import Latest from './Latest.vue';
import Blog from './Blog.vue';
import Upcoming from './Upcoming.vue';
import Newsletter from './Newsletter.vue';




export default {
    name : "Main",
    components : {
        Hero,
        Services,
        Mission,
        Testimonials,
        Blog,
        Latest,
        Upcoming,
        Newsletter
    }
}
</script>

<style lang="scss" scoped>

</style>