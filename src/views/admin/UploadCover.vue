;<template>
  <h3>Upload Cover</h3>
  <base-spinner v-if="isloading"></base-spinner>
  <div class="center" v-else>
     <div v-if="!image">
    <h2 class="center">Select an image</h2>
    <div class="bar-warn">
      <h3>Image Upload</h3>
      <p>Please upload the sample image in <a href="https://github.com/zayazzp/everest-book-sample-book/tree/main/assets" target="_blank">Sample Book Cover</a> </p>
    </div>
      <input type="file" @change="onFileChange" >
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
      id: this.$store.getters.intent,
      isloading: false
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
      const token = localStorage.getItem("token")
      const opts = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': "Bearer " +token
        }
      }
      this.isloading = true
      const res = await api.patch(uri,formData, opts)
      if(res.data.success){
        this.isloading = false
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
.bar-warn{
  padding: 10px;
  margin: 10px;
  color: #333;
  background: #fafafa;
  border: 1px solid #ccc;
  color: #756e15;
  background: #fffbd1;
  border: 1px solid #87803e;
}
.bar-warn h3{
  color: #756e15;
  text-align: center;
}
</style>