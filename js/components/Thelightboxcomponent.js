export default {
    name: 'TheLightboxComponent',

    props: ['hero'],

    template: `
    <section class="lightbox">
    <article>
    <h2 class="lb_heading">{{ hero.name }}</h2>
    <h2 class="feature">What You will Get?</h2>
   
        
          
        <div class="container">
            <div class="object1">
                <h2 class="feature_name">{{ hero.feature_name1 }}</h2>
                    <p class="featureinfo1">{{ hero.feature1}}</p>   
            </div>

            <div class="object2">    
            <h2 class="feature_name2">{{ hero.feature_name2 }}</h2>
                <p class="featureinfo2">{{ hero.feature2}}</p>
            </div>
           
        </div>
        <img class="lightboximg" :src='"images/" + hero.image2' :alt="'prof.name'">
    </article>
</section>
    `
        // methods: {
        //     closeLB() {
        //         // debugger;
        //         this.$emit('closelb');
        //     }
        // }
}