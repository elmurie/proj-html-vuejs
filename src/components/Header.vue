<template>
    <header>
        <div class="top-line d-flex">
            <div>Starts on SATURDAY! Our biggest event of the year</div>
            <Countdown 
                :year="2021"
                :month="9"
                :date="16"
                :hour="10"
                :minute="0"
                :second="0"
                :millisecond="0"
            />
        </div>
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

</style>