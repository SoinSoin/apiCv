<template>
    <section class="section">
        <div class="columns">
            <div class="column is-3">
                <div class="columns is-6 is-multiline">
                    <div class="column is-12 box">
                        <dropzone ref="dropzone" id="drop1"></dropzone>
                    </div>
                    <div class="column is-12"></div>
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
    </section>
</template>


<script>
import Me from "@/services/me";
export default {
  name: "MeForm",
  props: {
    dataTarget: String
  },
  data() {
    return {
      data: Array
    };
  },
  beforeMount() {
    Me.ViewsTarget(this.$route.query.q).then(
      data => (this.data = data.data.val[0])
    );
  }
};
</script>

<style scoped>
</style>

