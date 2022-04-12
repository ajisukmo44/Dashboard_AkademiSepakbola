<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-xl text-gray-600">TIM GALERI</h2>
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
       <span>GALERI TIM {{form.kategori_id}}</span>
      </div>

      <div>
        <h1>x</h1>
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
