<template>
    <kinesis-container>
        <section class="blog">
            <img :src="bgImg" alt="lines" class="bgImgLines w-100">
            <kinesis-element class="diamondDotsGreen" :strength="-150">
                <img :src="diamondDotsGreen" alt="diamondDotsGreen" class="diamondDotsGreen">
            </kinesis-element>
            <kinesis-element class="circle" :strength="150" >
                <img :src="circle" alt="circle" class="circle">
            </kinesis-element>
            <kinesis-element class="blueStain" :strength="150">
                <img :src="blueStain" alt="blueStain" class="blueStain">
            </kinesis-element>
            <div class="text text-center">
                <h3 class="handwriting">Articles and Tips</h3>
                <h2>Latest From The Blog</h2>
            </div>
            <div class="post-area container">
                <ul class="row justify-content-center">
                    <li class="col-4" v-for="(post, i) in postInfo" :key="i"><BlogCard :info="post" :index="i"/></li>
                </ul>
                <div class="link-wrapper d-flex">
                    <a href="#">Get into details now? <span>View all posts &#x2192;</span></a>
                </div>
            </div>
        </section>
    </kinesis-container>
</template>

<script>
import BlogCard from './BlogCard.vue'
export default {
    name : "Blog",
    components : {
        BlogCard
    },
    data() {
        return {
            postInfo : [
                {
                    title : 'Brush Strokes Energize Trees in Paintings',
                    views : '1,142',
                    img : 3
                },
                {
                    title : 'Connection Between Self-Portraits and Identity',
                    views : '1,026',
                    img : 2
                },
                {
                    title : 'Pocket-Sized Notebooks Hold Miniature Paintings',
                    views : '1,033',
                    img : 1
                },
            ],
            blueStain : require('../assets/img/blueStain.png'),
            circle : require('../assets/img/circle_shape.png'),
            diamondDotsGreen : require('../assets/img/maxcoach-shape-05.png'),
            bgImg : require('../assets/img/maxcoach-shape-03.png')
        } 
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    .blog {
        position: relative;
        background-color: $blogBGC;
        padding : 5.625rem 0rem 4.25rem 0rem;
        .bgImgLines,
        .diamondDotsGreen,
        .blueStain,
        .circle {
            position: absolute;
        }
        .bgImgLines {
            z-index: 0;
            top: 26%;
        }
        .diamondDotsGreen {
            z-index: 0;
            top: 23%;
            left: 33%;
        }
        .blueStain {
            width: 33%;
            bottom: 12%;
            right: 24%;
            z-index: 0;
        }
        .circle {
            width: 22%;
            top: 19%;
            left: 14%;
        }
        .post-area {
            margin-top: 5rem;
            ul {
                li:nth-child(1) {
                    margin: 10.125rem 0 0;
                }
                li:nth-child(2) {
                    width : 40%;
                }
                li:nth-child(3) {
                    margin: 3.4375rem 0 0;
                }
                li:nth-child(odd) {
                    width: 20%;
                }
            }
        }
        a {
            z-index: 1;
            font-weight: 600;
            color: $smallerTextColor;
            margin : 5rem auto;
            span {
                color : $mainAccentColor;
            }
        }
    }
</style>