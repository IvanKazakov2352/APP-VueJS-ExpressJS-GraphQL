<template>
  <div>
    <b-table-simple hover v-if="usersCount">
      <b-thead>
        <b-tr>
          <b-th>Имя пользователя</b-th>
          <b-th>Возраст пользователя</b-th>
          <b-th>Email пользователя</b-th>
          <b-th>Удалить</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="user in users" :key="user.id">
          <b-td>{{ user.name }}</b-td>
          <b-td>{{ user.age }}</b-td>
          <b-td>{{ user.email }}</b-td>
          <b-td>
            <b-button variant="danger" @click="removeUser(user)"
              >Удалить</b-button
            >
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-card v-else text-variant="dark" title="Пользователей пока нет!">
    </b-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    removeUser(user) {
      this.$store.dispatch("removeUser", user);
    },
  },
  computed: {
    ...mapGetters(["users", "usersCount"]),
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
