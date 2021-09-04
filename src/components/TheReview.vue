<template>
<base-card>
    <div class="align-center">
        <img :src="user.profile">
        <div>
            <p class="username">{{user.firstname}}</p>
            <star-rating :grade="rating"></star-rating>
        </div>
    </div>
    <p>{{description}}</p>
</base-card>
</template>
<script>
import StarRating from "../components/UI/StarRating.vue"
export default {
    components:{
        StarRating
    },
    props:["user", "rating", "description"]
}
</script>

<style scoped>
img{
    margin-right: 10px;
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50px;
}
.username{
    color: var(--base-color);
    font: bolder;
    font-size: 1.5rem;
    text-transform: capitalize;
}
</style>