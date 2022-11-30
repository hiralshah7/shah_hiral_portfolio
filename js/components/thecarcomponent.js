export default {
    name: 'thecarcomponents',

    emits: ['loadlb'],

    props: {
        hero: Object
    },

    template: `

    <li @click="loadLightboxData">
        <div class="portfolio-content">
            <div class="col">
                <img class="carbody" :src='"image/" + hero.images' alt="hero image" width="350">
                <div class="layer">
                    <h5>{{ hero.name}}</h5>
                </div>
            </div>
        </div>
    </li>


`,
    methods: {
        loadLightboxData() {
            this.$emit('loadlb', this.hero);
        }
    }

}