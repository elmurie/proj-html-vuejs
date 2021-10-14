<template>
    <footer>
        <div class="wrapper d-flex">
            <div class="left d-flex justify-content-between align-items-start">
                <div class="address">
                    <ul>
                        <li v-for="(addressLink, index) in links.links.address" :key="index">{{addressLink}}</li>
                    </ul>
                    <div class="icons">
                        <a href="#" v-for="(iconLink, index) in links.links.icons" :key="index"><font-awesome-icon :icon="['fab', iconLink]"/></a>
                    </div>
                </div>
                <div class="explore">
                    <ul>
                        <li v-for="(exploreLink, index) in links.links.explore" :key="index"><a href="#">{{exploreLink}}</a></li>
                    </ul>
                </div>
                <div class="info">
                    <ul>
                        <li v-for="(infoLink, index) in links.links.info" :key="index"><a href="#">{{infoLink}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="right d-flex flex-column justify-content-start">
                <div class="top">
                    <span class="ig">Instagram </span>
                    <span class="account">@maxcoach</span>
                </div>
                <div class="bottom container">
                    <ul class="row">
                        <li class="col-4" v-for="(instagram, index) in links.links.igImg" :key="index"><img class="w-100" :src="instagram" alt="IG pic"></li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div class="credits d-flex">
            <span>© 2020 Maxcoach. All Rights Reserved</span>
        </div>
        
    </footer>
</template>

<script>
export default {
    name : "Footer",
    props : ['links']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';
    footer {
        padding: 6.3125rem 0 3.125rem 6.25rem;
        .left {
            padding: 20px;
            width: 95%;
            li {
                line-height: 2.5rem;

                &:hover,
                & a:hover {
                    color : $darkButton;
                }
            }
            li:first-child {
                font-weight: 600;

                &:hover,
                & a:hover {
                    color: #000;
                    cursor: auto;
                }
            }

            .address {
                
                & li:last-child:hover {
                    cursor: pointer;
                }
                .icons {
                    color: #b4b4b4;
                    font-size : 1.5rem;

                    

                    a {
                        margin-right : 1em;
                        &:hover {
                        color: $darkButton;
                        }
                    }
                }
            }
        }
        .right {
            padding: 27px 50px;
            .top {
                padding-bottom: 35px;
                .ig {
                    font-weight: 600;
                    
                }
                .account {
                    color: $darkButton;
                }
            }
            .bottom {
                .col-4 {
                    width: 25.333333%;
                }
                li {
                    padding : 0 15px 0 0;
                }
            }
            img {
                transition: 1s ease;
            }
            img:hover {
                cursor: pointer;
                filter: grayscale(100%);
                -webkit-filter: grayscale(100%);
            }

        }
    }
    .credits {
        span {
            color : #b4b4b4;
            margin: 3.125rem auto;
        }
    }
    

</style>
