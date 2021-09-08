<template>
    <base-card>
    <div class="cart">
        <div class="desc">
            <h3 class="title">
                {{book.title}}
            </h3>
            <p class="author">{{book.author}}</p>
            <p class="price">{{book.price}}</p>
            <div class="align-center">
                <button @click="increament">+</button>
                <p class="quantity">{{quantity}}</p>
                <button @click="decreament">-</button>
            </div>
            <div class="btns">
            <button class="btnView">
                <router-link :to="'/view/'+book._id">View</router-link>
            </button>
            <button class="btnDelete">
                Delete
            </button>
            </div>
        </div>
        <div>
            <img :src="book.cover.front"/>
            <img :src="book.cover.back"/>
        </div>
    </div>
    </base-card>
</template>
<script>
export default {
    props:[
        "book",
        "index"
    ],
    inject:["orderBookProvide"],
    data(){
        return{
            quantity: 1
        }
    },
    methods:{
        increament(){
            this.quantity++
            this.orderBookProvide[this.index].qty = this.quantity
        },
        decreament(){
            if(this.quantity>=2){
            this.quantity--
            this.orderBookProvide[this.index].qty = this.quantity
            }
        },
    }
}
</script>

<style scoped>
.quantity{
    margin: 0 10px;
}
img{
    height: 130px;
}
.cart{
    display: flex;
    justify-content: space-between;
}
.desc{
    margin: auto 0 ;
}
.btnView a{
    color: white;
    text-decoration: none;
}
.btnView{
    background: var(--blue);
    border: 1px solid  var(--blue);
}
.btnDelete{
    background: var(--danger);
    border: 1px solid  var(--danger);
}
.btnDelete:hover{
    background: var(--alt-color);
    color: var(--danger);
}
.btns{
    margin: 5px 0;
}
</style>