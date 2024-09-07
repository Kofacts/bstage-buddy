<script setup>
import Navi from '@/components/Navigation/Index.vue'
</script>

<template>
  <div class="pt-10" v-if="$auth.ready() && loaded">
    <router-view></router-view>
    <div v-if="!$route.path.includes('auth')"> 
      <navi v-if="!$route.meta.hideMenu"></navi>
    </div>
  </div>
  <div v-else class="container">Loading...</div>
</template>

<script>
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
export default {
  data() {
    return {
      loaded: false,
      namesWithBanner: [
        'home', 'scripts', 'rehearse-practice','scan-edit','rehearse','stats'
      ]
    };
  },
  methods: {
    async showBannerAd() {
      try {
        const options = {
          adId: 'ca-app-pub-4536763666052997/7534189018',  // Replace with your actual Ad Unit ID
          adSize: BannerAdSize.FULL_BANNER,  // Options: BANNER, FULL_BANNER, LARGE_BANNER, LEADERBOARD, MEDIUM_RECTANGLE
          position: BannerAdPosition.TOP_CENTER,  // Options: TOP_CENTER, BOTTOM_CENTER
          margin: 0,
          isTesting: true, // Set this to false when deploying to production
        };

        await AdMob.showBanner(options);
      } catch (error) {
        console.error('AdMob error:', error);
      }
    },
    async showInterAd() {
      try {
        const options = {
          adId: 'ca-app-pub-4536763666052997/9968780669',  // Replace with your actual Ad Unit ID
          adSize: BannerAdSize.FULL_BANNER,  // Options: BANNER, FULL_BANNER, LARGE_BANNER, LEADERBOARD, MEDIUM_RECTANGLE
          position: BannerAdPosition.TOP_CENTER,  // Options: TOP_CENTER, BOTTOM_CENTER
          margin: 0,
          isTesting: true, // Set this to false when deploying to production
        };

        await AdMob.prepareInterstitial(options);
        await AdMob.showInterstitial();
      } catch (error) {
        console.error('AdMob error:', error);
      }
    },
    async hideBannerAd() {
      try {
        await AdMob.hideBanner();
      } catch (error) {
        console.error('AdMob error:', error);
      }
    },
    routeNameMatches(names) {
      return names.includes(this.$route.name);
    }
  },
  computed: {
 
  },
  mounted() {
    this.$auth.load().then(() => {
      //console.log('user', this.$auth.user(), this.$route.path)
      if(this.$auth.user()?.email && this.$route.path == '/') {
        this.$router.push('/home')
      }
      this.loaded = true

      let namesWithBanner = this.namesWithBanner // Define route names where the banner should appear
        
      if (this.routeNameMatches(namesWithBanner)) {
          this.showBannerAd();
      } else {
          this.hideBannerAd();
      }
  }).catch((e) => console.log('auth failed', e))
  },
  watch: {
    '$route.name'(newName) {
      let namesWithBanner = this.namesWithBanner
      
      if (this.routeNameMatches(namesWithBanner)) {
          //console.log('Landed')
        this.showBannerAd();
      } else {
        this.hideBannerAd();
      }

      const interBanner = ['anal'];
      if(this.routeNameMatches(interBanner)) {
        //console.log('Coco Melon');
        this.showInterAd();
      }
    }
  }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}
</style>
