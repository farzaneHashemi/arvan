<template>
  <div class="row">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="col-md-10 row">
      <div class="col-md-12">
        <h2 class="float-left" id="all-posts-hdr">All Posts</h2>
      </div>

      <div class="col-md-12">
        <mdb-tbl btn responsive>
          <mdb-tbl-head>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Tags</th>
              <th>Excerpt</th>
              <th>Created</th>
              <th></th>
            </tr>
          </mdb-tbl-head>
          <mdb-tbl-body>
            <tr v-bind:key="article.id" v-for="article in articles">
              <td>{{article.no}}</td>
              <td>{{article.title}}</td>
              <td>{{article.author}}</td>
              <td>{{article.tag}}</td>
              <td>{{article.excrept}}</td>
              <td>{{article.created}}</td>
              <td>
                <b-dropdown
                  split
                  split-variant="outline-info"
                  variant="info"
                  text="..."
                  class="m-2"
                >
                  <b-dropdown-item @click="$emit('edit', article.id)">Edit</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="$emit('delete', article.id)">Delete</b-dropdown-item>
                </b-dropdown>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import { mdbTbl, mdbTblHead, mdbTblBody } from "mdbvue";
export default {
  name: "articles",
  components: {
    Sidebar,
    Header,
    mdbTbl,
    mdbTblHead,
    mdbTblBody
  },
  data() {
    return {
      articles: [
        {
          no: "1",
          id: 1,
          title: "asdf",
          author: "man",
          tags: "list",
          excerpt: "ewerwerwer",
          created: "20 Jun 2018"
        },
        {
          no: "1",
          id: 2,
          title: "asdf",
          author: "man",
          tags: "list",
          excerpt: "ewerwerwer",
          created: "20 Jun 2018"
        },
        {
          no: "1",
          id: 3,
          title: "asdf",
          author: "man",
          tags: "list",
          excerpt: "ewerwerwer",
          created: "20 Jun 2018"
        },
        {
          no: "1",
          id: 4,
          title: "asdf",
          author: "man",
          tags: "list",
          excerpt: "ewerwerwer",
          created: "20 Jun 2018"
        },
        {
          no: "1",
          id: 5,
          title: "asdf",
          author: "man",
          tags: "list",
          excerpt: "ewerwerwer",
          created: "20 Jun 2018"
        }
      ]
    };
  }
};
</script>

<style>
thead {
  background-color: #eceeef;
}

#all-posts-hdr {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
