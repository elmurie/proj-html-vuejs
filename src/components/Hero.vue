<template>
    <kinesis-container>
        <section class="hero d-flex justify-content-center align-items-center">
            <div class="text text-center">
                <h3 class="handwriting">Hello, Im Martin</h3>
                <h1>Artist Coaching And Mentoring Might Be for You.</h1>
                <button class="btn large dark-button">Get started today</button>
            </div>
            <img :src="bgShapeLeft" alt="Shape Left" class="bgShapeLeft">
            <img :src="bgShapeRight" alt="Shape Right" class="bgShapeRight">
            <img :src="blueStain" alt="Blue Stain" class="blueStain">
            <img :src="yellowStain" alt="Yellow Stain" class="yellowStain">
            <img :src="dots" alt="Dots" class="dots">
            <img :src="leaf" alt="Leaf" class="leaf">
            <img :src="brushStroke" alt="Brush Stroke" class="brushStroke">
            <img :src="headOutline" alt="Head Outline" class="headOutline">
            <img :src="diamondDots" alt="Diamond Dots" class="diamondDots">
            <kinesis-element :strength="-70" class="painting">
                <img :src="painting" alt="Painting" class="painting">
            </kinesis-element>
            <kinesis-element :strength="70" class="headShot">
                <img :src="headShot" alt="Head Shot" class="headShot">
            </kinesis-element>
            <kinesis-element class="spaceMonkey" :strength="150">
                <img :src="spaceMonkey" alt="Space Monkey" class="spaceMonkey">
            </kinesis-element>
            <ul class="icons d-flex flex-column align-items-center">
                <li><font-awesome-icon :icon="['fas', 'ruler-combined']"/></li>
                <li><font-awesome-icon :icon="['far', 'life-ring']"/></li>
                <li><font-awesome-icon :icon="['fas', 'book']"/></li>
                <li><font-awesome-icon :icon="['fas', 'shopping-cart']"/></li>
            </ul>
        </section>
    </kinesis-container>
</template>

<script>
export default {
    name : "Hero",
    data() {
        return {
            bgShapeRight : require('../assets/img/artist-shape-01-600x577.png'),
            bgShapeLeft : require('../assets/img/artist-shape-02-600x324.png'),
            blueStain : require('../assets/img/blueStain.png'),
            yellowStain : require('../assets/img/yellowStain.png'),
            dots : require('../assets/img/artist-shape-03.png'),
            leaf : require('../assets/img/artist-shape-04-127x300.png'),
            brushStroke : require('../assets/img/artist-shape-05-300x198.png'), 
            headOutline : require('../assets/img/artist-hero-image-03-204x300.png'),
            headShot : require('../assets/img/artist-hero-image-04.jpg'),
            diamondDots : require('../assets/img/maxcoach-shape-12.png'),
            painting : require('../assets/img/artist-hero-image-02.jpg'), 
            spaceMonkey : require('../assets/img/artist-hero-image-01.jpg'),
        }
    }
}
</script>

<style lang="scss" scoped>
    .hero {
        background-color: #faf4ee;
        height: calc(100vh - 7.04125rem) ;
        position: relative;
        .text {
            z-index: 5;
            width: 45%;
            h1 {
                font-size: 2.9375rem;
            }
        }
        .bgShapeLeft,
        .bgShapeRight,
        .blueStain,
        .yellowStain,
        .dots,
        .leaf,
        .brushStroke,
        .headOutline,
        .headShot,
        .diamondDots,
        .painting,
        .spaceMonkey {
            position: absolute;
        }
        .bgShapeLeft,
        .bgShapeRight {
            top: 0;
        }

        .bgShapeLeft,
        .dots {
            left: 0;
        }
        .bgShapeRight {
            height: 90%;
            right: 5%;
        }
        .blueStain {
            left: -3.2%;
            bottom: 15%;
        }
        .yellowStain {
            width: 13%;
            right: 17%;
            bottom: 16%;
        }
        .dots {
            top: 15%;
        }
        .leaf {
            top: 10%;
            right: 5%;
        }
        .brushStroke {
            right: 5%;
            bottom: 12%;
        }
        .headOutline {
            bottom: 6%;
            left: 26%;
        }
        .headShot {
            width: 40%;
            bottom: 15%;
            right: 8%;
            z-index: 5;
        }
        .diamondDots {
            bottom: 12%;
            right: 19%;

        }
        .painting {
            top: 8%;
            left: 12%;
            z-index: 4;
        }
        .spaceMonkey {
            top: 50%;
            left: 7%;
            z-index: 5;
        }
        .icons {
            position: fixed;
            z-index: 10;
            background-color: #fff;
            right: 0;
            top: 5%;
            padding : .3125rem;
            box-shadow: -0.25rem .25rem .9375rem .1875rem hsla(0, 0%, 0%, 0.308);

            & li {
                margin : .4em 0;
            }
        }
        .spaceMonkey,
        .painting,
        .headShot {
            box-shadow: -0.0625rem .4375rem 1rem -0.125rem #707070;
        }
    }

</style>