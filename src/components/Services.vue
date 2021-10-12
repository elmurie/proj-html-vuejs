<template>
    <section>
        <img :src="bgImg" alt="lines" class="bgImgLines w-100">
        <img :src="bgShape" alt="lines" class="bgShape">
        <img :src="bgCircle" alt="lines" class="bgCircle">
        <img :src="bgSmallShape" alt="lines" class="bgSmallShape">
        <div class="services container d-flex flex-column align-items-center">
        <div class="services-title text-center w-50 mb-2">
            <h3 class="handwriting">Artist coaching</h3>
            <h4 >I understand what it takes to create. I can help you with</h4>
        </div>
        <ul class="services-items row">
            <li v-for="(item, index) in servicesData" :key="index" class="col-3">
                <img :src="item.img" alt="item.what">
                <h5>{{item.what}}</h5>
                <p>{{item.description}}</p>
            </li>
        </ul>
    </div>
    </section>
</template>

<script>
export default {
    name : "Services",
    data() {
        return {
            servicesData : [
                {
                    img : require('../assets/img/artist-box-image-01.png'), 
                    what : 'Online Courses' ,
                    description : 'Online art coaching now offers you a very powerful way to redesign your artist mind.' 
                },
                {
                    img : require('../assets/img/artist-box-image-02.png'),
                    what : 'One to One' ,
                    description : 'Getting the necessary clarity about the current state to help you improve your ability.' 
                },
                {
                    img : require('../assets/img/artist-box-image-03.png'),
                    what : 'Anywhere' ,
                    description : 'Access to valuable and portable program which allows you to setup and live anywhere you want.' 
                },
                {
                    img : require('../assets/img/artist-box-image-04.png'),
                    what : 'On Time' ,
                    description : 'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.' 
                },
            ],
            bgImg : require('../assets/img/maxcoach-shape-03.png'),
            bgShape : require('../assets/img/artist-shape-01-600x577.png'),
            bgCircle : require('../assets/img/maxcoach-shape-13.png'),
            bgSmallShape : require('../assets/img/beigeStain.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    section {
        position: relative;
        .bgImgLines,
        .bgShape,
        .bgCircle,
        .bgSmallShape {
            position: absolute;
        }
        .bgImgLines{
            opacity: .3;
            z-index: -1;
        }
        .bgShape {
            transform: rotate(210deg);
            top: 10%;
            left: -10%;
        }
        .bgCircle {
            top: 38%;
            right: -4%;
        }
        .bgSmallShape {
            width: 15%;
            top: 31%;
            right: 15%;
            opacity: .3;
            z-index: -1;
        }
        .services {
            padding: 1.25rem;
            height: 50vh;
            &-title h4{
                font-size: 2.1875rem;
                font-weight: 600;
            }
            &-items li p {
                font-size: .8125rem;
                color: #8D807C;
            }
            &-items li:nth-child(even) {
                margin: auto 0 0 0;
            }
        }
    }
</style>