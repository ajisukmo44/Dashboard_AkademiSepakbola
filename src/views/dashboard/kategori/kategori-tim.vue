<template>
  <div class="flex justify-between px-4 mt-5 sm:px-8 pt-4">
    <div class="flex items-center space-x-1 text-xs text-base">
      <router-link to="/" class="text-green-700">Beranda</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Kategori Tim</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
       <router-link to="/tim/tambah-tim">
            <button class="flex-none items-center bg-green-500 p-2 px-3 mr-1 text-white rounded text-sm hover:bg-green-600">
              Tambah Kategori Tim
            </button>
          </router-link>
    </div>

  </div>


  <div class="px-4 mt-3 sm:px-8">
    <div class="p-5 bg-white rounded">

     <table class="w-full border-collapse mt-4 text-gray-500">
        <thead class="border-b">
          <tr class="">
              <th class="text-left text-gray-600 p-2 text-center"   width="3%">
              NO
              </th>
              <th class="text-left text-gray-600 p-2">NAMA KATEGORI</th>
              <th class="text-left text-gray-600 p-2 text-right" width="10%">TINDAKAN</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <tr v-for="(data, index) in kat" :key="data.id">
              <td class="p-2 text-center">{{index+1}}</td>
             <td class="p-2">{{data.team_kategori}} </td>
              <td class="p-2 text-right">
                <router-link :to="{ name:'tim-detail', params: { id:data.id}}"><button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal py-2 px-2 mr-1 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                </router-link>
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal py-2 px-2 rounded" @click="deletekategori(data.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg></button>
              </td>
            </tr>
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
      kat:"",
      form:{
        'team_kategori': 'xx77'
      }
    }
  },
  methods:{
  toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
  },
     getKategori(){
            StatistikService.getKategoriTim()
            .then(response => {
                this.kat = response.data.data;
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
      tambahkategori(){
            StatistikService.tambahKategoriTim(this.form)
            .then(response => {
                console.log(response.data.data);
                this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Kategori Berhasil Ditambah !',
                  showConfirmButton: false,
                  timer: 1500
                });

                this.getKategori();
            })
            .catch(err => {
                console.log(err);
            });
        },

               deletekategori(id){
            if(confirm("Apakah anda yakin ingin menghapus?")){
            StatistikService.deleteKategoriTim(id)
            .then(response => {
                console.log(response.data);
                  this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Kategori Berhasil Dihapus !',
                  showConfirmButton: false,
                  timer: 1500
                });

                this.getKategori();
            })
            .catch(err => {
                console.log(err);
            });
            }
      },
    
    
  },
  mounted(){
    this.getKategori()
  }
}
</script>
