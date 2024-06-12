<template>
  <div class="carousel">
    <!-- <button @click="prev" class="carousel-button prev-button">‹</button> -->
    <div class="relative left-0 top-0">
        <svg width="76" height="273" viewBox="0 0 76 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.4" x="-119.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE" stroke-dasharray="2 2"/>
        </svg>
        <svg  class="absolute left-2 top-[45%]" width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68055 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928936C7.68054 0.538412 7.04738 0.538412 6.65685 0.928936L0.292892 7.2929ZM33 7L1 7.00001L1 9.00001L33 9L33 7Z" fill="#E7EEBE"/>
        </svg>
    </div>
    <div class="carousel-content ml-[19px] mr-[19px]">
      <div class="carousel-container" :style="containerStyle">
        <svg width="196" height="273" viewBox="0 0 196 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.4" x="0.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE" stroke-dasharray="2 2"/>
            <path opacity="0.4" d="M98.3356 117.608H91.8573M104.814 120.847H85.379M98.3356 125.706H91.8573M104.814 128.945H85.379M104.814 137.043H85.379M98.3356 133.804H91.8573M81.6 113.289H108.593V142.442H81.6V113.289Z" stroke="#E7EEBE" stroke-width="1.5"/>
            <path opacity="0.4" d="M125.715 120.313V105.729C125.715 101.311 122.133 97.7292 117.715 97.7292H103.131M125.715 135.418V147.964C125.715 153.508 121.221 158.002 115.678 158.002H103.131M64.4775 135.418V147.964C64.4775 153.508 68.9714 158.002 74.5149 158.002H87.0615M64.4775 120.313V107.767C64.4775 102.223 68.9714 97.7292 74.5149 97.7292H87.0615" stroke="#E7EEBE" stroke-width="1.5"/>
        </svg>
      </div>
    </div>
    <div class="relative right-0 top-0">
        <svg width="71" height="273" viewBox="0 0 71 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.4" x="0.5" y="0.5" width="195" height="272" fill="#3E1821" stroke="#E7EEBE" stroke-dasharray="2 2"/>
        </svg>
        <svg    class="absolute right-2 top-[45%]" width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.7071 8.70711C33.0976 8.31659 33.0976 7.68342 32.7071 7.2929L26.3431 0.928937C25.9526 0.538412 25.3195 0.538412 24.9289 0.928937C24.5384 1.31946 24.5384 1.95263 24.9289 2.34315L30.5858 8.00001L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM-1.74846e-07 9L32 9.00001L32 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="#E7EEBE"/>
        </svg>
    </div>

    <!-- <button @click="next" class="carousel-button next-button">›</button> -->
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.carousel-button {
  border: 2px solid #000;
  background: none;
  color: #000;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
}
.prev-button {
  position: absolute;
  left: 10px;
}
.next-button {
  position: absolute;
  right: 10px;
}
.carousel-content {
  flex: 1;
  overflow: hidden;
}
.carousel-container {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}
.carousel-item {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
