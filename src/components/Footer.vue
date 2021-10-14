<template>
    <footer>
        <div class="wrapper d-flex">
            <div class="left d-flex justify-content-between align-items-start">
                <div class="address">
                    <ul>
                        <li>Address</li>
                        <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                        <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                        <li><a href="mailto:support@maxcoach.com">support@maxcoach.com</a></li>
                    </ul>
                    <div class="icons">
                        <a href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
                        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
                    </div>
                </div>
                <div class="explore">
                    <ul>
                        <li>Explore</li>
                        <li><a href="#">Start here</a></li>
                        <li><a href="#">Success story</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div class="info">
                    <ul>
                        <li>Information</li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Purchase guide</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms of services</a></li>
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
                        <li class="col-4"><img class="w-100" src="../assets/img/footer-1.jpg" alt=""></li>
                        <li class="col-4"><img class="w-100" src="../assets/img/footer-2.jpg" alt=""></li>
                        <li class="col-4"><img class="w-100" src="../assets/img/footer-3.jpg" alt=""></li>
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
    name : "Footer"
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';
    footer {
        padding: 6.3125rem 0 3.125rem 0;

        .left {
            padding: 20px;
            width: 95%;
            li {
                line-height: 2.5rem;

                &:hover {
                    color : $darkButton;
                }
            }
            li:first-child {
                font-weight: 600;
            }

            .address {
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
