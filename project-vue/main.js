Vue.component('site-header', {
    template: `<header class="header">
    <div class="wrapper header-wrap">
        <div class="header-left">
            <a @click="logoClickHandler" class="link logo-link">
                <img src="img/logo.svg" alt="logo">
            </a>
            <a href="#" class="link search-link">
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0589 17.6249C20.6705 15.8648 21.6275 13.6038 21.769 11.2215C21.9106 8.8392 21.2281 6.48075 19.8362 4.5422C18.4443 2.60365 16.4278 1.20306 14.1252 0.575643C11.8227 -0.0517774 9.37437 0.132183 7.19143 1.09663C5.0085 2.06108 3.22389 3.74727 2.1373 5.87205C1.05071 7.99682 0.728322 10.4308 1.22426 12.7652C1.72021 15.0996 3.00428 17.1922 4.86085 18.6917C6.71741 20.1912 9.0334 21.0063 11.4199 20.9999C13.6723 21.003 15.8638 20.269 17.6599 18.9099L25.4079 26.7169C25.4934 26.806 25.5958 26.8771 25.7091 26.926C25.8225 26.975 25.9444 27.0008 26.0679 27.0019C26.1916 27.0023 26.314 26.9772 26.4276 26.9282C26.5411 26.8792 26.6434 26.8072 26.7279 26.7169C26.9018 26.536 26.999 26.2949 26.999 26.0439C26.999 25.793 26.9018 25.5518 26.7279 25.3709L19.0589 17.6249ZM2.88589 10.4999C2.89873 8.81465 3.41021 7.17089 4.35586 5.77587C5.30151 4.38086 6.63899 3.29703 8.1997 2.66102C9.76042 2.02501 11.4745 1.86529 13.1258 2.202C14.7772 2.53871 16.2919 3.35678 17.479 4.55307C18.6661 5.74935 19.4725 7.27031 19.7965 8.92421C20.1204 10.5781 19.9475 12.2909 19.2995 13.8467C18.6515 15.4024 17.5574 16.7315 16.1551 17.6664C14.7529 18.6013 13.1052 19.1001 11.4199 19.0999C9.14843 19.0891 6.97409 18.1774 5.3741 16.5651C3.77412 14.9527 2.87924 12.7714 2.88589 10.4999Z" fill="#E8E8E8"/>
                </svg>                  
            </a>
        </div>
        <div class="header-right">
            <input class="toogle" type="checkbox" id="toogle">
            <label class="link menu-btn" for="toogle">
                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" fill="#E8E8E8"/>
                </svg>                           
            </label>
            <nav class="nav">
                <div class="nav__overlay">
                    <label class="close-btn" for="toogle">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z" fill="#6F6E6E"/>
                        </svg>         
                    </label>
                    <p class="nav__title">MENU</p>
                    <p class="nav__subtitle">MAN</p>
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#" class="nav__link">Accessories</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Bags</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Denim</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">T-Shirts</a></li>
                    </ul>
                    <p class="nav__subtitle">WOMAN</p>
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#" class="nav__link">Accessories</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Jackets & Coats</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Polos</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">T-Shirts</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Shirts</a></li>
                    </ul>
                    <p class="nav__subtitle">KIDS</p>
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#" class="nav__link">Accessories</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Jackets & Coats</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Polos</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">T-Shirts</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Shirts</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">Bags</a></li>
                    </ul>
                    <div class="nav__mobile-links">
                        <a href="registration.html" class="link account-link-mobile">
                            <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"/>
                            </svg>                
                        </a>
                        <a href="cart.html" class="link cart-link-mobile">
                            <svg width="32" height="29" viewBox="0 0 32 29" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z"/>
                                </svg>
                                
                        </a>
                    </div>
                </div>
            </nav>
            <a href="registration.html" class="link account-link">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" fill="#E8E8E8"/>
                </svg>      
            </a>
            <a @click="CartBtnHandler" class="link cart-link">
                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z" fill="#E8E8E8"/>
                    </svg>
                    <img class="cart-circle" src="img/cart-circle.svg" alt="cart">
                    <span>{{count}}</span>
            </a>
        </div>
    </div>
</header>`,
    methods: {
        CartBtnHandler() {
            this.$emit('go-to', 'cart')
        },
        logoClickHandler() {
            this.$emit('go-to', 'index')

        }
    },
    props: ['count']
})

Vue.component('promo', {
    template: `<section class="promo">
    <div class="wrapper promo-wrap">
        <h1 class="promo-title">
            <span class="promo-title-bold">THE BRAND</span> <br>
            OF LUXERIOUS <span class="promo-title-pink">FASHION</span>  
        </h1>
    </div>
    </section>`
})

Vue.component('categories', {
    template: `<section class="categories center">
    <h2 class="hidden">Product categories</h2>
    <div class="category-item category-women">
        <span class="category-title">
            30% OFF <br> 
        <span class="category-title-pink">FOR WOMEN</span>
        </span>
    </div>
    <div class="category-item category-men">
        <span class="category-title">
            HOT DEAL <br>
            <span class="category-title-pink">FOR MEN</span>
        </span>
    </div>
    <div class="category-item category-kids">
        <span class="category-title">
            NEW ARRIVALS <br>
            <span class="category-title-pink">FOR KIDS</span>
        </span>
    </div>
    <div class="category-item category-accesories">
        <span class="category-title">
            LUXIROUS & TRENDY <br>
            <span class="category-title-pink">ACCESORIES</span>
        </span>
    </div>
    </section>`
})

Vue.component('card', {
    template: `<div class="card" :id=product.id>
    <div class="card__img">
        <img :src="'img/' + product.image" alt="item's image">
            <div class="card__overlay">
                <button @click="addToCartHandler" class="card__btn">
                    <svg width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z" />
                    </svg>
                    <span class="card__btn-text">Add to Cart</span>
                </button>
            </div>
    </div>
    <h3 class="card__title">{{product.product_name}}</h3>
    <p class="text card__text">{{product.product_desc}}</p>
    <span class="card__price">$ {{product.price}}.00</span>

</div>`,
    props: ['product'],
    methods: {
        addToCartHandler() {
            this.$emit('add-to-cart', this.product.id)
        }
    }
})

Vue.component('product-list', {
    template: `<section class="products center">
        <h2 class="products__title">Fetured Items</h2>
        <p class="text">Shop for items based on what we featured in this week</p>
        <div class="products__cards">
      
        <card v-for="product of list" v-bind:product="product" @add-to-cart="addToCartHandler"></card>

        </div>
        <a href="catalog.html" class="products__link">Browse All Product</a>
    </section>`,
    props: ['list'],
    methods: {
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    }
})

Vue.component('index-page', {
    template: `<div>
        <site-header @go-to="goToHandler" v-bind:count="count"></site-header>
        <promo></promo>
        <categories></categories>
        <product-list v-bind:list="list" @add-to-cart="addToCartHandler">
        
        </product-list>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    },
    props: ['list', 'count']
})

Vue.component('cart-page', {
    template: `<div>
    <site-header @go-to="goToHandler"></site-header>
    <h1>Cart</h1>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'index',
        list: [
            {
                "id": 1,
                "image": "item-1.jpg",
                "product_name": "ELLERY X M'O CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 52
            },
            {
                "id": 2,
                "image": "item-2.jpg",
                "product_name": "ELLERY X M'O CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 52
            },
            {
                "id": 3,
                "image": "item-3.jpg",
                "product_name": "ELLERY X M'O CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 52
            },
            {
                "id": 4,
                "image": "item-4.jpg",
                "product_name": "ELLERY X M'O CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 52
            },
            {
                "id": 5,
                "image": "item-5.jpg",
                "product_name": "ELLERY X M'O CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 52
            },
            {
                "id": 6,
                "image": "item-6.jpg",
                "product_name": "ELLERY X M'O CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 52
            }
        ],
        cart: []
    },
    methods: {
        goToHandler(target) {
            this.currentPage = target
        },
        addToCartHandler(id) {
            const product = this.list.find(item => item.id === id);
            this.cart.push(product);
            console.log(this.cart);
        }
    }
})