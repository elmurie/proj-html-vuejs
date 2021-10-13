<template>
    <section class="upcoming">
        <h1>Events</h1>
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
            ]

        }
    }

}
</script>

<style lang="scss" scoped>
    .upcoming {
        padding-top : 5rem;
        position: relative;

        h1 {
            position: absolute;
            bottom: 12%;
            left: -11%;
            transform: rotateZ(90deg);
            font-family: 'Work Sans', sans-serif;
            font-size: 11.25rem;
            -webkit-text-stroke-width: 4px;
            -webkit-text-stroke-color: #f5ece4;
            -webkit-text-fill-color: #ffffff;
        }
    }

</style>