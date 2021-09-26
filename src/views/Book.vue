;<template>
  <base-spinner v-if="isloading"></base-spinner>
<div v-else>
    <div class="justify-between">
            <h2>{{title.toUpperCase()}}</h2>
            <div v-if="isAuth">
                <router-link :to="{ name: 'EditBook', params: { id: id }}" v-if="isAdmin">
                    <button>
                        <i class="far fa-edit"></i>Edit Book</button>
                </router-link>
                <div v-else>
                    <h4 v-if="quantity === 0">Out of Stock</h4>
                    <button @click="addItem" :disabled="btnDisabled" v-else >
                        <i class="fas fa-shopping-bag"></i>{{btnText}}
                    </button>
                </div>
            </div>
        </div>
  <div class="flex">
    <book-mockup :backCover="backCover" :frontCover="frontCover" :sideCover="sideCover"/>
    <div>
        <h3>Detail</h3>
        <table>
            <tr>
                <td>Author</td>
                <td>{{author}}</td>
            </tr>
            <tr>
                <td>Tags</td>
                <td>
                <ul class="flex">
                    <li v-for="(tag, index) in tags" :key="index" class="tag">
                        <span>{{tag}}</span>
                    </li>
                </ul>
                </td>
            </tr>
            <tr>
                <td>ISBN </td>
                <td>{{isbn}}</td>
            </tr>
            <tr>
                <td>Release Year</td>
                <td>{{releasedYear}}</td>
            </tr>
             <tr>
                <td>Price</td>
                <td>
                    <p v-if="discount>0">
                    <span class="price">Rs.{{price}}</span>
                    <span class="discount" > Rs.{{(100+discount)*price/100}}</span>
                </p>
                <p v-else>
                    <span class="price">Rs.{{price}}</span>
                </p>
                </td>
            </tr>
        </table>
        <h4>Synopsis</h4>
        <p>
        {{synopsis}}
        </p>
        <div class="justify-between">
            <h3>Reviews</h3>
            <button v-if="isAuth" @click="toggleForm">{{writeReview? "Cancel":"Write Review"}}</button>
        </div>
        <base-card v-if="isAuth && writeReview">
            <ReviewForm @new-review="getBook"/>
        </base-card>
        <div class="review-container" v-if="!writeReview">
            <the-review v-for="review in reviews" :id="review._id" :description="review.description" :user="review.user" :rating="review.rating" :key="review._id" @review-update="getBook"></the-review>
        </div>
        </div>
      </div>
   
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
            id:"",
            title: "",
            author:"",
            isbn: "",
            synopsis: "",
            price: 0,
            discount: 0,
            quantity:0,
            releasedYear: 2000,
            tags: [],
            frontCover:"",
            sideCover:"",
            backCover:"",
            reviews: [],
            isloading : true,
            btnText: "Add to cart",
            btnDisabled: false,
            isAuth: false,
            isAdmin: false,
            writeReview: false
        }
    },
    mounted(){
        this.getBook()
    },
    methods:{
        async addItem(){
            const token = localStorage.getItem("token")
            const url = "/user/addtocart/"+this.id
            this.btnText = "Adding"
            const res = await api.post(url,
                {
                    headers: {
                        'Authorization': `Bearer ${token}` 
                    }
                }
            )
            if(res.data.success){
                this.btnText = "In Cart"
                this.btnDisabled = true
                const toast  = new Toast(res.data.message)
                toast.show()
            }
            else{
                this.btnText = "Add to Cart"
                const toast  = new Toast(res.data.message,"", "danger")
                toast.show()
            }
        },
        toggleForm(){
            this.writeReview = !this.writeReview
        },
        async getBook(){
            const token = localStorage.getItem("token")
        let opts = {}
        if(token){
        opts = {
            headers: {
                'Authorization': "Bearer " + token
            }
        }}
        const res = await api.get("book/view/"+ this.$route.params.id, opts)
        if(res.data.success){
            const book = res.data.data[0]
            this.id = book._id
            this.title = book.title
            this.author = book.author
            this.isbn = book.isbn
            this.synopsis = book.synopsis
            this.price = book.price
            this.discount = book.discount
            this.releasedYear = book.releasedYear
            this.tags = book.tags
            this.frontCover = book.cover.front
            this.sideCover = book.cover.side
            this.backCover = book.cover.back
            this.reviews = book.reviews
            this.quantity = book.quantity
            this.isloading = false
        }
        else{
            Toast("Invalid Result").show()
        }
        const isAdmin = localStorage.getItem("userType") === "ADMIN"
        if(token && token != ""){
            this.isAuth = true
        }
        if(isAdmin){
            this.isAdmin = true
        }
        }
    }
}
</script>

<style scoped>
.discount{
    color: #555555;
    text-decoration: line-through; 
    font-size: .9rem;
}
tr > td:first-child{
    color: var(--base-color);
    font-weight: bold;
}
.review-container{
    overflow-y: scroll;
    height: 40vh;
}
.flex > div{
    max-width: 60%;
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
