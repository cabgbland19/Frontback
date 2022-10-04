<template>
  <v-form @submit.prevent="sendform" v-model="isFormValid">
    Gestion GTC
    <v-row>
      <!-- Informacion del asesor -->
      <v-col cols="12" class="d-flex justify-center"
        ><h1 class="primary--text">Informacion del asesor</h1>
      </v-col>
      <v-col cols="6"><Input label="Gestor" :readonly="true" /></v-col>
      <v-col cols="6"
        ><Input label="Usuario de red" :rules="rules.userRed"
      /></v-col>
      <v-col cols="6"
        ><Input label="Nombre del asesor" :rules="rules.asesorName"
      /></v-col>
      <v-col cols="6"
        ><Input label="Team leader" :rules="rules.teamLeader"
      /></v-col>
      <v-col cols="6"> <Input label="Gerente" :rules="rules.boss" /></v-col>
      <!-- Informacion de la gestion-->
      <v-col cols="12" class="d-flex justify-center"
        ><h1 class="primary--text">Informacion de la gestion</h1>
      </v-col>
      <v-col cols="6"><Input label="Cuenta" :readonly="true" /></v-col>
      <v-col cols="6"
        ><Select
          label="Contacto"
          :rules="rules.contact"
          :items="itemsContacts"
        ></Select
      ></v-col>
      <v-col cols="6"
        ><Input label="Id de llamada" :rules="rules.callId"
      /></v-col>
      <v-col cols="6"
        ><Select
          label="GTC aplica"
          :rules="rules.gtcApply"
          :items="itemsApplyGtc"
        ></Select
      ></v-col>
      <v-col cols="6"
        ><Select
          label="Motivo GTC"
          :rules="rules.gtcReason"
          :items="itemsGtcReason"
        ></Select
      ></v-col>
      <v-col cols="6"> <Input label="Marcacion" :rules="rules.mark" /></v-col>
      <v-col cols="6"
        ><Select
          label="Solucionado"
          :rules="rules.solution"
          :items="itemsSolution"
        ></Select
      ></v-col>
      <v-col cols="6"
        ><Select
          label="Tipo de solucion"
          :rules="rules.typeSolution"
          :items="itemsTypeSolution"
        ></Select
      ></v-col>
      <v-col cols="6"> <Input label="Fecha solucion" :readonly="true" /></v-col>
      <v-col cols="12">
        <Textarea label="Observacion" :rules="rules.observation"></Textarea
      ></v-col>

      <!-- Ajuste-->
      <v-col cols="12" class="d-flex justify-center"
        ><h1 class="primary--text">Ajuste:</h1>
      </v-col>
      <v-col cols="6"
        ><Input label="Valor diferencial" :rules="rules.differenceValue"
      /></v-col>
      <v-col cols="6"
        ><Input label="Valor Mensual" :rules="rules.monthlyValue"
      /></v-col>
      <v-col cols="6"
        ><Input label="Meses ajuste" :rules="rules.monthsAdjustments"
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
  </v-form>
</template>

<script>
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
    };
  },
  methods: {
    sendform() {
      console.log("ok");
    },
  },
};
</script>

<style></style>
