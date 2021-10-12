<template>
    <section>
        <img :src="wave" alt="Wave" class="wave">
        <img :src="blueStain" alt="Blue Stain" class="blueStain">
        <img :src="circle" alt="YouTube Icon" class="circle">
        <img :src="diamondDots" alt="Diamond" class="diamondDots">
        <img :src="diamondDotsGreen" alt="Diamond" class="diamondDotsGreen">
        <div class="testimonials container-fluid">
            <div class="testimonials-top d-flex justify-content-center">
                <div class="poster">
                    <img :src="centerImg" alt="Artist Poster">
                    <img :src="youtube" alt="YouTube Icon" class="iconYT">
                </div>
            </div>
            <div class="testimonials-bottom">
                <div class="text text-center">
                    <h3 class="handwriting">Testimonials</h3>
                    <h2>Why do people love me?</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : "Testimonials",
    data() {
        return  {
            centerImg : require('../assets/img/artist-video-poster.jpg'),
            youtube : require('../assets/img/icon-youtube-play.png'),
            wave : require('../assets/img/wave.svg'),
            blueStain : require('../assets/img/blueStain.png'),
            circle : require('../assets/img/circle_shape.png'),
            diamondDots : require('../assets/img/maxcoach-shape-12.png'),
            diamondDotsGreen : require('../assets/img/maxcoach-shape-05.png'),
        }
    }
}
</script>

<style lang="scss" scoped>
    section {
        position: relative;

        .wave,
        .blueStain,
        .circle,
        .diamondDots,
        .diamondDotsGreen {
            position : absolute;
        }
        .wave {
            bottom: 15%;
            left: 0;
            height: 80%;
        }
        .blueStain {
            width: 10%;
            top: -5%;
            left: 17%;
            z-index: -1;
        }
        .circle {
            width: 4%;
            top: 19%;
            right: 21.5%;
            z-index: 5;
        }
        .diamondDots {
            width: 10%;
            top: -5%;
            left: 17%;
            z-index: -1;
        }
        .diamondDotsGreen {
            width: 8%;
            bottom: 13%;
            right: 19%;
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
        .testimonials-bottom {
            background-color: #FAF8F6;
        }
    }


</style>