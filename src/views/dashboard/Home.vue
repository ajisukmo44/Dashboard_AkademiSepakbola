<template>
  <div class="flex dark justify-between px-4 mt-4 sm:px-8 dark">
    <h2 class="text-2xl text-gray-600">Dashboard</h2>

    <div class="flex items-center space-x-1 text-xs">
      <a href="#" class="font-bold text-indigo-700">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Dashboard</span>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div class="flex items-center bg-white border  overflow-hidden shadow  dark:bg-black dark:text-gray-200 dark:border-transparent">
      <div class="p-4 bg-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <p class="text-3xl">{{total_tim}}</p>
        <h3 class="text-secondary">Total Tim Aktif</h3>
      </div>
    </div>

    <div class="flex items-center bg-white border overflow-hidden shadow">
      <div class="p-4 bg-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <p class="text-3xl">{{total_acc}}</p>

        <h3 class="text-secondary">Permintaan ACC</h3>
      </div>
    </div>

    <div class="flex items-center bg-white border  overflow-hidden shadow">
      <div class="p-4 bg-indigo-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <p class="text-3xl">14</p>
        <h3 class="text-sm tracking-wider">Blog</h3>
      </div>
    </div>

    <div class="flex items-center bg-white border  overflow-hidden shadow">
      <div class="p-4 bg-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <p class="text-3xl">14</p>
        <h3 class="text-sm tracking-wider">Pesan Masuk</h3>
      </div>
    </div>
  </div>

   <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-5 sm:px-8">
    <div class="bg-white border  p-4 shadow sm:col-span-3">
      <h3 class="text-xl text-gray-600 mb-4">Penambahan Tim</h3>
      <apexchart
                class="apex-charts"
                height="350"
                type="area"
                dir="ltr"
                :series="dailyReportSeries"
                :options="{
                chart: {
                  id: 'pageview-chart',
                  toolbar: {
                    show: false,
                  },
                },
                dataLabels: {
                  enabled: true,
                },
                 stroke: {
                    curve: 'smooth'
                  },
                colors: ['#34D399'], 
                xaxis: {
                  type: 'category',
                  categories: x_cat,
                  labels: {
                    show: true,
                    hideOverlappingLabels: false,
                  }
                },
              }"
      ></apexchart>
    </div>

    <TabGroup>
      <div class="bg-white border p-4  shadow sm:col-span-2"> 
          <h3 class="text-xl text-gray-600 mb-4">Kategori Tim</h3>
          <apexchart type="pie" 
                    height="340"
                    :series="categoryOptions.series"
                    :options="categoryOptions.chartOptions" 
          ></apexchart>
      </div>
    </TabGroup>
  </div>

  <div class="grid grid-cols-1 px-4 gap-4 mt-8 sm:grid-cols-5 sm:px-8">
    <div class="px-4 py-2 bg-white border overflow-hidden shadow sm:col-span-3" >
       <div class="flex justify-between items-center px-4 py-2 mb-2 border-b-2 text-gray-600">
        <h3 class="text-xl text-gray-600 mb-2">Tim Baru Bergabung</h3>
        <button class="border  bg-gray-200 px-4 py-2 text-xs hover:bg-gray-300">Lihat Semua</button>
      </div>
      <div class="px-4">
        <table class="table-fixed min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" width="40%">
                Nama Tim
              </th>

              <th scope="col" class="py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" width="15%">
                Kategori
              </th>

              <th scope="col" class="py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" width="20%">
                Kab/Kota
              </th>

              <th scope="col" class="py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" width="15%">
                Tgl Bergabung
              </th>

              <th scope="col" class="py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider" width="10%">
                Tindakan
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 text-sm text-gray-500">
            <tr v-for="tim in tim_baru" :key="tim.slug">
              <td class="py-4 whitespace-nowrap">{{ tim.nama_tim }}</td>
              <td class="py-4 whitespace-nowrap text-sm text-gray-500">
                  <span v-if="tim.kategori_tim.team_kategori == 'SSB'" class="text-green-500">{{ tim.kategori_tim.team_kategori }}</span>
                  <span v-if="tim.kategori_tim.team_kategori == 'Diklat'" class="text-blue-500">{{ tim.kategori_tim.team_kategori }}</span>
                  <span v-if="tim.kategori_tim.team_kategori == 'Akademi'" class="text-yellow-500">{{ tim.kategori_tim.team_kategori }}</span>  
              </td>
              <td class="py-4 whitespace-nowrap text-sm text-gray-500">{{ tim.city_tim.title_city }}</td>
              <td class="py-4 whitespace-nowrap text-sm text-gray-500">{{ tim.created_at}}</td>
              <td class="py-4 whitespace-nowrap text-right text-sm text-blue-600"><a href="#" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Detail</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

      <div class="grid grid-rows-1 gap-4 sm:col-span-2">
      <div class="px-4 py-2 bg-white border shadow">
       <div class="flex justify-between items-center px-4 py-2 mb-2 border-b-2 text-gray-600">
        <h3 class="text-xl text-gray-600 mb-2">Top Wilayah</h3>
      </div>
         <div class="px-4">
        <table class="table-fixed min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" width="80%">
                Kabupaten/Kota
              </th>

              <th scope="col" class="py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider" width="20%">
                Jumlah Tim
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 text-sm text-gray-500">
            <tr v-for="kab in top_wilayah" :key="kab.id">
              <td class="py-4 whitespace-nowrap">{{ kab.title_city }}</td>
              <td class="py-4 whitespace-nowrap text-right">{{ kab.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import topAuthors from '@/data/home/topAuthors.json'
import recentSales from '@/data/home/recentSales.json'
import StatistikService from '@/services/statistik.services'
import { watch } from '@vue/runtime-core'
import { ref } from 'vue'


export default {
  components: {
    apexchart: VueApexCharts,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },

  data(){
    let categoryOptions = {
    series: [],
    chartOptions: {
        chart: {
            type: 'pie',
            height: 100,
            size:250
        },
        labels: [],
        colors: ["#EAB308","#60A5FA","#34D399"],
        legend: {
            show: true,
            position: 'bottom',
            labels: {
            colors: '#74788d',
        },
        },
        
        plotOptions: {
            pie: {
              donut: {
                    size: '2%',
                }
            }
        }
      }
    };

    let dailyReportSeries = [
      { 
        name: 'Daily Statistics',
        data: []
    },
    ]

    return{
      dailyReportSeries,
      x_cat: [],
      categoryOptions,
      total_tim: "",
      tim_baru: "",
      total_acc:"",
      total_kategori:"",
      total_daily:"",
      top_wilayah:"",
      label:"",
    }
  },
  methods:{
      getTotal(){
            StatistikService.getTotalTeams()
            .then(response => {
                this.total_tim = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        getAcc(){
            StatistikService.getTotalAcc()
            .then(response => {
                this.total_acc = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        getKategori(){
            StatistikService.getTotalKategori()
            .then(response => {
                this.total_kategori = response.data.data;
                   response.data.data.forEach(event => {
                  // this.categoryOptions.chartOptions.colors.push(this.setColor(event.badge_color))
                  this.categoryOptions.chartOptions.labels.push(event.team_kategori)
                  this.categoryOptions.series.push(event.total)
              });
            })
            .catch(err => {
                console.log(err);
            });
        },
        getDaily(){
            StatistikService.getTotalDaily()
            .then(response => {
                this.total_daily = response.data.data;
                  response.data.data.forEach(event => {
                   this.x_cat.push(event.label)
                  this.dailyReportSeries[0].data.push(event.total)
                })
            })
            .catch(err => {
                console.log(err);
            });
        },
          getTimBaru(){
            StatistikService.listTimBaru()
            .then(response => {
                this.tim_baru = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
         getTopCity(){
            StatistikService.topWilayah()
            .then(response => {
                this.top_wilayah = response.data.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
       
  },
  beforeMount(){
    this.getDaily();
  },
  mounted(){
    this.getTotal();
    this.getKategori();
    this.getAcc();
    this.getTimBaru();
    this.getTopCity();
}
}
</script>
