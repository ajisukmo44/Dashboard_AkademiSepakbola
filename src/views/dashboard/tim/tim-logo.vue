<template>
 <div class="flex justify-between px-4 mt-5 sm:px-8 pt-4">
      <div class="flex items-center space-x-1 text-xs text-base">
      <router-link to="/" class="text-green-700">Beranda</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>

      <router-link to="/tim" class="">
      <span class="text-green-700">Tim</span></router-link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
       <router-link :to="'/tim/detail/'+id" class="">
      <span class="text-green-700">Detail Tim</span></router-link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Logo Tim</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
        <router-link :to="'/tim/detail/'+id" >
          <button class="flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
              Kembali
          </button>
        </router-link>
    </div>

  </div>

  <div class="px-4 mt-3 sm:px-8 ">
    <div class="p-5 bg-white rounded"> 
    <div class="flex mb-5 justify-between">
      <span><b class="uppercase text-gray-700"> {{form.nama_tim}}</b></span> 
      <span> 
      </span>
      </div>

      <div class="flex mb-5 justify-between">
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2 mb-5">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full img-fluid rounded-lg"
                  :src="'http://cms.akademisepakbola.com/'+form.logo" >
              </div>
              <hr>
               <div class="w-full p-1 md:p-2">
                   <input class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" @change="onFileSelected" required>
                        <br>
                      <img :src="previewImage" width="250" class="img-fluid pt-2 mb-2" v-if="previewImage">
                      <button class="w-full h-12 px-6 text-white transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800" @click="updateLogo()" v-if="previewImage">Update Logo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  </div>
</template>

<script>
// import TeamServices from '/services/team.services.js'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import StatistikService from '@/services/statistik.services'
import { ref } from 'vue'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },


  data() {
    return {
      id: this.$route.params.id,
      get_provinsi:"",
      form:"",
      kategori:"3",
      kab:"",
      prov:"",
      kat:"",
      foto:"",
      selectedName:' Pilih foto ..',
      selectedFile: null,
      previewImage: null,
      url:' https://cms.akademisepakbola.com'
    }
  },
     methods: {
        onFileSelected(event){
        this.selectedFile = event.target.files[0],
        this.selectedName = event.target.files[0]['name'],
        this.previewImage = URL.createObjectURL(this.selectedFile)
      },
        getTim(){
            StatistikService.getDetailTim(this.id)
            .then(response => {
                this.form = response.data.data[0];
            })
            .catch(err => {
                console.log(err);
            });
      },
      updateLogo(){
           let fd = new FormData();
            fd.append('image', this.selectedFile)
            StatistikService.ubahLogoTim(this.id, fd)
            .then(response => {
                // this.form = response.data.data[0];
                console.log(response.data.data);
                
                this.getTim();
                this.selectedName =' Pilih foto ..';
                this.selectedFile = null;
                this.previewImage = null;
                
                 this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Logo Berhasil Diupdate !',
                  showConfirmButton: false,
                  timer: 1500
                });

            })
            .catch(err => {
                console.log(err);
            });
      }, 
        },
        mounted() {
         this.getTim();
        }
}
</script>

<style scoped>
.img-fluid{
  width: 100%;
}
</style>
