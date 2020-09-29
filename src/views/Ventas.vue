<template>
  <div class="ventas text-light">
    <h1>Ventas</h1>
    <b-table striped hover :items="historialDeVentas"></b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Ventas",
  data() {
    return {
      items:'',
    }
    
  },
  computed: {
    ...mapState(["historialDeVentas"]),
    
  },
};
</script>
