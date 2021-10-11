<template>
    <main>
        <Hero/>
        <Services/>
        <Mission/>
        <Testimonials/>
        <Courses/>
        <Latest/>
        <Upcoming/>
        <Newsletter/>
    </main>
</template>

<script>
import Hero from './Hero.vue';
import Services from './Services.vue';
import Mission from './Mission.vue';
import Testimonials from './Testimonials.vue';
import Courses from './Courses.vue';
import Latest from './Latest.vue';
import Upcoming from './Upcoming.vue';
import Newsletter from './Newsletter.vue';




export default {
    name : "Main",
    components : {
        Hero,
        Services,
        Mission,
        Testimonials,
        Courses,
        Latest,
        Upcoming,
        Newsletter
    }
}
</script>

<style lang="scss" scoped>

</style>