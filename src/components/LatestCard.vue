<template>
    <section class="course-card">
        <div class="course-img zoom">
            <img class="w-100" :src="require(`../assets/img/artist-course-0${info.img}-480x480.jpg`)" alt="info.name">
        </div>
        <div class="course-text d-flex flex-column">
            <h5>${{info.price}}</h5>
            <h3>{{info.name}}</h3>
            <ul class="icons d-flex">
                <li class="availability mx-1"><font-awesome-icon class="icon" :icon="['far', 'file-alt']"/>{{info.lessons}} Lessons</li>
                <li class="availability mx-1"><font-awesome-icon class="icon" :icon="['far', 'user']"/>{{info.students}} Students</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name : 'LatestCard',
    props : {
        info : Object
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    .course-text {
        background-color: transparent;
        max-width: calc(100% - 1.875rem);
        padding: 1.5rem 1.5625rem 1.75rem;
        transition: all 1s ease;

        &:hover {
            cursor: pointer;
            background-color: $mainBGC;
            box-shadow: inset 0rem 0rem 0rem .1875rem $mainAccentColor;
            transform: translateY(-30%);
        }

        h3 {
            font-size: 1.1875rem;
            line-height: 1.5
        }
        h5 {
            color : $mainAccentColor;
            font-size: 1.0625rem;
            font-weight: 600;
        }

        .icons {
            .availability {
                font-size: .9em;
                color : $smallerTextColor;
            }
            .icon {
            margin-right: .3em;
            }
        }
    }

</style>