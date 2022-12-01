export default {
    name: 'theprojectcomponents',

    emits: ['loadlb'],

    props: {
        portfolio: Object
    },

    template: `

    <li @click="loadLightboxData">
        <div class="portfolio-content">
            <div class="col">
                <img class="carbody" :src='"image/" + portfolio.images' alt="portfolio image">
                <div class="layer">
                    <h5>{{ portfolio.name}}</h5>
                </div>
            </div>
        </div>
    </li>


`,
    methods: {
        loadLightboxData() {
            this.$emit('loadlb', this.portfolio);
        }
    }

}