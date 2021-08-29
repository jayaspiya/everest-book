;<template>
<h2>View</h2>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
  <h3>{{title}}</h3>
  {{author}}
  <book-mockup :backCover="backCover" :frontCover="frontCover" :sideCover="sideCover"/>
</div>
</template>
<script>
import api from "../utils/api.js"
import Toast from '../utils/Toast.js'
import BookMockup from "../components/BookMockup.vue"
export default {
    components:{
        BookMockup
    },
    data(){
        return{
            title: "",
            author:"",
            isbn: "",
            synopsis: "",
            price: 0,
            releasedYear: 2000,
            tags: [],
            frontCover:"",
            sideCover:"",
            backCover:"",
            isloading : true
        }
    },
    async mounted(){
        const res = await api.get("book/view/"+ this.$route.params.id)
        if(res.data.success){
            const data = res.data.data[0]
            this.title = data.title
            this.author = data.author
            this.isbn = data.isbn
            this.synopsis = data.synopsis
            this.price = data.price
            this.releasedYear = data.releasedYear
            this.tags = data.tags
            this.frontCover = data.cover.front
            this.sideCover = data.cover.side
            this.backCover = data.cover.back
            this.isloading = false
        }
        else{
            Toast("Invalid Result").show()
        }
    }
}
</script>
