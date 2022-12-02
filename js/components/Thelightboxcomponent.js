export default {
    name: 'TheLightboxComponent',

    props: ['portfolio'],

    template: `
    <div class="lightbox">
    <div class="content">
        <div class="closeicon">
      
            <ion-icon @click="closeLB" name="close-circle-sharp"></ion-icon>
            <h2 class="name">{{ portfolio.name }}</h2>
        
        </div>
        <div class="content">
            <h3 class="tech">Technology Used:</h3>
            <p>{{ portfolio.technology_used }}</p>
            <h3 class="description1">Description</h3>
            <p class="desc">{{ portfolio.Description}}</p>
            <!-- how to add below href-->
            <a class="livelink":href="portfolio.live_link" target="_blank">Click Here To See</a>
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