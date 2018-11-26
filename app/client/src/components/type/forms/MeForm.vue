<template>
    <section class="section">
        <div class="columns">
            <div class="column is-3">
                <div class="columns is-6 is-multiline">
                    <div class="column is-12 is-full-centered">
                        <div class="is-circle has-background-white padding-box-list">
                            <figure class="image is-128x128">
                                <img class="has-background-white is-rounded" :src="data.image">
                            </figure>
                        </div>
                    </div>
                    <div class="column is-12 is-full-centered">
                        <div class="field">
                            <div class="file is-medium">
                                <label class="file-label has-bg-white is-rounded-alone">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
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
                <div class="columns is-multiline">
                    <div class="column is-12 is-full-centered">
                        <button class="button is-rounded" @click="clickOpen()">voir cv</button>
                    </div>
                    <div class="column is-12 is-full-centered">
                        <div class="field">
                            <div class="file is-medium">
                                <label class="file-label has-bg-white is-rounded-alone">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
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
            </div>
            <div class="column is-9">
                <div class="columns is-8">
                    <div class="column is-2 is-full-centered">
                        <div class="box padding-box-list is-full-centered is-circle">
                            <font-awesome-icon fas icon="id-card" size="lg"/>
                        </div>
                    </div>
                    <div class="column is-5">
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input is-medium is-rounded is-white is-shadowless"
                                    type="text"
                                    :value="data.firstname"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="column is-5">
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input is-medium is-rounded is-white is-shadowless"
                                    type="text"
                                    :value="data.lastname"
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-8">
                    <div class="column is-1"></div>
                    <div class="column is-2 is-full-centered">
                        <div class="box padding-box-list is-full-centered is-circle">
                            <font-awesome-icon fas icon="envelope" size="lg"/>
                        </div>
                    </div>
                    <div class="column is-9">
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input is-medium is-rounded is-white is-shadowless"
                                    type="text"
                                    :value="data.email"
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-8">
                    <div class="column is-1"></div>
                    <div class="column is-2 is-full-centered">
                        <div class="box padding-box-list is-full-centered is-circle">
                            <font-awesome-icon fas icon="phone" size="lg"/>
                        </div>
                    </div>
                    <div class="column is-9">
                        <div class="field">
                            <div class="control">
                                <input
                                    class="input is-medium is-rounded is-white is-shadowless"
                                    type="text"
                                    :value="data.phone"
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns is-8">
                    <div class="column is-1"></div>
                    <div class="column is-2 is-full-centered">
                        <div class="box padding-box-list is-full-centered is-circle">
                            <font-awesome-icon fas icon="edit" size="lg"/>
                        </div>
                    </div>
                    <div class="column is-9">
                        <div class="field">
                            <div class="control">
                                <textarea
                                    class="textarea is-medium is-white is-shadowless has-fixed-size"
                                    :value="data.description"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
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
      data: Array,
      toggler: false
    };
  },
  beforeMount() {
    Me.ViewsTarget(this.$route.query.q).then(
      data => (this.data = data.data.val[0])
    );
  },
  methods: {
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

