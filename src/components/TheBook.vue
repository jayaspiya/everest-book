<template>
<div class="cover">

    <img :src="book.imageUrl" :alt="book.title" loading="lazy" v-if="book.imageUrl">
    <img src="../assets/no-front.png" :alt="book.title" loading="lazy" v-else>

    <div>
        
    <h3>
        {{book.title}}
    </h3>
    <p>{{book.author}}</p>
    <p class="price">{{book.price}}</p>
    <p>{{book.synopsis}}</p>
    </div>
</div>
</template>
<script>
export default {
    props:[
        "book"
    ]
}
</script>

<style scoped>

.cover{
    padding: 10px;
    margin: 10px;
    background: #FFF;;
}
img{
    max-height:200px;
    margin: 0 10px;
}
.price::before{
    content: "Rs.";
}
</style>