<template>
    <header>
        <div class="header-top d-flex justify-content-center align-items-center"> 
            <p>Starts on SATURDAY! Our biggest event of the year...</p>
            <Countdown :year="2021" :month="9" :date="16" :hour="10" :minute="0" :second="0" :millisecond="0"/>
            <button class="btn small dark-button">Get ticket</button>
        </div>
        <nav class=" header-bottom container d-flex justify-content-between py-4">
            <div class="logo w-25">
                <img class="w-50" :src="links.logoImg" alt="MaxCoach logo">
            </div>
            <div class="links w-50">
                <ul class="d-flex justify-content-center align-items-center ">
                    <li v-for="(link, index) in links.links" :key="index" class="d-flex align-items-center me-3">
                        <div class="text me-1">{{link}}</div>
                        <font-awesome-icon :icon="['fas', 'chevron-down']"/>
                    </li>
                </ul>
            </div>
            <div class="icons w-25 d-flex justify-content-end">
                <ul class="d-flex justify-content-center align-items-center">
                    <li v-for="(icon, index) in links.icons" :key="index" class="d-flex justify-content-center align-items-center mx-3">
                        <font-awesome-icon :icon="['fab', `${icon}`]"/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import Countdown from './Countdown.vue'

export default {
    name : "Header",
    components : {
        Countdown
    },
    props : ['links']
}
</script>

<style lang="scss" scoped>
    header {
        .header-top{
            color: #8D807C;
            padding: 5px;
            background-color: #F5F5F5;
            & .clock {
                width: 8.3125rem;
            }
            & p {
            margin: 0;
            }
        }
        .header-bottom {
            position: sticky;
            top : 0;
            .links {
                & .text {
                    font-weight: 500;
                }
                & svg {
                    font-size: .7em;
                }
            }
            .icons {
                color: #696969;
                font-size: 1.2em;
            }
        
        }
    }
    

</style>