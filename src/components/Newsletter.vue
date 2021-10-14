<template>
    <section class="newsletter d-flex">
        <div class="wrapper d-flex justify-content-center align-items-center">
            <img :src="left" alt="left" class="left">
            <div class="content d-flex justify-content-center align-items-center">
                <h4 class="text">Newsletter to get in touch</h4>
                <div class="input">
                    <input type="text" placeholder="Your e-mail">
                    <button type="submit">&#x2192;</button>
                </div>
            </div>
            <img :src="right" alt="right" class="right">
        </div>
    </section>
</template>

<script>
export default {
    name : "Newsletter",
    data() {
        return {
            left : require('../assets/img/artist-shape-color-paint-top-left.png'),
            right : require('../assets/img/artist-shape-color-paint-bottom-right.png') 
        }
    }
}
</script>

<style lang="scss" scoped>
    .newsletter {
        margin-top : 3.125rem;
        background-color: #244186;
        .wrapper {
            width: 100%;
            color : #fff;
            img {
                    height: 100%;
                }
            .content {
                flex-grow: 1;

                .text {
                    font-size: 2.8125rem;
                    font-family: 'Lora', serif;
                    text-align: right;
                }
                
                .input {
                    margin-left: 3.125rem;
                    width: 90%;
                    border-bottom: 1px solid #808080;
                    
                    input {
                        color: #fff;
                        width: 95%;
                        outline: none;
                        background-color: transparent;
                        border : none;
                        
                        padding-bottom: 10px;
                        font-size: 27px;
                        &::placeholder {
                            color:  #fff;
                            opacity: 1;
                        }
                    }
                    [type="submit"] {
                        background-color: transparent;
                        outline: none;
                        border: none;
                        color: #fff;
                        font-size: 1.8125rem;
                    }
                }
            }
            
        }

        
    }
</style>