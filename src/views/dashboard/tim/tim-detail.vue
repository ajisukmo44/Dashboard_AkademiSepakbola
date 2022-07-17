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
      <span class="text-gray-600">Detail Tim</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
        <router-link to="/tim">
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
        <router-link :to="'/tim/detail/tim-logo/'+id" class="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 mr-2 rounded"> Logo Tim</router-link>
        <router-link :to="'/tim/detail/tim-galeri/'+id" class="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4  rounded"> Galeri Foto</router-link>
      </span>
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
                   <!-- <select class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                     <option v-for="kb in kab" :key="kb.id" :v-model="form.city_id">  {{kb.title_city}}</option>
                    </select> -->
<!-- 
                      <select
                          name="kota"
                          id="kota"
                          class="form-control bg-light"
                          tabindex="12"
                          v-model="form.city_id"
                          required
                          v-if="kota.length > 0"
                        >
                        <option value="">Pilih kabupaten / kota</option>
                          <optgroup v-for="kotaku in kota" :key="kotaku.id" :label="kotaku.title_province">
                            {{kotaku.city}}
                          <option
                              v-for="kab in kotaku.city"
                              :key="kab.id"
                              :value="kab.id"
                            >{{ kab.title_city }}</option>
                            </optgroup>
                        </select> -->
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
            <router-link to="/tim">
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mr-2 rounded inline-flex items-center">
              <span class="ml-1">KEMBALI</span>
              </button>
            </router-link>

              <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <span class="ml-1" @click="updateTims">UPDATE</span>
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
      form: {
            id:'',
            nama_tim:'',
            kategori_id:'',
            city_id: '',
            alamat: '',
            logo: '',
            email_tim:'',
            no_hp_tim: '',
            homebase: '',
            onwer: '',
            staf_pelatih:'',
            deskripsi: '',
            link_facebook:'',
            link_instagram: '',
            link_youtube: '',
            status_tim:'',
        },
      // kategori:"3",
      // kota: [],
      // kat: [],
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
                this.kota = response.data.data;
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

      updateTims(){
        console.log(this.form);
            StatistikService.updateTim(this.form)
            .then(response => {
                this.form = response.data.data;
                this.getTim();
                 this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Update Tim Berhasil !',
                  showConfirmButton: false,
                  timer: 1500
                });
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
      },

    
  },
  mounted(){
    this.getTim();
    // this.getKategori();
    // this.getProv();
    // this.getKab();
  }
}
</script>
