<!-- AdBanner.vue -->
<template>
  <div v-if="adVisible" ref="adContainer" class="ad-banner-container"></div>
</template>

<script>
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

export default {
  props: {
    adId: {
      type: String,
      required: true,
    },
    adSize: {
      type: String,
      default: BannerAdSize.LARGE_BANNER,
    },
    adPosition: {
      type: String,
      default: BannerAdPosition.TOP_CENTER,
    },
  },
  data() {
    return {
      adVisible: false,
    };
  },
  methods: {
    async showBannerAd() {
      try {
        await AdMob.showBanner({
          adId: this.adId,
          adSize: this.adSize,
          position: this.adPosition,
          margin: 0,
          isTesting: true, // Set to false in production
        });
        this.adVisible = true;
      } catch (error) {
        console.error('Error displaying AdMob banner:', error);
      }
    },
    async hideBannerAd() {
      try {
        await AdMob.hideBanner();
        this.adVisible = false;
      } catch (error) {
        console.error('Error hiding AdMob banner:', error);
      }
    },
  },
  async mounted() {
    await this.showBannerAd();
  },
  beforeUnmount() {
    this.hideBannerAd();
  },
};
</script>

<style scoped>
.ad-banner-container {
  width: 100%;
  display: flex;
  justify-content: center;
  background: red;
}
</style>
