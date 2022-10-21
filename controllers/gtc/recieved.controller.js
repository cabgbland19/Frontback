export const RecievedController = {
  //   post: {
  //     login: async (payload) => {
  //       const { data } = await $nuxt.$api.post("login/", payload);

  //       if (data.token) {
  //         $nuxt.$store.dispatch("localStorage/actUpdateValue", {
  //           key: "token",
  //           value: data.token,
  //         });
  //         $nuxt.$store.dispatch("localStorage/actUpdateValue", {
  //           key: "username",
  //           value: data.username,
  //         });
  //         $nuxt.$router.push({ name: "management" });
  //       }
  //     },
  //   },
  get: {
    recievedbase: async (base) => {
      const { data } = await $nuxt.$api.get(`bases/recibida/${base}`);
      return data;
    },
  },
  put: {
    recievedbase: async (payload, base) => {
      delete payload.is_active;
      payload.is_active = true;

      await $nuxt.$api.put(`bases/recibida/${base}/${payload.id}/`, payload);
    },
  },
};
