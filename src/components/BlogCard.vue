<template>
    <div class="card-blog">
        <div class="card-img">
            <img class="w-100" :src="require(`../assets/img/artist-blog-0${info.img}.jpg`)" alt="info.title">
        </div>
        <div class="card-text">
            <span class="category">ARTIST</span>
            <h3>{{info.title}}</h3>
            <ul class="icons">
                <li>
                    <font-awesome-icon :icon="['far', 'calendar']"/><span>May 15, 2020</span>
                <li>
                    <font-awesome-icon :icon="['far', 'eye']"/><span>{{info.views}}</span>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name : 'Blogcard',
    props : {
        info : Object
    }
}
</script>

<style lang="scss" scoped>
    .card-blog {
        .card-text {
        padding: 1.625rem 1.25rem 2.1875rem;
            .category {
                font-size: .9375rem;
            }
        }
    }

</style>