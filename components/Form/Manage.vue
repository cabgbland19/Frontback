<template>
  <v-form @submit.prevent="sendform" v-model="isFormValid">
    Gestion GTC
    <v-row>
      <v-col cols="5">
        <v-card
          max-height="500"
          class="mt-15 d-flex align-center justify-center rounded-xl"
          style="height: 100vh"
          color="#1178640F"
        >
          <v-row>
            <v-col cols="12" class="mb-5 text-center">
              <h3 class="primary--text">MCH Cuenta</h3>
              <span>{{ cuenta }}</span>
            </v-col>
            <v-col cols="12" class="mb-5 text-center">
              <h3 class="primary--text">Periodo</h3>
              <span>{{ periodo }}</span>
            </v-col>
            <v-col cols="12" class="text-center">
              <h3 class="primary--text">Nota</h3>
              <span>{{ notas_gtc }}</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-row>
          <!-- Informacion del asesor -->
          <v-col cols="12" class="d-flex justify-center"
            ><h1 class="primary--text">Informacion del asesor</h1>
          </v-col>
          <v-col cols="6"
            ><Input label="Gestor" :readonly="true" :model.sync="model.gestor"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Usuario de red"
              :rules="rules.userRed"
              :model.sync="model.usuario_de_red"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Nombre del asesor"
              :rules="rules.asesorName"
              :model.sync="model.nombre_asesor"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Team leader"
              :rules="rules.teamLeader"
              :model.sync="model.team_leader"
          /></v-col>
          <v-col cols="6">
            <Input
              label="Gerente"
              :rules="rules.boss"
              :model.sync="model.gerente"
          /></v-col>
          <!-- Informacion de la gestion-->
          <v-col cols="12" class="d-flex justify-center"
            ><h1 class="primary--text">Informacion de la gestion</h1>
          </v-col>
          <v-col cols="6"
            ><Input label="Cuenta" :readonly="true" :model.sync="model.cuenta"
          /></v-col>
          <v-col cols="6"
            ><Select
              label="Contacto"
              :rules="rules.contact"
              :items="itemsContacts"
              :model.sync="model.contacto"
            ></Select
          ></v-col>
          <v-col cols="6"
            ><Input
              label="Id de llamada"
              :rules="rules.callId"
              :model.sync="model.id_llamada"
          /></v-col>
          <v-col cols="6"
            ><Select
              label="GTC aplica"
              :rules="rules.gtcApply"
              :items="itemsApplyGtc"
              :model.sync="model.gtcaplica"
            ></Select
          ></v-col>
          <v-col cols="6"
            ><Select
              label="Motivo GTC"
              :rules="rules.gtcReason"
              :items="itemsGtcReason"
              :model.sync="model.motivo_gtc"
            ></Select
          ></v-col>
          <v-col cols="6">
            <Input
              label="Marcacion"
              :rules="rules.mark"
              :model.sync="model.marcacion"
          /></v-col>
          <v-col cols="6"
            ><Select
              label="Solucionado"
              :rules="rules.solution"
              :items="itemsSolution"
              :model.sync="model.solucionado"
            ></Select
          ></v-col>
          <v-col cols="6"
            ><Select
              label="Tipo de solucion"
              :rules="rules.typeSolution"
              :items="itemsTypeSolution"
              :model.sync="model.tipo_solucion"
            ></Select
          ></v-col>
          <v-col cols="6">
            <Input
              label="Fecha solucion"
              :readonly="true"
              :model.sync="model.fecha_solcionado"
          /></v-col>
          <v-col cols="12">
            <Textarea
              label="Observacion"
              :rules="rules.observation"
              :model.sync="model.campo_observacion"
            ></Textarea
          ></v-col>

          <!-- Ajuste-->
          <v-col cols="12" class="d-flex justify-center"
            ><h1 class="primary--text">Ajuste:</h1>
          </v-col>
          <v-col cols="6"
            ><Input
              label="Valor diferencial"
              :rules="rules.differenceValue"
              :model.sync="model.valor_diferencial"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Valor Mensual"
              :rules="rules.monthlyValue"
              :model.sync="model.valor_mensual"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Meses ajuste"
              :rules="rules.monthsAdjustments"
              :model.sync="model.meses_ajuste"
          /></v-col>

          <v-col cols="12">
            <Button
              label="Enviar"
              class="float-right"
              type="submit"
              :disabled="!isFormValid"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import { SubmitController } from "~/controllers/gtc/submit.controller";
export default {
  data() {
    return {
      isFormValid: true,
      rules: {
        userRed: [(v) => !!v || "El campo usuario de red es requerido"],
        asesorName: [(v) => !!v || "El campo Nombre del asesor es requerido"],
        teamLeader: [(v) => !!v || "El campo Team leader es requerido"],
        boss: [(v) => !!v || "El campo Gerente es requerido"],
        account: [(v) => !!v || "El campo Cuenta es requerido"],
        contact: [(v) => !!v || "El campo Contacto es requerido"],
        callId: [(v) => !!v || "El campo Id de llamada es requerido"],
        gtcApply: [(v) => !!v || "El campo GTC aplica es requerido"],
        gtcReason: [(v) => !!v || "El campo Motivo GTC es requerido"],
        mark: [(v) => !!v || "El campo Marcacion es requerido"],
        solution: [(v) => !!v || "El campo Solucionado es requerido"],
        typeSolution: [(v) => !!v || "El campo Tipo de solucion es requerido"],
        observation: [(v) => !!v || "El campo Observacion es requerido"],
        differenceValue: [
          (v) => !!v || "El campo Valor diferencial es requerido",
        ],
        monthlyValue: [(v) => !!v || "El campo Valor Mensual es requerido"],
        monthsAdjustments: [(v) => !!v || "El campo Meses ajuste es requerido"],
      },
      itemsContacts: [
        {
          text: "Si",
          value: "Si",
        },
        {
          text: "No",
          value: "No",
        },
      ],
      itemsApplyGtc: [
        {
          text: "Si",
          value: "Si",
        },
        {
          text: "No",
          value: "No",
        },
      ],
      itemsGtcReason: [
        {
          text: "NO REALIZA CAMBIO DE TARIFA",
          value: "NO REALIZA CAMBIO DE TARIFA",
        },
        {
          text: "NO CORRESPONDE A UNO27",
          value: "NO CORRESPONDE A UNO27",
        },
        {
          text: "NO APLICA CAMPAÑA",
          value: "NO APLICA CAMPAÑA",
        },
        {
          text: "NO REALIZA AJUSTE",
          value: "NO REALIZA AJUSTE",
        },
        {
          text: "COBROS ADICIONALES",
          value: "COBROS ADICIONALES",
        },
        {
          text: "CANCELACION NO EJECUTADA",
          value: "CANCELACION NO EJECUTADA",
        },
        {
          text: "GTC ESCALADA ERRONEAMENTE",
          value: "GTC ESCALADA ERRONEAMENTE",
        },
        {
          text: "TARIFA ERRADA",
          value: "TARIFA ERRADA",
        },
        {
          text: "INFORMACION ERRADA",
          value: "INFORMACION ERRADA",
        },
        {
          text: "NO REALIZA SUSPENSION",
          value: "NO REALIZA SUSPENSION",
        },
      ],
      itemsTypeSolution: [
        {
          text: "NO CORRESPONDE A UNO27",
          value: "NO CORRESPONDE A UNO27",
        },
        {
          text: "GTC NO APLICA",
          value: "GTC NO APLICA",
        },
        {
          text: "SE APLICA CAMPAÑA",
          value: "SE APLICA CAMPAÑA",
        },
        {
          text: "YA GESTIONADO POR OTRO CANAL",
          value: "YA GESTIONADO POR OTRO CANAL",
        },
        {
          text: "SE REALIZA AJUSTE",
          value: "SE REALIZA AJUSTE",
        },
        {
          text: "RETENCION POSTERIOR",
          value: "RETENCION POSTERIOR",
        },
        {
          text: "SE APLICA CAMBIO DE TARIFA",
          value: "SE APLICA CAMBIO DE TARIFA",
        },
        {
          text: "CANCELACION POSTERIOR",
          value: "CANCELACION POSTERIOR",
        },
        {
          text: "SE REALIZA CANCELACION",
          value: "SE REALIZA CANCELACION",
        },
        {
          text: "SE AGENDA VISITA",
          value: "SE AGENDA VISITA",
        },
        {
          text: "YA CANCELADO",
          value: "YA CANCELADO",
        },
        {
          text: "SE GENERA RETENCION CRUZADA",
          value: "SE GENERA RETENCION CRUZADA",
        },
        {
          text: "ACLARACION DE INFORMACION",
          value: "ACLARACION DE INFORMACION",
        },
        {
          text: "PROCESO PQR",
          value: "PROCESO PQR",
        },
        {
          text: "NO ES PROCEDENTE",
          value: "NO ES PROCEDENTE",
        },
      ],
      itemsSolution: [
        {
          text: "Si",
          value: "Si",
        },
        {
          text: "No",
          value: "No",
        },
      ],
      model: {
        cuenta: null,
        contacto: null,
        gtcaplica: null,
        tipo_solucion: null,
        motivo_gtc: null,
        campo_observacion: null,
        valor_diferencial: null,
        marcacion: null,
        solucionado: null,
        fecha_solcionado: new Date().toISOString().split("T")[0],
        gestor: null,
        valor_mensual: null,
        meses_ajuste: null,
        id_llamada: null,
        usuario_de_red: null,
        nombre_asesor: null,
        team_leader: null,
        gerente: null,
      },
    };
  },
  methods: {
    postGestion: SubmitController.post.gestion,

    sendform() {
      this.postGestion(this.model);
    },
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     $nuxt.$on("register", (val) => {
  //       this.model = val;
  //       console.log(val);
  //     });
  //   });
  // },
  computed: {
    ...mapState("app", ["cuenta", "periodo", "notas_gtc"]),
    ...mapState("localStorage", ["username"]),
  },
  created() {
    this.model.cuenta = this.cuenta;
    this.model.gestor = this.username.username;
  },
};
</script>

<style></style>
