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
      <span class="text-gray-600">Galeri Tim</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
        <router-link :to="'/tim/detail/'+id" >
          <button class="flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-1 rounded inline-flex items-center">
              Kembali
          </button>
        </router-link>
         <router-link :to="'/tim/detail/tambah-foto/'+id">
          <button class="flex bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Tambah Foto
            </button>
            </router-link>
    </div>

  </div>
  <div class="px-4 mt-3 sm:px-8 ">
    <div class="p-5 bg-white rounded">
      <div class="flex mb-5 justify-between">
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-1 py-2 mx-auto">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/4 mb-5" v-for="ft in foto" :key="ft.id">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="rounded img-fluid w-full "
                  :src="url+ft.url_foto"> 
                     <div class="flex justify-between mt-2">
                <button type="button" class="w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" @click="fotodelete(ft.id)">Hapus </button>
              </div>
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
      // linkedit:'/auth/galerifoto/editfoto',
      url:' https://cms.akademisepakbola.com',
    }
  },
     methods: {
           getGaleriFoto(){
             console.log(this.id);
            StatistikService.getGaleri(this.id)
            .then(response => {
                this.foto = response.data.data;
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
         },
          fotodelete(id){
          if(confirm("Apakah anda yakin ingin menghapus?")){
          StatistikService.deleteGaleri(id)
           .then((resp) => {
                    this.getGaleriFoto();
                    
                 this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Foto Berhasil Dihapus!',
                  showConfirmButton: false,
                  timer: 1500
                });
                        })
                    .catch(err => console.log(err))
                    }
                }  
        },
        mounted() {
         this.getGaleriFoto();
        }
}
</script>

<style scoped>
.img-fluid{
  width: 100%;
  height: 350px;
}
</style>
