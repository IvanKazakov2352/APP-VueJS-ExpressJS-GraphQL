import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { addUser } from "../server/schema/resolver";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const query = `
        query {
          getUsers {
            id name age email
          }
        }
      `;
      const data = JSON.stringify({ query });
      const res = await axios.post("http://localhost:5000/graphql", data, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      commit("setUsers", res.data.data.getUsers);
    },
    async addedUser({ dispatch }, payload) {
      const query = `
        mutation {
          createUser(user: {id: "${payload.id}", name: "${payload.name}", age: ${payload.age}, email: "${payload.email}"}) {
            id name age email
          }
        }
      `;
      const data = JSON.stringify({ query });
      await axios.post("http://localhost:5000/graphql", data, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      dispatch("fetchUsers")
    },
    async removeUser({ dispatch }, payload) {
      const query = `
        mutation {
          deleteUser(id: "${payload.id}") {
            id name age email
          }
        }
      `
      const data = JSON.stringify({ query });
      await axios.post("http://localhost:5000/graphql", data, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      dispatch("fetchUsers")
    },
  },
  getters: {
    users: (state) => state.users,
    usersCount: (state) => state.users.length
  },
});
