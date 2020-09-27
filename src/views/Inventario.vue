<template>
<div class="inventario text-light">
  <h1 class="text-light mb-3">Inventario</h1>
  {{id}}
  <b-table  striped hover :items="juguetes"></b-table>
</div>
</template>

<script>
import {
  v4 as uuidv4
} from "uuid";
import {
  mapState
} from "vuex";
export default {
  computed: {
    ...mapState(["juguetes"]),
  },

  data() {
    return {
      id: "",
    };
  },

  mounted() {
    this.id = uuidv4().slice(30);
  },
};
</script>

<style lang="scss" scoped>
  .table{
    color: rgb(248, 245, 241);
    font-weight: 700;
  }
  .invetario {
    background-color: violet;
    
  }
</style>