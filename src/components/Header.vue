<template>
    <header>
        <div class="top-line d-flex justify-content-center align-items-center"> 
            <p>Starts on SATURDAY! Our biggest event of the year...</p>
            <font-awesome-icon :icon="['far', 'clock']"/>
            <Countdown :year="2021" :month="9" :date="16" :hour="10" :minute="0" :second="0" :millisecond="0"/>
            <button>Get ticket</button>
        </div>
        <!-- <div class="icons">
            <font-awesome-icon :icon="['fab', 'twitter']"/>
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
            <font-awesome-icon :icon="['fab', 'instagram']"/>
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </div> -->
    </header>
</template>

<script>
import Countdown from './Countdown.vue'

export default {
    name : "Header",
    components : {
        Countdown
    }
}
</script>

<style lang="scss" scoped>
    header {
        background-color: #F5F5F5;
        .top-line {
            & p {
            margin: 0;
            } 
        }
    }
    

</style>