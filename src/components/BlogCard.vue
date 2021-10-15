<template>
    <div :class="[index == 1 ? 'big' : '', '']" class="card-blog">
        <div class="card-img zoom">
            <img class="w-100" :src="require(`../assets/img/artist-blog-0${info.img}.jpg`)" alt="info.title">
        </div>
        <div class="card-text">
            <span class="category">ARTIST</span>
            <h3>{{info.title}}</h3>
            <ul class="icons">
                <li class="stats">
                    <font-awesome-icon class="icon" :icon="['far', 'calendar']"/><span>May 15, 2020</span>
                <li class="stats">
                    <font-awesome-icon class="icon" :icon="['far', 'eye']"/><span>{{info.views}} views</span>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name : 'Blogcard',
    props : {
        info : Object,
        index : Number
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    .card-blog {
        position: relative;
        .card-text {
            background-color: $mainBGC;
            padding: 1.625rem 1.25rem 2.1875rem;
            
            h3 {
                font-size: 1rem;
            }
            .category,
            .stats {
                color : $smallerTextColor;
            }
            .category {
                font-size: .9375rem;
            }
            .stats {
                font-size: .875rem;
                .icon {
                    margin-right : .4em;
                }
            }
        }
    }
    .card-blog.big {
        position : relative;
        .card-img {
            background-color: #000;

            & img {
                opacity: .8;
            }
        }
        .card-text {
            color : $alternateTextColor;
            position: absolute;
            bottom : 0;
            background-color: transparent;

            span,
            .stats {
                color : $alternateTextColor;
            }
            h3 {
                font-size: 2.125rem;
            }
        }
    }

</style>