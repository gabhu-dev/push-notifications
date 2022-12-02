<template>
  <div id="app">
    <button @click="registerWorker">Registrar</button>
    <button @click="handleGetToken">Generar token</button>
  </div>
</template>
<script>
import { getToken } from "firebase/messaging";

export default {
  methods: {
    async registerWorker() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("firebase-messaging-sw.js")
          .then((reg) => {
            console.log(`Service Worker Registration (Scope: ${reg.scope})`);
            console.log("Firebase cloud messaging object", this.$messaging);
          })
          .catch((error) => {
            const msg = `Service Worker Error (${error})`;
            console.error(msg);
          });
      } else {
        // happens when the app isn't served over HTTPS or if the browser doesn't support service workers
        console.warn("Service Worker not available");
      }
    },
    handleGetToken() {
      console.log(this.$messaging);

      getToken(this.$messaging, {
        vapidKey:
          "BIkEkD9SoE0RmxzBsfCSSEI-fgai5ebU54f3dx5ExaBhvEoduKL44V0w4MmFtIFEF-eiTC7C-VNkhTesF1HYYps",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("client token", currentToken);
            document.body.innerHTML = currentToken;
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    },
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
