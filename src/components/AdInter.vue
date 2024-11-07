<!-- InterstitialAd.vue -->
<template>
  <div v-if="adVisible" class="interstitial-ad-container">
    <!-- Optional overlay or loading message can be added here -->
  </div>
</template>

<script>
import { AdMob } from '@capacitor-community/admob';

export default {
  props: {
    adId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      adVisible: false,
    };
  },
  methods: {
    async loadInterstitialAd() {
      try {
        await AdMob.prepareInterstitial({
          adId: this.adId,
          isTesting: true, // Set to false for production
        });
        console.log('Interstitial ad loaded');
      } catch (error) {
        console.error('Error loading interstitial ad:', error);
      }
    },
    async showInterstitialAd() {
      try {
        const adLoaded = await AdMob.showInterstitial();
        if (adLoaded) {
          this.adVisible = true;
        } else {
          console.warn('Interstitial ad not ready; reloading');
          await this.loadInterstitialAd(); // Load again if it wasn’t ready
        }
      } catch (error) {
        console.error('Error displaying interstitial ad:', error);
      }
    },
  },
  async mounted() {
    await this.loadInterstitialAd();
  },
  beforeUnmount() {
    this.adVisible = false;
  },
};
</script>

<style scoped>
.interstitial-ad-container {

}
</style>
