<template>
  <div class="flex justify-between px-4 mt-5 sm:px-8 pt-4">
    <div class="flex items-center space-x-1 text-xs text-base">
      <router-link to="/" class="text-green-700">Beranda</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <router-link to="/berita" class="text-green-700">Berita</router-link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Edit Berita</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
       <router-link to="/berita">
            <button class="flex-none items-center bg-red-500 p-2 px-3 mr-1 text-white rounded text-sm hover:bg-red-600">
              Kembali
            </button>
          </router-link>
    </div>

  </div>

  <div class="px-4 mt-3 sm:px-8">
    <div class="p-5 bg-white rounded">
      <div class="flex mb-5 justify-between">
       <span> Data Berita</span>
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
                <td class="border border-slate-300 ... p-2 text-gray-600">Judul</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="berita.judul"></td>
              </tr>
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Meta Deskripsi</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="berita.meta_description"></td>
              </tr>
                 <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Sub Deskripsi</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="berita.sub_description"></td>
              </tr>
                <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Tag</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="berita.tag"></td>
              </tr>
             
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Kategori Blog</td>
                <td class="border border-slate-300 ... p-2">
                    <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="berita.kategori_id">
                     <option v-for="k in kat" :key="k.id" :value="k.id"> {{k.nama_kategori}}</option>
                    </select>
                </td>
              </tr>
             <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Isi Berita</td>
                <td class="border border-slate-300 ... p-2">
                  <textarea class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="berita.isi_berita"></textarea>
                  </td>
              </tr>
              <tr>
                    <td class="border border-slate-300 ... p-2 text-gray-600">Images</td>
                  <td>
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
                  </td>
              </tr>
        
            </tbody>
         </table>
         <div class="text-right py-2">
           <router-link to="/berita">
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
              <span class="ml-1">KEMBALI</span>
              </button>
              </router-link>

              <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4  rounded inline-flex items-center">
            
              <span class="ml-1" @click="editBerita">UPDATE</span>
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
      berita:{
              judul: '',
              sub_description: '',
              meta_description: '',
              tag: '',
              kategori_id: '',
              isi_berita: '',
              user_id: '',
      },
      kategori:[],
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
     editBerita(){

            // let fd = new FormData();
            // fd.append('images', this.selectedFile)
            // fd.append('sub_description', this.form.sub_description)
            // fd.append('meta_description', this.form.meta_description)
            // fd.append('kategori_id', this.form.kategori_id)
            // fd.append('tag', this.form.tag)
            // fd.append('isi_berita', this.form.isi_berita)
            // fd.append('user_id', this.form.user_id)
            // fd.append('judul', this.form.judul)
            let data = {
                        judul: this.berita.judul,
                        sub_description: this.berita.sub_description,
                        meta_description: this.berita.meta_description,
                        tag: this.berita.tag,
                        kategori_id: this.berita.kategori_id,
                        isi_berita: this.berita.isi_berita,
                        user_id: this.berita.user_id,
                    }            
            console.log(data);
            StatistikService.updateBerita(this.id, data)
            .then(response => {
               console.log(response.data.data);
               
                 this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Berita Berhasil Diupdate !',
                  showConfirmButton: false,
                  timer: 1500
                });

               this.$router.push('/berita');
            })
            .catch(err => {
                console.log(err);
            });
      },

      getKategori(){
            StatistikService.getKategoriBlog()
            .then(response => {
                this.kat = response.data.data; 
            })
            .catch(err => {
                console.log(err);
            });
      },

      getBeritaDetail(){
         StatistikService.detailBerita(this.id)
            .then(response => {
                this.berita = response.data.data; 
            })
            .catch(err => {
                console.log(err);
            });
      }


    
  },
  mounted(){
    this.getKategori();
    this.getBeritaDetail();
  }
}
</script>
