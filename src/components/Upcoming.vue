<template>
    <kinesis-container>
        <section class="upcoming">
            <h1>Events</h1>
                <kinesis-element class="beigeStain" :strength="150">
                    <img :src="beigeStain" alt="lines" class="beigeStain">
                </kinesis-element>
                <kinesis-element class="circle" :strength="-150">
                    <img :src="circle" alt="lines" class="circle">
                </kinesis-element>
                <kinesis-element class="bgShapeLeft" :strength="150">
                    <img :src="bgShapeLeft" alt="lines" class="bgShapeLeft">
                </kinesis-element>
            <div class="text text-center">
                <h3 class="handwriting">Upcoming Events</h3>
                <h2>Let's Work Together</h2>
            </div>
            <div class="events-area container">
                <ul class="row justify-content-center">
                    <li class="col-5 my-3" v-for="(event, i) in eventsInfo" :key="i">
                        <UpcomingCard :info="event" :index="i"/>
                    </li>
                </ul>
            </div>
        </section>
    </kinesis-container>
</template>

<script>
import UpcomingCard from './UpcomingCard.vue'
export default {
    name : "Upcoming",
    components :  {
        UpcomingCard
    },
    data() {
        return {

            eventsInfo : [
                {
                    img : '4',
                    date : 'APR 22, 2021',
                    title : 'Storytelling Workshop',
                    location : 'Texas, US'
                },
                {
                    img : '3',
                    date : 'OCT 10, 2020',
                    title : 'Painting Art Contest 2020',
                    location : 'New York, US'
                },
                {
                    img : '2',
                    date : 'NOV 23, 2020',
                    title : 'International Art Fair 2020',
                    location : 'Hamburg, Germany'
                },
                {
                    img : '1',
                    date : 'DEC 15, 2020',
                    title : 'Street Performance : Call for Artist',
                    location : 'Illinois, US'
                },
            ],
            beigeStain : require('../assets/img/beigeStain.png'),
            circle : require('../assets/img/maxcoach-shape-13.png'),
            bgShapeLeft : require('../assets/img/artist-shape-01-600x577.png'),

        }
    }

}
</script>

<style lang="scss" scoped>
    .upcoming {
        .text {
            margin-bottom: 1.875rem;
        }
        padding-top : 5rem;
        position: relative;
        .circle,
        .beigeStain,
        .bgShapeLeft,
        h1 {
            position: absolute;
        }
        h1 {
            bottom: 30%;
            left: -11%;
            transform: rotateZ(90deg);
            font-family: 'Work Sans', sans-serif;
            font-size: 11.25rem;
            -webkit-text-stroke-width: 4px;
            -webkit-text-stroke-color: #f5ece4;
            -webkit-text-fill-color: #ffffff;
            z-index: -2;
        }
        .beigeStain {
            width: 44%;
            top: 11%;
            right: -4%;
            opacity: 0.7;
        }
        .circle {
            width: 32%;
            top: 21%;
            right: 1%;
        }
        .bgShapeLeft {
            bottom : 8%;
            left : -15%;
            z-index: -1;
        }
    }

</style>