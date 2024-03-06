<template>
  <ion-page class="ion-padding">
    <ion-content>
      <ion-grid class="overview-wrapper">
        <ion-row>
          <ion-col class="overview">Overview</ion-col>
          <ion-col>
            <ion-icon :icon="add" class="overview-add"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>

      <CardWallet :data="cards" />

      <SectionDivider data="Expenses" />

      <RecentList :data="recentList"/>

      <QuickActions />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonCol, IonGrid, IonIcon, IonPage, IonRow, IonContent } from '@ionic/vue';
import { add } from "ionicons/icons";
import CardWallet from "@/components/CardWallet.vue";
import SectionDivider from "@/components/SectionDivider.vue";
import RecentList from "@/components/RecentList.vue";
import QuickActions from "@/components/QuickActions.vue";

export default {
  name: "homePage",
  title: "Home",
  requiresAuth: false,
  components: {
    IonContent,
    QuickActions,
    RecentList,
    SectionDivider,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    CardWallet,
  },
  setup() {
    return {
      add
    }
  },
  data() {
    return {
      cards: [
        {
          cardNumber: "4524 3428 898 239",
          balance: "12 354.05",
          accountName: "Savings",
          expDate: "02/2020",
        },
        {
          cardNumber: "9483 2394 8987 8391",
          balance: "1435.20",
          accountName: "Savings",
          expDate: "06/2024",
        },
        {
          cardNumber: "3079 485 2395 3944",
          balance: "8 200",
          accountName: "Savings",
          expDate: "08/2022",
        },
      ],
      recentList: [
        {
          name: "Themna Makwa",
          icon: "person",
          cost: "19.30",
          date: "12 Aug 2020, 03:23 am",
        },
        {
          name: "Tami Muthambi",
          icon: "person",
          cost: "6.09",
          date: "10 Aug 2020, 13:40 pm",
        },
        {
          name: "Gary Goat",
          icon: "person",
          cost: "19.30",
          date: "12 Aug 2020, 03:23 am",
        },
        {
          name: "Jackie Chan",
          icon: "person",
          cost: "6.09",
          date: "10 Aug 2020, 13:40 pm",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.overview-wrapper {
  margin-bottom: 10px;
}

.overview {
  font-size: 20px;
  font-weight: 600;
}

.overview-add {
  background: #ffffff;
  padding: 0;
  border-radius: 10px;
  color: #000;
  float: right;
  font-size: 28px;
}
</style>
