<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-button color="dark" @click="pay">
          <ion-icon :icon="card" class="btn-icon"></ion-icon>Pay
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button color="dark" disabled>
          <ion-icon :icon="swapHorizontal" class="btn-icon"></ion-icon>Transfer
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon, IonButton } from "@ionic/vue";
import { card, swapHorizontal } from "ionicons/icons";

export default {
  name: "quick-actions",
  components: { IonGrid, IonRow, IonCol, IonIcon, IonButton },
  setup() {
    return {
      card,
      swapHorizontal
    }
  },
	methods: {
		pay() {
			this.$router.push("pay");
		}
	}
};
</script>

<style lang="scss" scoped>
ion-button {
  width: 100%;
  text-transform: none;
  height: 40px;
  --border-radius: 15px;
}

.btn-icon {
  margin: -3px 5px;
}
</style>