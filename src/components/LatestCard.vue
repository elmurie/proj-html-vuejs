<template>
    <section class="course-card">
        <div class="course-img">
            <img class="w-100" :src="require(`../assets/img/artist-course-0${info.img}-480x480.jpg`)" alt="">
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
        h3 {
            font-size: 1.1875rem;
            line-height: 1.5
        }
        h5 {
            color : $darkButton;
            font-size: 17px;
            font-weight: 600;
        }

        .icons {
            .availability {
                font-size: .9em;
            }
            .icon {
            margin-right: .3em;
            }
        }
    }

</style>