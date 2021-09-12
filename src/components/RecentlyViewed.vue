<template>
    <div class="orderImageContainer">
        <router-link  v-for="book in books.slice(0, 10)" :key="book._id" :to="{ name: 'Book', params: { id: book._id }}">
            <p>{{book.title}}</p>
            <img :src="book.cover.front" :alt="book.title">
        </router-link>
    </div>
</template>
<script>
export default {
    props:["books"],
}
</script>
<style scoped>
.orderImageContainer{
    display: flex;
    margin: 20px 0;
    position: relative;
}
p{
    color: black;
    white-space: nowrap;
    position: absolute;
    top: 0;
    opacity: 0;
    font-size: 12px;
    transition: 0.3s ease-out;
}
img{
    width: 100px;
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
a:hover p{
    opacity: 1;
    top: -12px;
}

</style>