import { Sweetalert } from "~/assets/sweetalert";

export const UsersController = {
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
    users: async () => {
      const { data } = await $nuxt.$api.get("users/user/");
      return data.rows;
    },
  },
  put: {
    user: async (payload) => {
      const { data } = await $nuxt.$api.put(
        `users/user/${payload.id}/`,
        payload
      );

      if (data) {
        $nuxt.$emit("changeDialog", false);
        Sweetalert.alert({
          title: "Excelente!",
          text: "Usuario actualizado",
          timer: 1500,
        });
      }
    },
  },
};
