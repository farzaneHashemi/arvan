<template>
  <div class="row">
    <Header></Header>
    <Sidebar></Sidebar>

    <div class="row col-md-10">
      <div class="col-md-12">
        <h2 class="float-left" id="new-posts-hdr">New Article</h2>
      </div>
      <div class="col-md-12 col-lg-12 col-sm-12 row">
        <div class="col-md-5 col-lg-5 col-sm-12">
          <b-form @submit="onSubmitCreate" id="create-form">
            <b-form-group id="gp1" label="Title" label-for="new-title">
              <b-form-input
                id="new-title"
                name="new-title"
                v-model="article.title"
                type="text"
                v-validate="{ required: true}"
                :state="validateState('new-title')"
                aria-describedby="new-title-feedback"
                placeholder="Title"
              ></b-form-input>

              <b-form-invalid-feedback id="new-title-feedback">Required field.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="gp2" label="Description" label-for="new-description">
              <b-form-input
                id="new-description"
                name="new-description"
                v-model="article.description"
                placeholder="Description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="gp3" label="Body" label-for="new-body">
              <b-form-textarea id="new-body" v-model="article.body"></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>

        <!-- tags -->
        <div class="col-md-3 col-lg-3 col-sm-12">
          <b-form @submit="onSubmitTags" id="tag-form">
            <b-form-group id="gp1" label="Tags" label-for="new-tag">
              <b-form-input
                @keyup.enter.native="onSubmitTags"
                id="new-tag"
                name="new-tag"
                v-model="tag_name"
                type="text"
                placeholder="New Tag"
              ></b-form-input>
            </b-form-group>
            <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
          </b-form>

          <div id="tags-wrapper">
            <div class="custom-control custom-checkbox" v-bind:key="tag.id" v-for="tag in tags">
              <input
                type="checkbox"
                class="custom-control-input"
                name="tag.id"
                value="tag.id"
                id="tag.id"
              >
              <label class="custom-control-label" for="tag.id">{{tag.name}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});

export default {
  name: "create",
  components: {
    Header,
    Sidebar
  },
  methods: {
    onSubmitCreate(evt) {
      evt.preventDefault();
      // console.log(JSON.stringify(this.article));
      // console.log({
      //   veeFields: this.veeFields["new-title"],
      //   dirty: this.veeFields["new-title"].dirty,
      //   touched: this.veeFields["new-title"].touched,
      //   veeErrors: this.veeErrors["new-title"]
      // });
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        console.log("salam");
      });
    },
    onSubmitTags(evt) {
      evt.preventDefault();
      if (this.tag_name != "") {
      }
      this.tag_name = "";
    },
    validateState(ref) {
      // console.log({
      //   veeFields: this.veeFields,
      //   veeErrors: this.veeErrors,
      //   validate: this.veeValidate,
      //   cond:
      //     this.veeFields[ref] &&
      //     (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      // });
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    }
  },
  data() {
    return {
      tag_name: "",
      tags: [
        { name: "t1", id: 1 },
        { name: "t3", id: 3 },
        { name: "t2", id: 2 },
        { name: "t4", id: 4 }
      ],
      article: {
        title: "",
        description: "",
        body: ""
      }
    };
  }
};
</script>

<style scopped>
#new-posts-hdr {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0.5em;
}

#create-form,
#tag-form {
  text-align: left;
}

#tags-wrapper {
  border: 1px solid #ced5da;
  border-radius: 4px;
  text-align: left;
  padding: 10px;
  min-height: 11em;
}
</style>
