<template>
  <div class="audio-player">
    <audio :ref="`voice-${name}`" :id="`voice-${name}`" @timeupdate="updateTimeline">
      <source :src="src" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div class="controls">
      <div class="play-button" @click="togglePlayPause">
        <span v-if="!isPlaying">&#9658;</span>
        <span v-else>&#9646;&#9646;</span>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'name'],
  data() {
    return {
      isPlaying: false,
      progress: 0
    };
  },
  methods: {
    togglePlayPause() {
      const audio = this.$refs[`voice-${this.name}`];
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateTimeline() {
      const audio = this.$refs[`voice-${this.name}`];
      this.progress = (audio.currentTime / audio.duration) * 100;
    }
  },
  watch: {
    src (newVal) {
      //console.log('audio has changed', newVal.length)
    }
  }
};
</script>

<style>
.audio-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #E7EEBE;
  color: #3E1821;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
}

.progress-bar {
  width: 80%;
  height: 6px;
  border: 1px solid #E7EEBE;
  border-color: #E7EEBE;
  border-radius: 14px;
  margin-left: 10px;
}

.progress {
  height: 100%;
  background-color: #4CAF50;
}
</style>
