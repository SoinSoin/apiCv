<template>
  <section class="section">
    <toast v-if="close===false" :dataNotif="res" :close="close" @childClose="childClose"></toast>
    <div class="columns">
      <div class="column is-3 is-full-centered">
        <div class="columns is-6 is-multiline">
          <div class="column is-12"></div>
          <div class="columns is-multiline">
            <div class="column is-12 is-full-centered">
              <div class="is-circle has-background-white padding-box-list">
                <figure class="image is-128x128">
                  <img class="has-background-white is-rounded" :src="data.image">
                </figure>
              </div>
            </div>
            <div class="column is-12 is-full-centered">
              <div class="field">
                <div class="file">
                  <label class="file-label is-rounded-alone">
                    <input
                      @change="processFile($event, 'image')"
                      class="file-input"
                      type="file"
                      name="resume"
                    >
                    <span class="file-cta has-background-white">
                      <span class="file-icon">
                        <font-awesome-icon fas icon="upload" size="lg"/>
                      </span>
                      <span class="file-label">profile image</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12"></div>
        </div>
      </div>
      <div class="column is-9">
        <div class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <font-awesome-icon fas icon="id-card" size="lg"/>
            </div>
          </div>
          <div class="column is-4">
            <div class="box padding-box-list is-rounded-alone">
              <div class="field">
                <div class="control">
                  <div class="columns is-mobile">
                    <div class="column is-2 is-paddingless"></div>
                    <div class="column is-10 is-paddingless">
                      <input
                        class="input is-backgroundless is-borderless is-shadowless"
                        type="text"
                        v-model="data.firstname"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="box padding-box-list is-rounded-alone">
              <div class="field">
                <div class="control">
                  <div class="columns is-mobile">
                    <div class="column is-2 is-paddingless"></div>
                    <div class="column is-10 is-paddingless">
                      <input
                        class="input is-backgroundless is-borderless is-shadowless"
                        type="text"
                        v-model="data.lastname"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
        <div class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <font-awesome-icon fas icon="envelope" size="lg"/>
            </div>
          </div>
          <div class="column is-8">
            <div class="box padding-box-list is-rounded-alone">
              <div class="field">
                <div class="control">
                  <div class="columns is-mobile">
                    <div class="column is-2 is-paddingless"></div>
                    <div class="column is-10 is-paddingless">
                      <input
                        class="input is-backgroundless is-borderless is-shadowless"
                        type="text"
                        v-model="data.email"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
        <div class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <font-awesome-icon fas icon="phone" size="lg"/>
            </div>
          </div>
          <div class="column is-8">
            <div class="box padding-box-list is-rounded-alone">
              <div class="field">
                <div class="control">
                  <div class="columns is-mobile">
                    <div class="column is-2 is-paddingless"></div>
                    <div class="column is-10 is-paddingless">
                      <input
                        class="input is-backgroundless is-borderless is-shadowless"
                        type="text"
                        v-model="data.phone"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
        <div class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <font-awesome-icon fas icon="edit" size="lg"/>
            </div>
          </div>
          <div class="column is-8">
            <div class="box padding-box-list">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-backgroundless is-borderless is-shadowless has-fixed-size"
                    v-model="data.description"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
        <div class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <!-- <font-awesome-icon fas icon="filePdf" size="lg"/> -->
            </div>
          </div>
          <div class="column is-8 is-full-centered">
            <div class="field has-addons">
              <div class="control">
                <button class="button border-radius-left" @click="clickOpen()">
                  <p>
                    <font-awesome-icon fas icon="eye"/>cv
                  </p>
                </button>
              </div>
              <div class="control">
                <div class="file">
                  <label class="file-label has-bg-white">
                    <input
                      @change="processFile($event, 'papercv')"
                      class="file-input"
                      type="file"
                      name="resume"
                    >
                    <span class="file-cta border-radius-right has-background-white">
                      <span class="file-icon">
                        <font-awesome-icon fas icon="upload" size="lg"/>
                      </span>
                      <span class="file-label">choisir cv</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-4"></div>
        <div class="column is-2 is-full-centered">
          <button @click="sendData()" class="button is-success btn-square is-circle is-full-centered">
            <font-awesome-icon fas icon="check" size="lg"/>
          </button>
        </div>
        <div class="column is-2 is-full-centered">
          <button @click="cancel()" class="button is-danger btn-square is-circle is-full-centered">
            <font-awesome-icon fas icon="times" size="lg"/>
          </button>
        </div>
        <div class="column is-4"></div>
      </div>
    </div>
    <modal
      v-if="toggler===true"
      :dataModal="{url:data.papercv}"
      :toggler="toggler"
      @childToggler="childClick"
    />
  </section>
</template>


<script>
import Me from "@/services/me";
import Modal from "@/components/admin/global/Modal/Modal";
import Toast from "@/components/admin/global/Toast";
export default {
  name: "MeForm",
  components: {
    Modal,
    Toast
  },
  props: {
    dataTarget: String
  },
  data() {
    return {
      res: Object,
      data: {},
      toggler: false,
      close: true,
      files: {}
    };
  },
  beforeMount() {
    this.$watch(this.callGetApi);
  },
  methods: {
    processFile(event, key) {
      this.$set(this.data, key, URL.createObjectURL(event.target.files[0]));
      this.files[key] = event.target.files[0];
    },
    callGetApi() {
      if (this.$route.name === "edit") {
        Me.ViewsTarget(this.$route.query.q).then(
          data => (this.data = data.data.val[0])
        );
      }
    },
    cancel() {
      this.callGetApi();
      this.files = {};
    },
    returnVal() {
      var bodyData = new FormData();
      for (var attrFile in this.files) {
        delete this.data[attrFile];
        bodyData.append(attrFile, this.files[attrFile]);
      }
      for (var attr in this.data) {
        if (this.data[attr] !== undefined)
          bodyData.set(attr, this.data[attr]);
      }
      return bodyData;
    },
    sendData() {
      if (this.$route.name === "new") this.createMe();
      if (this.$route.name === "edit") this.updateMe();
    },
    updateMe() {
      var objClean = {
        id: this.data._id,
        value: this.returnVal()
      };
      Me.updateMe(objClean).then(data => {
        this.res = data.data;
        this.callGetApi();
        this.files = {};
        this.close = false;
      });
    },
    createMe() {
      Me.createMe(this.returnVal()).then(data => {
        this.res = data.data;
        this.files = {};
        this.close = false;
        console.log(data.data);
        return this.$router.push({
          name: "edit",
          params: { name: `${data.data.firstname}-${data.data.lastname}` },
          query: { q: data.data._id }
        });
      });
    },
    childClick(event) {
      this.toggler = event;
    },
    childClose(event) {
      this.close = event;
    },
    clickOpen() {
      this.toggler = true;
    }
  }
};
// npm install pdf js see pdf js dist
</script>
<style scoped>
</style>


