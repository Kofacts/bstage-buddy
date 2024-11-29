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
      isInterstitialReady: false, // Track if the interstitial ad is ready
    };
  },
  methods: {
    // Load the interstitial ad
    async loadInterstitialAd() {
      try {
        // Load the interstitial ad
        await AdMob.prepareInterstitial({
          adId: this.adId,
          isTesting: false, // Set to false for production
        });

        // Once loaded, mark it as ready and immediately show it
        this.isInterstitialReady = true;
        console.log('Interstitial ad loaded');
        await this.showInterstitialAd(); // Show the ad immediately after loading
      } catch (error) {
        console.error('Error loading interstitial ad:', error);
      }
    },

    // Show the interstitial ad
    async showInterstitialAd() {
      if (this.isInterstitialReady) {
        try {
          // Show the ad if it's ready
          await AdMob.showInterstitial();
          console.log('Interstitial ad displayed');
          this.adVisible = true; // Mark ad as visible after displaying
        } catch (error) {
          console.error('Error displaying interstitial ad:', error);
        }
      } else {
        console.warn('Interstitial ad is not ready. Try loading again.');
        await this.loadInterstitialAd(); // Attempt to load the ad again if it's not ready
      }
    },
  },

  async mounted() {
    // Load the interstitial ad when the component is mounted
    await this.loadInterstitialAd();
  },

  beforeUnmount() {
    // Reset visibility when the component is unmounted
    this.adVisible = false;
  },
};
</script>

<style scoped>
.interstitial-ad-container {
 
}
</style>
