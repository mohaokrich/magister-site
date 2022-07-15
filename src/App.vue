<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { collection, getDocs } from 'firebase/firestore'
// export default {
//   mounted() {
//     this.getRamas();
//   },
//   data() {
//     return{
//       ramas: [],

//     }
//   },
//   methods: {
//     async getRamas() {
//       const querySnapshot = await getDocs(collection(db, "ramas"))
//       querySnapshot.forEach((doc) => {
//         const rama = {
//           id: doc.id,
//           titulo: doc.data().titulo
//         }
//         this.ramas.push(rama);
//       });
//     }
//   },

// }
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>




<style>
</style>
