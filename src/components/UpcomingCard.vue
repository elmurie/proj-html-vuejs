<template>
    <div :class="[index > 1 ? 'flex-row-reverse' : '', '']" class="card-event d-flex align-items-center">
        <div class="card-img">
            <img class="h-100" :src="require(`../assets/img/artist-event-0${info.img}-250x300.jpg`)" alt="info.title">
        </div>
        <div class="card-text">
            <span>{{info.date}}</span>
            <h5>{{info.title}}</h5>
            <div class="location d-flex">
                <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']"/>
                <p>{{info.location}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'UpcomingCard',
    props : {
        info : Object,
        index : Number
    }

}
</script>

<style lang="scss" scoped>
    .card-text {
        padding-right: .3125rem; 
        width: 95%;
        span {
            color : #808080;
        }
        h5 {
            margin : .5em 0;
        }

        .location {
            color : #808080;
            font-size: .875rem;
            .icon {
                margin-right : .4em;
            }
        }
    }

    

</style>