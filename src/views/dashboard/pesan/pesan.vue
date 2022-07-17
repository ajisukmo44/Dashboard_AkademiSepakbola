<template>
  <div class="flex justify-between px-4 mt-5 sm:px-8 pt-4">
    <div class="flex items-center space-x-1 text-xs text-base">
      <router-link to="/" class="text-green-700">Beranda</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Pesan Masuk</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
       <router-link to="/tim/tambah-tim">
            <button class="flex-none items-center bg-green-500 p-2 px-3 mr-1 text-white rounded text-sm hover:bg-green-600">
              Belum di baca
            </button>
          </router-link>

          <router-link to="/tim/tim-baru">
            <button class="flex-none items-center bg-blue-500 p-2 px-3 text-white rounded text-sm hover:bg-blue-600">
              Sudah dibaca
            </button>
          </router-link>
    </div>

  </div>

  <div class="px-4 mt-3 sm:px-8">
    <div class="p-5 bg-white rounded">

       <table class="w-full mt-5 text-gray-500">
        <thead class="border-b">
          <tr class="">
            <th class="text-left text-gray-600  p-2 text-center"   width="3%">
             NO
            </th>
              <th class="text-left text-gray-600  p-2">PENGIRIM</th>
            <th class="text-left text-gray-600  p-2" width="25%">SUBJECT</th>
            <th class="text-left text-gray-600  p-2" width="30%">ISI PESAN</th>
            <th class="text-left text-gray-600  p-2" width="12%">TANGGAL</th>
            <th class="text-right text-gray-600  p-2" width="8%">TINDAKAN</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <tr v-for="(data, index) in pesan" :key="data.id">
              <td class="p-2  text-center">{{index+1}}</td>
             <td class="p-2 ">{{data.nama}} <br> {{data.email}} <br> {{data.no_telepone}}</td>
              <td class="p-2 ">{{data.subject}}</td>
              <td class="p-2 ">{{data.isi_pesan}}</td>
              <td class="p-2">{{data.created_at}}</td>
              <td class="p-2 text-right ">
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal py-2 px-2 rounded" @click="deletepesan(data.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      pesan:"",
    }
  },
  methods:{
     getPesan(){
            StatistikService.getPesanMasuk()
            .then(response => {
                this.pesan = response.data.data;
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
       deletepesan(id){
            if(confirm("Apakah anda yakin ingin menghapus?")){
            StatistikService.deletePesan(id)
            .then(response => {
                console.log(response.data);
                  this.$swal({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Pesan Berhasil Ditambah !',
                  showConfirmButton: false,
                  timer: 1500
                });

                this.getPesan();
            })
            .catch(err => {
                console.log(err);
            });
            }
       }
  },
  mounted(){
    this.getPesan()
  }
}
</script>
