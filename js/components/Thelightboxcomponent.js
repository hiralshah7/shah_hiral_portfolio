export default {
    name: 'TheLightboxComponent',

    props: ['hero'],

    template: `
    <div class="lightbox">
    <div class="content">
    <div class="closeicon">
    <ion-icon @click="closeLB" name="close-circle-sharp"></ion-icon>
</div>
        <h2 class="name">{{ hero.name }}</h2>
        <div class="content">
            <h3 class="tech">Technology Used:</h3>
            <p>{{ hero.technology_used }}<p>
            <h3 class="description1">Description</h3>
            <p class="desc">{{ hero.Description}}</p>
        </div>
    </div>
</div>
    </div>
  `,
    methods: {
        closeLB() {
            // debugger;
            this.$emit('closelb');
        }
    }
}