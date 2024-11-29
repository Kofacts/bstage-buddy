<template>
<div>
    Dieee
  <div v-if="adVisible" class="native-advanced-ad-container">
    <div v-if="nativeAd" class="native-ad">
      <img :src="nativeAd.imageUrl" alt="Ad Image" class="native-ad-image" />
      <div class="native-ad-text">
        <h2>{{ nativeAd.headline }}</h2>
        <p>{{ nativeAd.body }}</p>
        <button @click="onAdClicked">Learn More</button>
      </div>
    </div>
    <div v-else>
      <p>Loading Ad...</p>
    </div>
  </div>
</div>
</template>

<script>
import { AdMob } from '@capacitor-community/admob';

export default {
  data() {
    return {
      adVisible: false,
      nativeAd: null,
    };
  },
  methods: {
    async loadNativeAdvancedAd() {
      try {
        const adId = 'ca-app-pub-4536763666052997/8769032022'; // Replace with your actual Native Ad Unit ID
        const adOptions = {
          adId: adId,
          isTesting: false, // Set to false in production
        };

        console.log('Preparing Native Advanced Ad...');
        const result = await AdMob.prepareNativeAdvancedAd(adOptions);


        if (result && result.nativeAd) {
          this.nativeAd = result.nativeAd;
          this.adVisible = true;
          console.log('Native Ad loaded:', this.nativeAd);
          
          // Explicitly show the ad after loading it
          await AdMob.showNativeAdvancedAd({
            adId: adId,
            isTesting: false, // Set to false in production
          });
        } else {
          console.error('Failed to load Native Advanced Ad.');
        }
      } catch (error) {
        console.error('Error loading native advanced ad:', error);
      }
    },
    onAdClicked() {
      console.log('Native ad clicked');
      AdMob.showAdClick();
    },
    async hideAd() {
      this.adVisible = false;
    }
  },
  async mounted() {
    await this.loadNativeAdvancedAd();
  },
  beforeUnmount() {
    this.hideAd();
  },
};
</script>

<style scoped>
.native-advanced-ad-container {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.native-ad {
  display: flex;
  align-items: center;
  justify-content: center;
}

.native-ad-image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.native-ad-text {
  display: flex;
  flex-direction: column;
}

.native-ad-text h2 {
  font-size: 16px;
  font-weight: bold;
}

.native-ad-text p {
  font-size: 14px;
}
</style>
