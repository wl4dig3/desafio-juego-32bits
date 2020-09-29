<template>
  <div class="inventario text-light">
    <h1 class="text-light mb-3">Inventario</h1>
    {{ id }}
    <b-table striped hover :items="juguetes"></b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Inventario",
  data() {
    return {
      // fields: ["id", "nombre", "stock", "precio"],
      id: "",
    };
  },
  computed: {
    ...mapState(["juguetes"]),
  },

  mounted() {
    this.id = this.id;
  },
};
</script>

<style lang="scss" scoped>
.table:hover {
  color: rgb(216, 130, 25);
  font-weight: 800;
}

</style>