import { Sweetalert } from "~/assets/sweetalert";

export const UsersBreakController = {
  post: {
    user: async (payload) => {
      console.log(
        "🚀 ~ file: userbreak.controller.js ~ line 6 ~ user: ~ payload",
        payload
      );
      const { data } = await $nuxt.$api.post(`users/breakuser/`, payload);
      // console.log(
      //   "🚀 ~ file: userbreak.controller.js ~ line 7 ~ user: ~ data",
      //   data
      // );
      // const { name, last_name } = payload;
      // const firstNameLetter = name.split(" ")[0].slice(0, 1);
      // const firstLastName = last_name.split(" ")[0];
      // payload.user = name + " " + last_name;
      // // payload.cost_center =
      // //   $nuxt.$store.state.localStorage.username.cost_center;
      // // payload.is_active = true;
      // try {
      // if (data) {
      // $nuxt.$store.dispatch("user.store/actResetState");
      // $nuxt.$store.dispatch("app/actUpdateValue", {
      //   key: "isDialog",
      //   value: false,
      // });
      // $nuxt.refresh();
      //   Sweetalert.alert({
      //     title: "Excelente!",
      //     text: "Usuario creado",
      //     timer: 1500,
      //   });
      // }
      // } catch (error) {
      //   let errorEmail1;
      //   if (error.response.data.error.email) {
      //     errorEmail1 = error.response.data.error.email[0].toUpperCase();
      //   } else {
      //     errorEmail1 = error.response.data.error.username[0].toUpperCase();
      //   }
      //   const firstLetterMessage = errorEmail1.substr(0, 1);
      //   const restOfMessage = errorEmail1
      //     .substr(1, errorEmail1.length)
      //     .toLowerCase();
      //   Sweetalert.alert({
      //     icon: "error",
      //     title: "Ups!",
      //     text: firstLetterMessage + restOfMessage,
      //     timer: 2000,
      //   });
      // }
    },
  },
};
