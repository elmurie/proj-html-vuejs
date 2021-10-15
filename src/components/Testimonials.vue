<template>
    <kinesis-container>
        <section>
            <div class="testimonials container-fluid">
                <div class="testimonials-top d-flex justify-content-center">
                    <img :src="wave" alt="Wave" class="wave">
                    <kinesis-element class="blueStain" :strength="150">
                        <img :src="blueStain" alt="Blue Stain" class="blueStain">
                    </kinesis-element>
                    <kinesis-element class="circle" :strength="150">
                        <img :src="circle" alt="YouTube Icon" class="circle">
                    </kinesis-element>
                    <kinesis-element class="diamondDots" :strength="-150">
                        <img :src="diamondDots" alt="Diamond" class="diamondDots">
                    </kinesis-element>
                    <kinesis-element class="diamondDotsGreen" :strength="-150">
                        <img :src="diamondDotsGreen" alt="Diamond" class="diamondDotsGreen">
                    </kinesis-element>
                    <div class="poster zoom">
                        <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank">
                            <img class="" :src="centerImg" alt="Artist Poster">
                            <img :src="youtube" alt="YouTube Icon" class="iconYT">
                        </a>
                    </div>
                </div>
                <div class="testimonials-bottom">
                    <div class="text text-center">
                        <h3 class="handwriting">Testimonials</h3>
                        <h2>Why do people love me?</h2>
                    </div>
                    <div class="card-area container-fluid">
                        <ul class="row justify-content-center">
                            <!-- Opacity is changed on clicked item by adding bright class-->
                            <li @click="brightness(i)" :class="[i == counter ? 'bright' : '', '']" class="col-4" v-for="(testimony, i) in testimonialsInfo" :key="i"><TestimonialCard :testimonialsInfo="testimony"/></li>
                        </ul>
                        <div class="bullet-wrapper d-flex">
                            <ul class="bullets d-flex">
                            <!-- Opacity is changed on clicked item -->
                                <li @click="brightness(i)" :class="[i == counter ? 'bright' : '', '']" v-for="(testimony, i) in testimonialsInfo" :key="i"><font-awesome-icon :icon="['fas', 'circle']"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </kinesis-container>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
export default {
    name : "Testimonials",
    components : {
        TestimonialCard
    },
    data() {
        return  {
            centerImg : require('../assets/img/artist-video-poster.jpg'),
            youtube : require('../assets/img/icon-youtube-play.png'),
            wave : require('../assets/img/wave.svg'),
            blueStain : require('../assets/img/blueStain.png'),
            circle : require('../assets/img/circle_shape.png'),
            diamondDots : require('../assets/img/maxcoach-shape-12.png'),
            diamondDotsGreen : require('../assets/img/maxcoach-shape-05.png'),
            testimonialsInfo : [
                {
                    name : 'Mina Hollace',
                    role : 'Freelancer',
                    title : 'High level of efficiency and scientific teaching methods',
                    description : 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                    avatar : 4
                },
                {
                    name : 'Madley Pondor',
                    role : 'IT Specialist',
                    title : 'Professional team of specialists and passionate mentors at reach',
                    description : 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    avatar : 1	
                },
                {
                    name : 'Luvic Dubble',
                    role : 'Private Tutor',
                    title : 'The MaxCoach team works really hard to ensure high quality',
                    description : 'I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.',
                    avatar : 3	
                },
                // {
                //     name : 'Florence Themes',
                //     role : 'Multimedia Admin',
                //     title : 'It\'s a choice of quality for people with special needs',
                //     description : 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                //     avatar : 2	
                // },
            ],
            counter : 1
        }
    },
    methods : {
        brightness(index) {
            this.counter = index;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    section {
        .testimonials {
            padding : 0;
            .testimonials-top {
                position: relative;
                .wave,
                .blueStain,
                .circle,
                .diamondDots,
                .diamondDotsGreen {
                    position : absolute;
                }
                .wave {
                    bottom: 0;
                    left: 0;
                    height: 100%;
                }
                .blueStain {
                    width: 35%;
                    top: -7%;
                    left: 12%;
                    z-index: -1;
                }
                .circle {
                    width: 24%;
                    top: 14%;
                    right: 14.5%;
                    z-index: 5;
                }
                .diamondDots {
                    width: 30%;
                    bottom: -9%;
                    right: 15%;
                    z-index: 0;
                }
                .diamondDotsGreen {
                    width: 32%;
                    top: -1%;
                    left: 13%;
                    z-index: 0;
                }
                .poster {
                    position: relative;

                    .iconYT {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
            .testimonials-bottom {
                background-color: $testimonialsBGC;

                .card-area {
                    padding: 3.125rem 1.25rem;

                    .row li,
                    .bullets li {
                        opacity : .2;
                        transition: .7s;

                        &:hover {
                            cursor : pointer;
                            opacity: 1;
                        }

                        &.bright {
                            opacity : 1;
                        }
                    }
                    .bullets {
                        margin: 3.125rem auto;
                        & li {
                            margin: 0 1.25rem;
                            transition: .5s;

                            &:hover {
                                opacity: 1;
                            }
                        }
                    }

                }
            }
            
        }
    }


</style>