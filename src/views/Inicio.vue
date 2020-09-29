<template>
  <div class="home container px-5">
    <h1 class="text-light m-2">32 Bits</h1>
    <label for>Id</label>
    <select v-model="nombre" class="form-control">
      <option disabled selected>Selecciona un juguete</option>
      <option v-for="(juguete, i) in juguetes" :key="i" :value="juguete.nombre">
        {{ juguete.nombre }}
      </option>
    </select>

    <label for>Nombre</label>
    <b-form-input
      :disabled="true"
      id="input-2"
      placeholder="Nombre"
    ></b-form-input>
    <label for>Stock</label>
    <b-form-input
      :disabled="true"
      id="input-2"
      v-model="juguete.stock"
      placeholder="Stock"
    ></b-form-input>
    <label for>Precio</label>
    <b-form-input
      :disabled="true"
      id="input-2"
      v-model="juguete.precio"
      placeholder="Precio"
    ></b-form-input>
    <b-button class="mt-3" type="submit" @click="Descontar" variant="primary"
      >Comprar</b-button
    >
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Inicio",
  data() {
    return {
      id: "",
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["descontar"]),
    Descontar() {
      this.descontar(this.nombre);
      // this.$store.dispatch("descontar", this.id);
      // alert('Ey')
    },
  },
  computed: {
    ...mapState(["juguetes"]),

    juguete() {
      let juguete = {
        nombre: "",
        precio: "",
        stock: "",
      };
      return this.juguetes.find((j) => j.id == this.id) || juguete;
    },
    // ...mapGetters(["ids"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 30rem;
}
label {
  color: yellow;
}
</style>
