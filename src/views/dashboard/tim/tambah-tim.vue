<template>
  <div class="flex justify-between px-4 mt-5 sm:px-8 pt-4">
      <div class="flex items-center space-x-1 text-xs text-base">
      <router-link to="/" class="text-green-700">Beranda</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>

      <router-link to="/Tim" class="">
      <span class="text-green-700">Tim</span></router-link>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Tambah Tim</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
        <router-link to="/tim">
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
                <td class="border border-slate-300 ... p-2 text-gray-600">Nama Anda</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.name"></td>
              </tr>
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Jabatan Tim</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.jabatan_tim"></td>
              </tr>
                <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Nama Tim</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.nama_tim"></td>
              </tr>
             
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Kategori Tim</td>
                <td class="border border-slate-300 ... p-2">
                    <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="form.kategori_id">
                     <option v-for="k in kat" :key="k.id" :value="k.id"> {{k.team_kategori}}</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Provinsi</td>
                <td class="border border-slate-300 ... p-2">
                      <select
                          name="kota"
                          id="kota"
                          class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          tabindex="12"
                          v-model="province"
                          v-on:change="getKab($event)" 
                          required
                        >
                        <option value="">Pilih Provinsi</option>
                          
                          <option
                              v-for="kot in kota" :key="kot.id"
                              :value="kot.id"
                            >{{ kot.title_province }}</option>
                        </select>
                  </td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Kabupaten/Kota</td>
                <td class="border border-slate-300 ... p-2">
                      <select
                          name="kota"
                          id="kota"
                          class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          tabindex="12"
                          v-model="form.city_id"
                          required
                        >
                          <option
                              v-for="k in kab" :key="k.id"
                              :value="k.id"
                            >{{ k.title_city }}</option>
                        </select>
                  </td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Email Tim</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.email"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">No Hp</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.no_hp"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Alamat Sekretariat</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.alamat"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Pemilik</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.onwer"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Staf Pelatih</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" v-model="form.staf_pelatih"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Lapangan Latihan</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.homebase"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Deskripsi</td>
                <td class="border border-slate-300 ... p-2"><textarea class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.deskripsi"></textarea></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Link Facebook</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.link_facebook"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Link Instagram</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.link_instagram"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Link Youtube</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.link_youtube"></td>
              </tr>

               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Password</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.password"></td>
              </tr>
            </tbody>
         </table>
         <div class="text-right py-2">
           <router-link to="/tim">
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
              <span class="ml-1">KEMBALI</span>
              </button>
              </router-link>

              <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4  rounded inline-flex items-center">
            
              <span class="ml-1" @click="tambahTim">TAMBAH</span>
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
      form: {
            name:'admin',
            jabatan_tim:'-',
            nama_tim:'',
            kategori_id:'',
            city_id: '',
            alamat: '',
            email:'',
            no_hp: '',
            homebase: '',
            onwer: '',
            staf_pelatih:'',
            deskripsi: '',
            link_facebook:'',
            link_instagram: '',
            link_youtube: '',
            password:''
        },
      kategori:[],
      kota: [],
      kab: [],
      kat: [],
      province:'',
    }
  },
  methods:{
     tambahTim(){
       console.log(this.form);
            StatistikService.tambahTim(this.form)
            .then(response => {
               console.log(response.data.data);
               this.form = {
                  name:'admin',
                  jabatan_tim:'-',
                  nama_tim:'',
                  kategori_id:'',
                  city_id: '',
                  alamat: '',
                  email:'',
                  no_hp: '',
                  homebase: '',
                  onwer: '',
                  staf_pelatih:'',
                  deskripsi: '',
                  link_facebook:'',
                  link_instagram: '',
                  link_youtube: '',
                  password:''
              }
              this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Tim Berhasil Ditambah !',
                  showConfirmButton: false,
                  timer: 1500
                });
            
               this.$router.push('/tim/tim-baru');
            })
            .catch(err => {
                console.log(err);
            });
      },

      getKategori(){
            StatistikService.getKategori()
            .then(response => {
                this.kat = response.data.data; 
            })
            .catch(err => {
                console.log(err);
            });
      },

      getKabupaten(e){
         console.log(e.target.value);
         this.get_provinsi = e.target.value;
          StatistikService.getKabupaten(e.target.value)
          .then(response => {
              this.kab = response.data.data;
          })
          .catch(err => {
              console.log(err);
          });
      },

      getProv(){
            StatistikService.getProv()
            .then(response => {
                this.kota = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
      },

      getKab(e){
            StatistikService.getKabupaten(e.target.value)
            .then(response => {
                this.kab = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
      },


    
  },
  mounted(){
    // this.getTim();
    this.getKategori();
    this.getProv();
    // this.getKab();
  }
}
</script>
