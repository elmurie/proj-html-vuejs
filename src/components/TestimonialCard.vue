<template>
    <div class="box">
        <div class="text">
            <h5>{{testimonialsInfo.title}}</h5>
            <p>{{testimonialsInfo.description}}</p>
        </div>
        <div class="user-data d-flex">
            <div class="user-data-img ">
                <img class="circle-img w-100" :src="require(`../assets/img/artist-testimonial-avatar-0${testimonialsInfo.avatar}.jpg`)" :alt="testimonialsInfo.name">
            </div>
            <div class="user-data-info">
                <div class="user-data-name">
                    <h6>{{testimonialsInfo.name}}</h6>
                </div>
                <div class="user-data-role">
                    <h6>/ {{testimonialsInfo.role}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TestimonialCard',
    props : {
        testimonialsInfo : Object
    }

}
</script>

<style lang="scss" scoped>
    .box {
        margin: 0 auto;
        width: 80%;
        background-color: #fff;
        padding: 2.25rem 2.5rem;
        border-radius: .625rem;


        .user-data-img {
            width: 15%;
            margin-right: 2em;

            .circle-img{
                border-radius : 50%;
            }
        }
        .user-data-role {
            color : #b4b4b4;
        }
        
    }

</style>