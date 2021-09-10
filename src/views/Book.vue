;<template>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
  <h2>{{title}}</h2>
  <div class="flex">
    <book-mockup :backCover="backCover" :frontCover="frontCover" :sideCover="sideCover"/>
    <div>
        <div class="detail">
            <h4>Author: </h4>
            <p>{{author}}</p>
        </div>
        <div class="detail">
            <h4>Tags: </h4>
            <ul class="flex">
                <li v-for="(tag, index) in tags" :key="index" class="tag">
                    <span>{{tag}}</span>
                </li>
            </ul>
        </div>
        <div class="detail">
            <h4>ISBN: </h4>
            <p>{{isbn}}</p>
        </div>
        <div class="detail">
            <h4>Release Year: </h4>
            <p>{{releasedYear}}</p>
        </div>
        <div class="detail">
            <h4>Price: </h4>
            <p>Rs.{{price}}</p>
        </div>
        <h4>Synopsis</h4>
        <p>
        {{synopsis}}
        </p>

        </div>
      </div>
    <h2>Reviews</h2>
    <base-card>
        <ReviewForm/>
    </base-card>
    <the-review v-for="review in reviews" :id="review._id" :description="review.description" :user="review.user" :rating="review.rating" :key="review._id"></the-review>
</div>
</template>
<script>
import api from "../utils/api.js"
import Toast from '../utils/Toast.js'
import BookMockup from "../components/BookMockup.vue"
import TheReview from "../components/TheReview.vue"
import ReviewForm from "../components/ReviewForm.vue"
export default {
    components:{
        BookMockup,
        TheReview,
        ReviewForm
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
            reviews: [],
            isloading : true
        }
    },
    async mounted(){
        const res = await api.get("book/view/"+ this.$route.params.id)
        if(res.data.success){
            const book = res.data.data[0]
            this.title = book.title
            this.author = book.author
            this.isbn = book.isbn
            this.synopsis = book.synopsis
            this.price = book.price
            this.releasedYear = book.releasedYear
            this.tags = book.tags
            this.frontCover = book.cover.front
            this.sideCover = book.cover.side
            this.backCover = book.cover.back
            this.reviews = book.reviews
            this.isloading = false
        }
        else{
            Toast("Invalid Result").show()
        }
    }
}
</script>

<style scoped>
.flex > div{
    max-width: 60%;
}
.detail{
    display: flex;
}
.detail h4{
    margin-right: 10px;
}
.tag{
    list-style: none;
    margin: 0 5px
}
.tag:not(:last-child)::after{
    content: ",";
}
@media only screen and (max-width: 768px) {
  .flex{
      flex-direction: column;
  }
  .flex > div{
    max-width: 100%;
}
}
</style>
