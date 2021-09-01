;<template>
  <h3>Upload Cover</h3>
  <div class="center">
     <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <div class="center">
      <button @click="removeImage">Remove Cover</button>
      <button @click="uploadCover">Upload Cover</button>
    </div>
  </div>
  </div>
</template>

<script>
import api from "../../utils/api.js"
import Toast from "../../utils/Toast.js"
export default {
  data(){
    return {
      image: '',
      file: '',
      id: this.$store.getters.intent
    }
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.file = files[0]
      this.createImage(files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = '';
    },
    async uploadCover(){
      const formData = new FormData();
      const imagefile = this.file;
      formData.append("cover", imagefile);
      const id = this.$route.params.id
      const uri  = "/book/cover/"+ id
      console.log(uri)
      const res = await api.put(uri,formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if(res.data.success){
        const toast = new Toast(res.data.message)
        toast.show()
        this.$router.go(-1)
      }
      else{
        const toast = new Toast(res.data.message, "", "danger")
        toast.show()
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 80%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
button{
  margin: 0 10px
}
</style>