<template>
   <div class="flex justify-between px-4 mt-5 sm:px-8 pt-4">
    <div class="flex items-center space-x-1 text-xs text-base">
      <router-link to="/" class="text-green-700">Beranda</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Tim</span>
    </div>
  
    <div class="flex items-center space-x-1 text-xs">
       <router-link to="/user">
            <button class="flex-none items-center bg-blue-500 p-2 px-3 mr-1 text-white rounded text-sm hover:bg-blue-600">
              Admin
            </button>
          </router-link>
    </div>

  </div>

  <div class="px-4 mt-3 sm:px-8">
    <div class="p-5 bg-white rounded">
      <div class="flex mb-5 justify-between">
        <div>
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

        <table class="w-full mt-5 text-gray-500">
        <thead class="border-b">
          <tr>
            <th class="text-left text-gray-600">
             NO
            </th>
            <th class="text-left text-gray-600">NAMA PENGGUNA</th>
            <th class="text-left text-gray-600">STATUS</th>
            <th class="text-left text-gray-600">BERGABUNG</th>
            <th class="text-right text-gray-600">TINDAKAN</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <tr v-for="(data, index) in user" :key="index.id">
              <td>{{index+1}}</td>
              <td>
                {{data.name}} <br>
                <small> {{data.email}}</small>
              </td>
              <td> 
                <span v-if="data.team[0]"> {{data.team[0].nama_tim}}</span>
              </td>
              <td>{{data.created_at}}</td>
              <td class="py-1 text-right">
                <router-link :to="{ name:'tim-detail', params: { id:data.id}}"><button class="bg-white-100 hover:bg-gray-100 text-gray-600 font-normal py-1 px-2 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                </router-link>
                  <button class="bg-white-100 hover:bg-gray-100 text-gray-600 font-normal py-1 px-2 rounded" @click="userDelete(data.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      user:"",
    }
  },
  methods:{
     getUsers(){
            StatistikService.getUser()
            .then(response => {
                this.user = response.data.data;
                console.log(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
     userDelete(id){
          if(confirm("Apakah anda yakin ingin menghapus?")){
          StatistikService.deleteUser(id)
          .then(response => {
              console.log(response.data);
              this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'User Berhasil Dihapus!',
                showConfirmButton: false,
                timer: 1500
              });
              this.getUsers();
          })
          .catch(err => {
              console.log(err);
          });
        }
      },
    
  },
  mounted(){
    this.getUsers()
  }
}
</script>
