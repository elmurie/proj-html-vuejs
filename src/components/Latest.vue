<template>
    <kinesis-container>
        <section class="latest-online-courses">
            <h1>Courses</h1>
            <kinesis-element class="bgShapeRight" maxY="100" :strength="150">
                <img class="bgShapeRight" :src="bgShapeRight" alt="Shape">
            </kinesis-element>
            <kinesis-element class="bgShapeLeft" maxY="100" :strength="-150">
                <img class="bgShapeLeft" :src="bgShapeLeft" alt="Shape">
            </kinesis-element>
            <div class="text text-center">
                <h3 class="handwriting">Artist Coaching</h3>
                <h2>Latest Online Courses</h2>
            </div>
            <div class="card-area container">
                <ul class="row">
                    <li class="col-3" v-for="(course, i) in coursesInfo" :key="i">
                        <LatestCard :info="course"/>
                    </li>
                </ul>
                <div class="button-wrapper d-flex">
                    <button class="btn large light-button">View all courses &#x2192;</button>
                </div>
            </div>
        </section>
    </kinesis-container>
</template>

<script>
import LatestCard from './LatestCard.vue'
export default {
    name : "Latest",
    components : {
        LatestCard
    },
    data() {
        return {
            bgShapeRight : require('../assets/img/artist-shape-01-600x577.png'),
            bgShapeLeft : require('../assets/img/blueStain.png'),
            coursesInfo : [
                {
                    name : 'The Acrylic Painting Academy',
                    price : '18.00',
                    lessons : '4',
                    students : '50',
                    img : 8

                },
                {
                    name : 'Drawing and Shading: Complete Course',
                    price : '21.00',
                    lessons : '14',
                    students : '50',
                    img : 7

                },
                {
                    name : 'The Color Theory for Digital Artist',
                    price : '19.00',
                    lessons : '7',
                    students : '50',
                    img : 6

                },
                {
                    name : 'Ultimate Guide to Digital Sketching for Beginner',
                    price : '35.00',
                    lessons : '14',
                    students : '50',
                    img : 5

                },
                {
                    name : 'Portrait Drawing The Smart Way',
                    price : '19.00',
                    lessons : '2',
                    students : '50',
                    img : 4

                },
                {
                    name : 'Mastering Watercolor Painting from Beginner',
                    price : '19.00',
                    lessons : '9',
                    students : '50',
                    img : 3

                },
                {
                    name : 'The Art & Science of Drawing',
                    price : '25.00',
                    lessons : '4',
                    students : '50',
                    img : 2

                },
                {
                    name : 'The Colored Pencil Drawing Course',
                    price : '22.00',
                    lessons : '6',
                    students : '50',
                    img : 1

                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
.latest-online-courses {
    position: relative;
    margin-top: 3.5rem;
    .bgShapeRight,
    .bgShapeLeft,
    h1 {
        position: absolute;
        z-index: -2;
    }
    .bgShapeRight {
        z-index: -1;
        width: 50%;
        top: 8%;
        right: -6%;
        
    }
    .bgShapeLeft {
        left: -3%;
        top: 44%;
        z-index: -10;
        opacity: 0.5;
    }
    h1 {
        top: 40%;
        right: -14%;
        transform: rotateZ(90deg);
        font-family: 'Work Sans', sans-serif;
        font-size: 11.25rem;
        -webkit-text-stroke-width: .25rem;
        -webkit-text-stroke-color: $sideTextColor;
        -webkit-text-fill-color: $mainBGC;
    }
    .card-area {
        margin : 3.125rem auto;
        z-index : 15;
    }
    button {
        margin : 1.875rem auto;
    }
    
}

</style>