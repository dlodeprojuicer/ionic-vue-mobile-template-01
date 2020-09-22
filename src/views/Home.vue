<template>
  <ion-page class="ion-padding">
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

    <RecentList :data="recentList" />

    <QuickActions />
  </ion-page>
</template>

<script>
import { IonPage, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import SectionDivider from "../components/SectionDivider";
import CardWallet from "../components/CardWallet";
import RecentList from "../components/RecentList";
import QuickActions from "../components/QuickActions";

export default {
  name: "home",
  title: "Home",
  requiresAuth: false,
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    SectionDivider,
    CardWallet,
    RecentList,
    QuickActions,
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

<style lang="scss" scoped>
.overview-wrapper {
  margin-bottom: 10px;
}

.overview {
  font-size: 20px;
  font-weight: 600;
}

.overview-add {
  background: #ffffff;
  padding: 0px;
  border-radius: 10px;
  color: #000;
  float: right;
  font-size: 28px;
}
</style>
