<template>
    <header>
        <div class="header-top d-flex justify-content-center align-items-center"> 
            <p>Starts on SATURDAY! Our biggest event of the year...</p>
            <!-- Pass props to countdown component with desired date -->
            <Countdown :year="2022" :month="11" :date="31" :hour="23" :minute="59" :second="59" :millisecond="0"/>
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
                        <a href="#"><font-awesome-icon :icon="['fab', `${icon}`]"/></a>
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
@import '../assets/style/variables.scss';

    header {
        .header-top{
            color: $headerTopText;
            padding: .3125rem;
            background-color: $headerTopBGC;
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
                
                & li:hover {
                    color: $mainAccentColor;
                    cursor: pointer;
                }
            }
            .icons {
                color: $headerIconsColor;
                font-size: 1.2em;
                & li a:hover {
                    color: $mainAccentColor;
                }
            }
        
        }
    }
    

</style>