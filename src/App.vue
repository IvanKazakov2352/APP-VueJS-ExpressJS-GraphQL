<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-col class="mt-5 mb-4">
        <Form></Form>
      </b-col>
      <Table></Table>
    </b-container>
  </div>
</template>
<script>
const Navbar = () => import("./components/Navbar.vue");
const Table = () => import("./components/Table.vue");
const Form = () => import("./components/Form.vue");
export default {
  components: {
    Navbar,
    Table,
    Form,
  },
};
</script>
