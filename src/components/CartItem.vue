<template>
    <base-card>
    <h3 class="title">
            {{book.title}}
    </h3>
    <p class="author">{{book.author}}</p>
    <p class="price">{{book.price}}</p>
    <div class="flex">
    <button @click="increament">+</button>
    <p>{{quantity}}</p>
    <button @click="decreament">-</button>
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