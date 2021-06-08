<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/coronavirus2.jpeg" />
    <HelloWorld msg="Welcome to my Covid-19 updated API-site" />

    <h2>This page shows you statistics over following countries:</h2>
    <hello-world country="Sweden"></hello-world>
    <hello-world country="Norway"></hello-world>
    <hello-world country="Denmark"></hello-world>
    <hello-world country="Finland"></hello-world>

    <h3>Like this page?</h3>
    <input
      type="checkbox"
      v-model="someBoolean"
      v-on:click="$store.commit('someValue')"
    />
    {{ someBoolean }}
    {{ someValue }} 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      someBoolean: false,
    };
  },
  computed: {
    someValue: {
      get() {
        return this.$store.state.someValue;
      },
      set(someValue) {
        this.$store.commit("someValue", someValue);
      },
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
