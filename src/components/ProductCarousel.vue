<template>
  <main>
    <div class="carouselContainer">
      <div id="scollContainer">
        <div v-for="(item, index) in images" :key="index">
          <div class="slide">
            <img :src="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="arrows">
      <img
        :class="{arrow:true, left:true, greyed:disabled}"
        :src="require('@/assets/arrow-left.png')"
        @click="scroll(-1)"
      />
      <img class="arrow right" :src="require('@/assets/arrow-right.png')" @click="scroll(1)" />
    </div>
  </main>
</template>
<script>
export default {
  data: function() {
    return {
      interval: null
    };
  },
  computed: {
    images: function() {
      const d = this.$store.state.drinks;
      return d.map(d => d.image_url);
    },
    disabled: function() {
      // const el = document.getElementById("scollContainer");
      return false;
    }
  },
  methods: {
    scroll(direction) {
      const el = document.getElementById("scollContainer");
      el.scrollLeft += el.offsetWidth * direction;
      if (el.scrollLeft > el.scrollWidth - 700) {
        el.scrollLeft = 0;
        return;
      }
    }
  },
  mounted() {
    this.interval = setInterval(() => this.scroll(1), 5000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
<style lang="scss" scoped>
main {
  background-color: $grey;
  width: 100%;
  height: 300px;
  position: relative;
}
.carouselContainer {
  width: 100%;
  overflow: hidden;
  position: absolute;
}
#scollContainer {
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  .slide {
    height: 250px;
    margin-left: 100px;
    padding: 20px;
  }
  img {
    height: 100%;
  }
}
.arrows {
  width: 100%;
  height: 50px;
  .arrow {
    max-height: 50px;
    position: absolute;
    top: 40%;
    cursor: pointer;
	transition: transform 0.2s;
	filter: saturate(0);
	filter: brightness(0.1);
  }
  .arrow:hover {
    transform: scale(1.1);
  }
  .left {
    left: 20px;
  }
  .right {
    right: 20px;
  }
  .greyed {
    opacity: 0.5;
  }
}
</style>