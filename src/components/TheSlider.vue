;<template>
<agile >
    <img class="slide" v-for="image in images" :src="image" :key="image">
</agile>
</template>
<script>
export default {
    data(){
        return{
            images:[
                "https://booksmandala.com/storage/sliders/large-Shadow%20and%20Bone.png",
                "https://booksmandala.com/storage/sliders/George%20Orwell.png",
                "https://booksmandala.com/storage/sliders/Yuwal.png",
                "https://booksmandala.com/storage/sliders/large-Arsene.png"]
        }
    }
}
</script>
<style scoped>
 img{
    height: 300px;
}
</style>
