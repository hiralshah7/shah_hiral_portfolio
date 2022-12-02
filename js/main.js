// importing my component
import theprojectcomponents from './components/theprojectcomponents.js';
import LightBox from './components/Thelightboxcomponent.js';
import { SendMail } from "./components/mailer.js";

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
    }).mount('#app');

    createApp({
        data() {
            return {
                errorFirstname: false,
                errorLastname: false,
                errormail: false,
                errorinput: false,
                successmsg: false,

                form: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    text: ""
                }
            }
        },

        methods: {
            processMailFailure(result) {

                if (this.form.firstname.length > 0) {
                    this.$refs.fname.classList.remove("error");
                    this.errorFirstname = false;
                } else {
                    this.$refs.fname.classList.add("error");
                    this.errorFirstname = true;
                }

                if (this.form.lastname.length > 0) {
                    this.$refs.lname.classList.remove("error");
                    this.errorLastname = false;
                } else {
                    this.$refs.lname.classList.add("error");
                    this.errorLastname = true;
                }

                if (this.form.email.length > 0) {
                    this.$refs.email.classList.remove("error");
                    this.errormail = false;
                } else {
                    this.$refs.email.classList.add("error");
                    this.errormail = true;
                }

                if (this.form.text.length > 0) {
                    this.$refs.message.classList.remove("error");
                    this.errorinput = false;
                } else {
                    this.$refs.message.classList.add("error");
                    this.errorinput = true;
                }

            },

            processMailSuccess(result) {
                this.successmsg = true;
                this.$refs.fname.classList.remove("error");
                this.$refs.lname.classList.remove("error");
                this.$refs.email.classList.remove("error");
                this.$refs.message.classList.remove("error");
                this.errorFirstname = false;
                this.errorLastname = false;
                this.errormail = false;
                this.errorinput = false;
            },

            processMail(event) {
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
            },

        }
    }).mount('#contact')
})();