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
      <span class="text-gray-600">Tambah Foto Galeri</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
        <router-link :to="'/tim/detail/'+id" >
          <button class="flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
              Kembali
          </button>
        </router-link>
    </div>

  </div>

  <div class="px-4 mt-3 sm:px-8">
    <div class="p-5 bg-white rounded">
      <div class="flex mb-5 justify-between">
       <span> Data Tim</span>
      </div>

      <div>
         <table class="border-collapse border border-slate-400 w-full">
            <!-- <thead>
              <tr>
                <th class="border border-slate-300 ... p-2 text-left text-gray-800" width="30%">Keterangan</th>
                <th class="border border-slate-300 ... p-2 text-left text-gray-800">Isi Data</th>
              </tr>
            </thead> -->
            <tbody>
               <tr>
                <td class="border border-slate-300 ... p-2">
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
                      <img :src="previewImage" width="250" class="img-fluid pt-3">
                      </td>
              </tr>
            </tbody>
         </table>
         <div class="text-right py-2">
           <router-link :to="'/tim-galeri/'+id">
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
              <span class="ml-1">KEMBALI</span>
              </button>
              </router-link>

              <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4  rounded inline-flex items-center">
            
              <span class="ml-1" @click="tambahFoto">TAMBAH</span>
              </button>
      </div>
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
      selectedName:' Pilih foto ..',
      selectedFile: null,
      previewImage: null,
    }
  },

  methods:{
      onFileSelected(event){
        this.selectedFile = event.target.files[0],
        this.selectedName = event.target.files[0]['name'],
        this.previewImage = URL.createObjectURL(this.selectedFile)
      },
     tambahFoto(){
         let fd = new FormData();
         fd.append('image', this.selectedFile)
       console.log(this.id, fd);
            StatistikService.tambahFotoTim(this.id, fd)
            .then(response => {
               console.log(response.data.data);
                 
                 this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Foto Berhasil Ditambah!',
                  showConfirmButton: false,
                  timer: 1500
                });

               this.$router.push('/tim/detail/tim-galeri/'+this.id);
            })
            .catch(err => {
                console.log(err);
            });
      },
  },
}
</script>
