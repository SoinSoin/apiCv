<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="content-modal"></div>
    <div class="modal-content box">
      <div v-if="$route.name==='edit'">
        <canvas id="pdf"></canvas>
      </div>
      <div v-if="$route.name==='delete'">
        <div class="columns is-multiline">
          <div class="column is-12">
            <p>êtes-vous sur de vouloir supprimer {{$route.params.name.replace(/-/g, ' ')}}</p>
          </div>
          <div class="column is-4"></div>
          <div class="column is-2">
            <button @click="deleteMe()" class="input is-success">oui</button>
          </div>
          <div class="column is-2">
            <button @click="redirectToEdit()" class="input is-danger">non</button>
          </div>
          <div class="column is-4"></div>
        </div>
      </div>
    </div>
    <button @click="clickClose()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>
<script>
import Me from "@/services/me";
export default {
  name: "modal",
  props: {
    dataModal: Object,
  },
  dataModal() {
    return {
      isActive: Boolean
    };
  },
  beforeMount() {
    if (this.$route.name !== "delete") {
      this.isActive = this.toggler;
      import("pdfjs-dist/webpack").then(pdfjs => {
        this.translatePdfToImg(pdfjs);
      });
    }
  },
  methods: {
    test() {
      import("pdfjs-dist/webpack").then(pdfjs => {
        this.translatePdfToImg(pdfjs, this.val.nb);
      });
    },
    clickClose() {
      if (this.$route.name !== "delete") {
        this.isActive = false;
        this.$emit("childToggler", this.isActive);
      } else {
        this.redirectToEdit();
      }
    },
    redirectToEdit() {
      // return this.$router.go({ name: "list" })
      return this.$router.push( { name: "list" } );
    },
    deleteMe() {
      Me.deleteMe(this.$route.query.q).then(() => {
        this.redirectToEdit();
      });
    },
    translatePdfToImg(pdfjs) {
      console.log("new");
      pdfjs.getDocument(this.dataModal.url).then(pdf => {
        pdf.getPage(1).then(page => {
          var viewport = page.getViewport(1);
          var canvas = document.getElementById("pdf");
          var context = canvas.getContext("2d");
          console.log(viewport.height, viewport.width);
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
        });
      });
    }
  }
};
</script>