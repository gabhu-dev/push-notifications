<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <button @click="login">loguearse</button>
    <!-- <button @click="activeMessages">Generar token</button> -->
  </div>
</template>
<script>
// import { getAuth, signInAnonymously } from "firebase/auth";
// import { getToken } from "firebase/messaging";
// import { messaging } from "./firebase";

export default {
  // mounted() {
  //   onMessage(messaging, (message) => {
  //     console.log("tu mensaje", message);
  //   });
  // },
  methods: {
    async login() {
      // const auth = getAuth();
      // console.log("auth", auth);
      // signInAnonymously(auth)
      //   .then((user) => console.log(user))
      //   .catch((error) => console.error(error));
    },
    // async activeMessages() {
    //   const token = await getToken(messaging, {
    //     vapidKey:
    //       "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps",
    //   }).catch((error) =>
    //     console.error("Tuviste un error al generar el token", error)
    //   );
    //   if (token) console.log("tu token", token);
    //   else console.log("no tienes token");
    // },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
