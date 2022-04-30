<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-xl text-gray-600">DATA TIM</h2>
    <div class="flex items-center space-x-1 text-xs">
      <router-link to="/" class="font-bold text-indigo-700">Home</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Tim</span>
    </div>
  </div>

  <div class="p-4 mt-5 sm:px-8 sm:py-4">
    <div class="p-5 bg-white rounded">
      <div class="flex mb-5 justify-between">
       <span> DETAIL TIM {{form.kategori_id}}</span>
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
                <td class="border border-slate-300 ... p-2 text-gray-600">Nama Tim</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.nama_tim"></td>
              </tr>
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Kategori Tim</td>
                <td class="border border-slate-300 ... p-2">
                    <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                     <option v-for="k in kat" :key="k.id" :value="kategori"> {{k.team_kategori}}</option>
                    </select>
                </td>
              </tr>
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Provinsi</td>
                <td class="border border-slate-300 ... p-2">
                   <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-on:change="getKabupaten($event)">>
                     <option v-for="p in prov" :key="p.id"  :value="p.id" > {{p.title_province}}</option>
                    </select>
                  </td>
              </tr>
               <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Kabupaten</td>
                <td class="border border-slate-300 ... p-2">
                   <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                     <option v-for="kb in kab" :key="kb.id" :v-model="form.city_id">  {{kb.title_city}}</option>
                    </select>
                  </td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Email Tim</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.email_tim"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">No Hp</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.no_hp_tim"></td>
              </tr>
              <tr>
                <td class="border border-slate-300 ... p-2 text-gray-600">Alamat Sekretariat</td>
                <td class="border border-slate-300 ... p-2"><input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" v-model="form.nama_tim"></td>
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
            </tbody>
         </table>
         <div class="text-right py-2">
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
              <span class="ml-1">KEMBALI</span>
              </button>

              <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              <span class="ml-1">UPDATE</span>
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
      get_provinsi:"",
      form:"",
      kategori:"3",
      kab:"",
      prov:"",
      kat:"",
      id: this.$route.params.id,
    }
  },
  methods:{
     getTim(){
            StatistikService.getDetailTim(this.id)
            .then(response => {
                this.form = response.data.data[0];
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
                this.prov = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
      },

      getKab(){
            StatistikService.getKabupaten(4)
            .then(response => {
                this.kab = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
      },

    
  },
  mounted(){
    this.getTim();
    this.getKategori();
    this.getProv();
    // this.getKab();
  }
}
</script>
