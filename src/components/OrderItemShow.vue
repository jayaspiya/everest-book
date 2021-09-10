<template>
    <div class="orderImageContainer">
        <router-link  v-for="order in orderBook.slice(0, 5)" :key="order" :to="{ name: 'Book', params: { id: order.bookId._id }}">
            <img :src="order.bookId.cover.front" :alt="order.bookId.title">
        </router-link>
    </div>
</template>
<script>
export default {
    props:["orderBook"],
}
</script>
<style scoped>
.orderImageContainer{
    display: flex;
}
img{
    width: 80px;
    cursor: pointer;
}
a{
    transition: 0.4s ease-out;
}
a:not(:first-child) {
    margin-left: -40px;
}
a:hover{
    transform: translateY(-10px);
    transition: 0.4s ease-out;
}
a:hover ~ a {
    transition: 0.4s ease-out;
    transform: translateX(40px);
    
}
</style>