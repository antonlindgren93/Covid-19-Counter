<template>
  <div class="about">

    
    <h1>Data from Scandinavian countries </h1>
    <h2>Press the buttons to get infomration</h2>
    
      
       
      <div class="flex-container">
  
       <button v-on:click="getStatus">Sweden</button>
      <div class="infectedSwe">Infected:<br>{{savedData.infected}}  </div>
      <div class="deceasedSwe">Deceased:<br>{{savedData.deceased}} </div>
      <div class="intensiveCareSwe">Intensive care:<br>{{savedData.intensiveCare}}</div>
    
     <button v-on:click="getStatusDenmark">Denmark</button>
      <div class="infectedDen">Infected:<br>{{denmarkData.infected}}  </div>
      <div class="deceasedDen">Deceased:<br>{{denmarkData.deceased}} </div>
      <div class="intensiveCareDen">Intensive care:<br>{{denmarkData.intensive}}</div>
  
    <button v-on:click="getStatusNorway">Norway</button>
      <div class="infectedNor">Infected:<br>{{norwayData.infected}}  </div>
      <div class="deceasedNor">Deceased:<br>{{norwayData.deaths}} </div>
      <div class="intensiveCareNor">Intensive care:<br>{{norwayData.admittedToICU}}</div>
  
    <button v-on:click="getStatusFinland">Finland</button>
      <div class="infectedFin">Infected:<br>{{finlandData.infected}}  </div>
      <div class="deceasedFin">Deceased:<br>{{finlandData.deaths}} </div>
      <div class="intensiveCareFin">Intensive care:<br> {{'No data'}}</div>
    
    <br>
    <div class="update-time">Data updated:
      {{savedData.lastUpdatedAtApify || denmarkData.lastUpdatedAtApify || finlandData.lastUpdatedAtApify  || norwayData.lastUpdatedAtApify}} </div>
      <!-- <div class="regions">Regions: {{savedData.infectedByRegion}}</div> -->
      
   </div>
  </div>
</template>

<script>


export default {

  name:'app',
  
  data () {
    return {
      urlKey:'https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true',
      query: '',
      savedData: [],
      denmarkData: [],
      norwayData: [],
      finlandData:[],

    }
  },

  methods: {
    getStatus(){


//https://api.covid19api.com/
    fetch('https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true')
        
    .then(response => response.json())
    .then(result => {

      this.savedData = result
      console.log(result)
      console.log(result.infected)
      console.log(result.infectedByRegion[0].region)
    }); 
    
    

    }, 

    getStatusDenmark() {

      fetch("https://api.apify.com/v2/key-value-stores/EAlpwScH29Qa5m60g/records/LATEST?disableRedirect=true")
        
    .then(response => response.json())
    .then(result => {

      this.denmarkData = result
      console.log(result)
      console.log(result.infected)
      
    });

    },

    getStatusNorway() {

      fetch("https://api.apify.com/v2/key-value-stores/3qlmMu1XN2ZLoVIQt/records/LATEST?disableRedirect=true")
        
    .then(response => response.json())
    .then(result => {

      this.norwayData = result
      console.log(result)
      console.log(result.infected)
      
    });

    },

    getStatusFinland() {

      fetch("https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true")
        
    .then(response => response.json())
    .then(result => {

      this.finlandData = result
      console.log(result)
      console.log(result.infected)
      
    });

    }
    
  }

  }

</script> 



<style scoped>

h1 {
  text-align: center;
  padding-bottom: 3%;
  
}

.flex-container {
  display:flexbox;
  flex-wrap: nowrap;
  
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100%;
  margin: 10px;
  text-align: center;
}


 

.infectedSwe, .infectedDen, .infectedFin, .infectedNor{
  color: blue
}

.deceasedSwe, .deceasedDen, .deceasedNor, .deceasedFin{
  color:red
}

.intensiveCareSwe, .intensiveCareDen, .intensiveCareNor, .intensiveCareFin{
  color:darkolivegreen;
}

.update-time{
  color: green;
  font-size: 20px;
}
/* img {
  border-radius: 8px;
   border-radius: 50%;
} */




/* 
button {
  margin-left: 49%;
  
  
} */

</style>

