<template>
  <section class="section">
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
      <div class="columns">
        <div class="column is-4"></div>
        <div class="column is-2 is-full-centered">
          <button @click="returnVal()" class="button is-success is-rounded is-full-centered">
            <font-awesome-icon fas icon="check" size="lg"/>
          </button>
        </div>
        <div class="column is-2 is-full-centered">
          <button @click="callGetApi()" class="button is-danger is-rounded is-full-centered">
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
import Modal from "@/components/global/Modal";
export default {
  name: "MeForm",
  components: {
    Modal
  },
  props: {
    dataTarget: String
  },
  data() {
    return {
      data: {},
      toggler: false,
      files: {}
    };
  },
  beforeMount() {
    this.callGetApi();
    var date = new Date();
    date.setTime(Date.now());
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    console.log(hour, ":", minutes, ":", seconds);
  },
  methods: {
    processFile(event, key) {
      this.data[key] = URL.createObjectURL(event.target.files[0]);
      this.files[key] = event.target.files[0];
    },
    callGetApi() {
      Me.ViewsTarget(this.$route.query.q).then(
        data => (this.data = data.data.val[0])
      );
    },
    returnVal() {
      var data = {
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        email: this.data.email,
        phone: this.data.phone,
        description: this.data.description,
        image: this.files.image,
        papercv: this.files.papercv
      };
      for (var prop in data) {
        if (data[prop] === undefined) {
          delete data[prop];
        }
      }
      var objClean = {
        id: this.data._id,
        value: data
      };
      this.sendData(objClean);
    },
    sendData(objClean) {
      Me.updateMe(objClean).then(data => console.log(data));
    },
    childClick(event) {
      this.toggler = event;
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


