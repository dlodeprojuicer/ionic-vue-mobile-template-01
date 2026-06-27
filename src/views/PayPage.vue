<template>
  <ion-page class="ion-padding">
    <PayCardOverview />
    <PeopleComponent :data="people" />
    <FormComponent />
    <ion-button color="dark">
      Send
    </ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonButton } from "@ionic/vue";

import FormComponent from "@/components/FormComponent.vue";
import PeopleComponent from "@/components/People.vue";
import PayCardOverview from "@/components/PayCardOverview.vue";

interface Person {
  name: string;
  image: string;
}

const people: Person[] = [
  {
    name: "Person Name",
    image: "assets/img/makazoli.png"
  },
  {
    name: "Person Name",
    image: "assets/img/max.png"
  },
  {
    name: "Person Name",
    image: "assets/img/lewis.png"
  },
  {
    name: "Person Name",
    image: "assets/img/snoop.png"
  }
];
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px) {
  .test{
    display: none;
  }
}

ion-grid {
  flex: none;
}

ion-button {
  width: 100%;
  --border-radius: 20px;
  height: 46px;
  text-transform: none;
}
</style>
