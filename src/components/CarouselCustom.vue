<template>
  <div class="carousel">
    <div class="absolute left-0 top-0 z-20 h-full">
        <div class="h-full w-[76px]" style="background: rgba(62, 24, 33, 0)"> 
        </div>
        <svg @click="prev" class="absolute left-2 top-[45%]" width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68055 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928936C7.68054 0.538412 7.04738 0.538412 6.65685 0.928936L0.292892 7.2929ZM33 7L1 7.00001L1 9.00001L33 9L33 7Z" fill="#E7EEBE"/>
        </svg>
    </div>
    <div class="carousel-content">
      <div class="carousel-container" :style="containerStyle">
        <div
          class="carousel-item h-[379px] bg-[#fff] mr-[5%] relative"
          v-for="(item, index) in items"
          :key="index"
        >
          <slot :item="item" :index="index"></slot>
        </div>
      </div>
    </div>
    <div class="absolute right-0 top-0 z-20 h-full">
        <div class="h-full w-[71px]" style="background: rgba(62, 24, 33, 0)"> 
        </div>
        <svg @click="next" class="absolute right-2 top-[45%]" width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.7071 8.70711C33.0976 8.31659 33.0976 7.68342 32.7071 7.2929L26.3431 0.928937C25.9526 0.538412 25.3195 0.538412 24.9289 0.928937C24.5384 1.31946 24.5384 1.95263 24.9289 2.34315L30.5858 8.00001L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM-1.74846e-07 9L32 9.00001L32 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="#E7EEBE"/>
        </svg>
    </div>
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
        transform: `translateX(calc(-${this.currentIndex * 100}% - ${this.currentIndex * 20}px + 10vw))`,
      };
    },
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.$emit('index', this.currentIndex);
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.$emit('index', this.currentIndex);
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
  flex: 0 0 80%;
  /* margin: 0 5%; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
