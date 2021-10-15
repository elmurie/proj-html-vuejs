<template>
    <kinesis-container>
        <section>
            <div class="mission container">
                <div class="row">
                    <div class="col-6 text-center">
                        <kinesis-element class="quoteIcon" :strength="30">
                            <img :src="quoteIcon" alt="Quote Icon" class="quoteIcon mb-4">
                        </kinesis-element>
                        <h2>I coach and mentor visual artists, like you, to Create Like You Mean It</h2>
                        <h3 class="handwriting">Martin Garrix</h3>
                    </div>
                    <div class="col-6">
                        <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get back on track to being the productive, creative, meaningful and authentic artist you truly want to be. I support artists in crafting and living a creative life as well as feeling good about themselves and their art.<br><br>
                        As an artist and educator for nearly 30 years, I understand what it takes to create.</p>
                        <button class="btn large light-button">Get started today</button>
                    </div>
                </div>
            </div>
        </section>
    </kinesis-container>
</template>

<script>
export default {
    name : "Mission",
    data() {
        return {
            quoteIcon : require('../assets/img/artist-quote-icon.png')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    section {
            height: 50vh;
            .col-6 h2 {
                width: 50%;
                margin: 0 auto;
                line-height: 2.9375rem;
            }
            .col-6 p {
                margin-top: 3.625rem;
                margin-bottom: 1.8rem;
            }
            .quoteIcon {
                margin-bottom : .4375rem;
            }
    }

</style>