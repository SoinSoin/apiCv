<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="content-modal"></div>
    <div class="modal-content box">
      <div v-if="dataModal.url || dataModal.iamge">
        <canvas id="pdf"></canvas>
      </div>
      <div v-if="dataModal.txt">
        <p>dataModal.txt</p>
      </div>
    </div>
    <button @click="clickClose()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    dataModal: Object
  },
  dataModal() {
    return {
      isActive: Boolean
    };
  },
  beforeMount() {
    this.isActive = this.toggler;
    import("pdfjs-dist/webpack").then(pdfjs => {
      this.translatePdfToImg(pdfjs);
    });
  },
  methods: {
    test() {
      import("pdfjs-dist/webpack").then(pdfjs => {
        this.translatePdfToImg(pdfjs, this.val.nb);
      });
    },
    clickClose() {
      this.isActive = false;
      this.$emit("childToggler", this.isActive);
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