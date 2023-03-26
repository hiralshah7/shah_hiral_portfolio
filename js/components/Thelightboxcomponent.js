export default {
    name: 'TheLightboxComponent',

    props: ['portfolio'],

    template: `
    <div class="lightbox">
    <div class="content">
        <div class="closeicon">
      
            <ion-icon @click="closeLB" name="close-circle-sharp"></ion-icon>
            <h2 class="name">{{ portfolio.name }}</h2>
            <!-- case study heading -->
            <h3 class="name1">{{ portfolio.casestudy }}</h3>
        
        </div>
        <div class="content">
            <!-- making a case study for each project -->
            <div class="projectOverview">
                <h3 class="role1">Project Overview</h3>
                <p class="desc1">{{ portfolio.project_overview }}</p>
            </div>
        <div class="brief">
            <div class="Rolesrespo">
                <h3 class="role">Role:</h3>
                <p class="desc2">{{ portfolio.role }}</p>
            </div>
            <div class="Rolesrespo">
                <h3 class="role">Process:</h3>
                <p class="desc2">{{ portfolio.process }}</p>
            </div>
        </div>
        <div class="twoImg">
            <img :src="'images/' + portfolio.image" alt="portfolio image">
            <img :src="'images/' + portfolio.image2" alt="portfolio image">
        </div>
            <h3 class="tech">Technology Used:</h3>
            <p>{{ portfolio.technology_used }}</p>
            <h3 class="description1">Conclusion</h3>
            <p class="desc">{{ portfolio.conclusion}}</p>
            <!-- how to add below href-->
            <a class="livelink" :href="portfolio.live_link" target="_blank">Click Here To See</a>
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