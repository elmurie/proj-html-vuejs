<template>
    <section class="blog">
        <div class="text text-center">
            <h3 class="handwriting">Articles and Tips</h3>
            <h2>Latest From The Blog</h2>
        </div>
        <div class="post-area container">
            <ul class="row">
                <li class="col-4" v-for="(post, i) in postInfo" :key="i"><BlogCard :info="post"/></li>
            </ul>
        </div>
    </section>
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
            ]
        } 
    }
}
</script>

<style lang="scss" scoped>
    .blog {
        background-color: #F5F7FA;
    }

</style>