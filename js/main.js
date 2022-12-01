// importing my component
import theprojectcomponents from './components/theprojectcomponents.js';
import LightBox from './components/Thelightboxcomponent.js';

(() => {

    //Toggle menu for the hamburguer menu
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    let menu = document.querySelector('#menu-icons');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    };

    // animation through js library

    const sr = ScrollReveal({
        distance: '45px',
        duration: 2400,
        reset: true
    })

    sr.reveal('.home-text', { delay: 350, origin: 'left' })
    sr.reveal('.home-img', { delay: 350, origin: 'right' })

    sr.reveal('.sub-service,.about,.main,.cta', { delay: 100, origin: 'bottom' })

    // creating the vue app
    const { createApp } = Vue

    // /scripts/json.php

    createApp({
        created() {
            // debugger;
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.portfolioData = data)
                .catch(error => console.error(error));
        },

        data() {
            return {
                portfolioData: {},
                LightboxData: {},
                // we can use the key we want to 
                showLightBox: false
            }
        },
        methods: {
            loadLightBox(item) {
                this.LightboxData = item;
                this.showLightBox = true;
            }
        },

        components: {
            portfoliothumbnail: theprojectcomponents,
            Lightbox: LightBox
                // Lightbox: LightBox
        }
    }).mount('#app')

})()