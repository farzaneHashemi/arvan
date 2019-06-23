<template>
  <!-- <b-nav vertical>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav> -->
  <b-nav tabs vertical id="sidebar">
    <span id="sidebar-hdr">Post</span>
    <b-nav-item :to="{ name: 'articles' }" >All Articles</b-nav-item>
    <b-nav-item :to="{ name: 'create' }">New Article</b-nav-item>
    <!-- <b-nav-nav>
      <b-nav-item href="/articles">Articles</b-nav-item>
      <b-nav-item href="/login">Login</b-nav-item>
    </b-nav-nav> -->
  </b-nav>
</template>


<script>
export default {
  name: "sidebar",
  components: {}
};
</script>

<style scoped>
#sidebar {
  background-color: #56c0e0;
  width: 12em;
  color: white;
  /* text-align: left */
}

a {
  color: white;
  font-size: 1em;
}

 router-link-active {
  background-color: #DCEDF6;
}

.nav-link.active{
  /* background-color: #DCEDF6 !important; */
}

b-nav-item:active {
  background-color: aqua;
}

#sidebar-hdr {
  margin-left: 1.5em;
  text-align: left;
}
</style>

