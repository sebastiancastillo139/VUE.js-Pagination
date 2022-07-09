<template>
  <div class="row col-12 mx-auto">
    <div
      v-for="(news, index) in getNewsData.slice(init, end)"
      :key="index"
      class="card col-12 col-lg-4 p-3 border-0 d-inline-block"
    >
      <img
        class="card-img-top"
        src="../assets/An-1881-representation-of-Saturns-orbit-around-the-Sun-Seen-from-a-point-very-high.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ news.title }}</h5>
        <p class="card-text text-truncate">
          {{ news.content }}
        </p>
        <a :href="news.link" target="_blank" class="btn btn-primary"
          >Ir a la noticia</a
        >
      </div>
    </div>
    <nav aria-label="Page navigation example" class="fs-2">
      <ul class="pagination">
        <li class="btn page-item" v-if="currentPage != 1">
          <a
            class="page-link"
            v-on:click.stop.prevent="previousPage(currentPage)"
            >Previa</a
          >
        </li>
        <li
          class="btn page-item"
          v-for="(pages, index) in getTotalPages"
          :key="index"
        >
          <a
            class="page-link"
            v-on:click.stop.prevent="changePageNumber(pages)"
            >{{ pages }}</a
          >
        </li>
        <li class="page-item btn" v-if="currentPage != getTotalPages">
          <a class="page-link" v-on:click.stop.prevent="nextPage(currentPage)"
            >Siguiente</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      //init determina desde donde se hace el slice al array JSON recibido
      //end determina donde termina el slice, 
      //la resultante es un array que contiene un grupo de objetos
      init: 0,
      end: 6,
      currentPage: 1,
    };
  },
  methods: {
    changePageNumber(number) {
      //Esta función es única pues se genera con cada página nueva, number equivale al numero de la pagina a la que se quiere acceder
      console.log(number);
      console.log(this.currentPage);
      //currentPage es un dato que funciona como referencia para cada cambio de página, indicando la página actual
      this.currentPage = number;
      this.init = number * 6 - 6;
      this.end = number * 6;
    },
    previousPage(currentPage) {
      console.log(currentPage);
      let prevPage = currentPage - 1;
      this.currentPage = prevPage;
      this.init = prevPage * 6 - 6;
      this.end = prevPage * 6;
    },
    nextPage(currentPage) {
      console.log(currentPage);
      let prevPage = currentPage + 1;
      console.log(prevPage);
      this.currentPage = prevPage;
      this.init = prevPage * 6 - 6;
      this.end = prevPage * 6;
    },
  },
  computed: {
    ...mapGetters(["getNewsData", "getTotalPages"]),
  },
  mounted() {
    this.getNewsData;
  },
};
</script>
