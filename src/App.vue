<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Inicio' }">Inicio</router-link> |
      <router-link :to="{ name: 'Ventas' }">Ventas</router-link> |
      <router-link :to="{ name: 'Busqueda' }">Busqueda</router-link> |
      <router-link :to="{ name: 'Inventario' }">Inventario</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #93e734;
    }
  }
}
#app {
  background-image: url(assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 40rem;
}
</style>
