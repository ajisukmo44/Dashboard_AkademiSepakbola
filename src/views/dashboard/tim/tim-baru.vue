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
      <span class="text-gray-600">Tim Baru</span>
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

      <table class="w-full mt-5 text-gray-500">
        <thead class="border-b">
          <tr>
            <th class="text-left text-gray-600">
             NO
            </th>
            <th class="text-left text-gray-600">NAMA TIM</th>
            <th class="text-left text-gray-600">KATEGORY</th>
            <th class="text-left text-gray-600">KABUPATEN/KOTA</th>
            <th class="text-left text-gray-600">BERGABUNG</th>
            <th class="text-right text-gray-600">TINDAKAN</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <tr v-for="(data, index) in tim" :key="index.id">
              <td>{{index+1}}</td>
              <td>
                  <img class="inline-block h-8 w-8 mr-1 rounded-full ring-2 ring-white" :src="'http://cms.akademisepakbola.com/'+data.logo" alt="" />
                  {{data.nama_tim}}
                </td>
              <td v-if="data.kategori_tim.team_kategori">
                  <span v-if="data.kategori_tim.team_kategori == 'SSB'" class="text-green-500">{{ data.kategori_tim.team_kategori }}</span>
                  <span v-if="data.kategori_tim.team_kategori == 'Diklat'" class="text-blue-500">{{ data.kategori_tim.team_kategori }}</span>
                  <span v-if="data.kategori_tim.team_kategori == 'Akademi'" class="text-yellow-500">{{ data.kategori_tim.team_kategori }}</span>  
              </td>
              <td>
                <span v-if="data.city_tim.title_city">{{data.city_tim.title_city}}</span>
                </td>
              <td>{{data.created_at}}</td>
              <td class="py-1 text-right">
                <button class="bg-green-500 hover:bg-green-600 text-white font-normal py-1 px-2 rounded" @click="accTim(data.id)">
                    ACC
                </button>
                <button class="bg-red-500 hover:bg-red-500 text-white font-normal py-1 px-2  ml-1 rounded" @click="timDelete(data.id)">Delete</button>
            
              </td>
            </tr>
            <!-- <tr>
              {{tim}}
            </tr> -->
        </tbody>

<t-pagination
  :total-items="2"
  :per-page="2"
  :limit="100"
  :disabled="disabled"
  v-model="currentPage"
/>
        
      </table>

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
      tim:"",
    }
  },
  methods:{
     getTim(){
            StatistikService.getTeamsNew()
            .then(response => {
                this.tim = response.data.data.data;
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        accTim(id){
          StatistikService.accTeamsNew(id)
          .then(response => {
              console.log(response.data);
              this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Tim Berhasil Diupdate!',
                showConfirmButton: false,
                timer: 1500
              });
              this.getTim();
          })
          .catch(err => {
              console.log(err);
          });
      },
      timDelete(id){
          if(confirm("Apakah anda yakin ingin menghapus?")){
          StatistikService.deleteTeams(id)
          .then(response => {
              console.log(response.data);
              this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Tim Berhasil Dihapus!',
                showConfirmButton: false,
                timer: 1500
              });
              this.getTim();
          })
          .catch(err => {
              console.log(err);
          });
        }
      },
    
  },
  mounted(){
    this.getTim();
  }
}
</script>
