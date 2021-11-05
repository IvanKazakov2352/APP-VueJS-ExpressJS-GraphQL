<template>
  <div>
    <b-col cols="12" sm="4">
      <b-form-input
        class="mt-3"
        v-model="name"
        placeholder="Введите имя"
      ></b-form-input>
    </b-col>
    <b-col cols="12" sm="4">
      <b-form-input
        class="mt-3"
        v-model.number="age"
        placeholder="Введите возраст"
      ></b-form-input>
    </b-col>
    <b-col cols="12" sm="4">
      <b-form-input
        class="mt-3"
        v-model="email"
        placeholder="Введите Email"
      ></b-form-input>
    </b-col>

    <b-button class="mt-3" block variant="primary" @click="addUser"
      >Добавить пользователя</b-button
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    name: null,
    age: null,
    email: null,
  }),
  methods: {
    addUser() {
      const user = {
        id: this.$uuid.v4(),
        name: this.name,
        age: this.age,
        email: this.email,
      };
      this.$store.dispatch("addedUser", user)
    },
  },
};
</script>
