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
        <div>
          <button class="flex items-center bg-green-500 p-2 text-white rounded text-sm hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Tim
            </button>
        </div>
        <div>
          <div>
                <div class="relative text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              id="search"
              name="search"
              type="search"
              class="
                w-full
                py-2
                text-sm text-gray-900
                rounded-md
                pl-10
                border border-gray-300
                focus:outline-none focus:ring-gray-500 focus:ring-gray-500 focus:z-10
              "
              placeholder="Cari"
            />
          </div>
          </div>
        </div>
      </div>

      <table class="w-full mt-2 text-gray-500">
        <thead class="border-b">
          <tr>
            <th class="text-left text-gray-600">
             NO
            </th>
            <th class="text-left text-gray-600">NAMA TIM</th>
            <th class="text-left text-gray-600">KATEGORY</th>
            <th class="text-left text-gray-600">KABUPATEN/KOTA</th>
            <th class="text-left text-gray-600">STATUS</th>
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
              <td>
                  <span v-if="data.status_tim == 1" class="text-green-500">Aktif</span>
                  <span v-if="data.status_tim == 0" class="text-red-500">Non Aktif</span>
              </td>
              <td>{{data.created_at}}</td>
              <td class="py-1 text-right">
                <router-link :to="{ name:'tim-detail', params: { id:data.id}}"><button class="bg-white-100 hover:bg-gray-100 text-gray-600 font-normal py-1 px-2 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                </router-link>
                <button class="bg-white-100 hover:bg-gray-100 text-gray-600 font-normal py-1 px-2 rounded"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg></button>
            
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
            StatistikService.getTeams()
            .then(response => {
                this.tim = response.data.data.data;
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
    
  },
  mounted(){
    this.getTim()
  }
}
</script>
