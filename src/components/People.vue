<template>
  <div style="margin-bottom: 15px;">
    <swiper :slides-per-view="3">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <div class="white-card">
          <ion-card-header>
            <img :src="item.image"  alt="avatar"/>
            <ion-card-title>{{ item.name }}</ion-card-title>
          </ion-card-header>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css'
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "peopleComponent",
  components: { Swiper, SwiperSlide, IonCard, IonCardHeader, IonCardTitle },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.white-card {
  background: #ffffff;
  width: 120px;
  height: 120px !important;
  border-radius: 20px;
  margin: 0 5px;
}

img {
  padding: 7px;
  border-radius: 20px;
}

ion-card-title {
  font-size: 11px !important;
  text-align: center;
}

ion-button {
  width: 100%;
  text-transform: none;
  height: 40px;
  --border-radius: 15px;
}

</style>