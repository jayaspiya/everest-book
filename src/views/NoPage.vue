;<template>
  <h2>Page not found</h2>
    <div class="center">
        <img :src="randImage">
    </div>
</template>
<script>
export default {
    data(){
        return{
            images:[
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499742/404/nopage19_n65sah.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499741/404/nopage18_ca0eyp.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499741/404/nopage15_lz9o6v.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499741/404/nopage11_ecuvkz.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499741/404/nopage17_heqirf.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499741/404/nopage16_ihpktl.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499739/404/nopage1_f1rcwa.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499740/404/nopage10_y8dkfn.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499740/404/nopage13_vpn4mt.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499740/404/nopage14_bjg6el.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499740/404/nopage12_zuatyh.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499739/404/nopage7_w3cu4n.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499739/404/nopage8_nw9b9x.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499739/404/nopage2_us2wcg.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499739/404/nopage9_pwxug9.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499739/404/nopage4_jkwx9u.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499738/404/nopage5_sza38o.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499738/404/nopage6_qgd3fa.png",
                "https://res.cloudinary.com/zayazzp/image/upload/v1632499738/404/nopage3_dntbm5.png",
            ],
        }
    },
    computed:{
        randImage(){
            return this.images[Math.floor(Math.random() * this.images.length)];
        }
    }
}
</script>
<style scoped>
img{
    height: 70vh;
}
</style>