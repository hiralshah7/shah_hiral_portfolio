// importing my component
import thecarcomponents from './components/thecarcomponent.js';
import LightBox from './components/Thelightboxcomponent.js';

(() => {

    // creating the vue app
    const { createApp } = Vue

    createApp({
        created() {
            // debugger;
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.heroData = data)
                .catch(error => console.error(error));
        },

        data() {
            return {
                heroData: {},
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
            herothumbnail: thecarcomponents,
            Lightbox: LightBox
                // Lightbox: LightBox
        }
    }).mount('#app')

})()