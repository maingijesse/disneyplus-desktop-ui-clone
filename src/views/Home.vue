<template>
  <div class="home my-8">
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="5000">
      <slide v-for="slide in slides" :key="slide.name">
        <router-link to="/">
          <img :src="slide.image" :alt="slide.name" class="w-full h-auto" />
        </router-link>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <div class="categories flex items-center mb-12 -mx-4">
      <div class="w-1/5 px-4">
        <a
          href="#"
          class="bg-gray-700 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-600 shadow-custom"
          ><img src="/images/disney_logo.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="w-1/5 px-4">
        <a
          href="#"
          class="bg-gray-700 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-600 shadow-custom"
          ><img src="/images/marvel_logo.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="w-1/5 px-4">
        <a
          href="#"
          class="bg-gray-700 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-600 shadow-custom"
          ><img src="/images/pixar_logo.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="w-1/5 px-4">
        <a
          href="#"
          class="bg-gray-700 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-600 shadow-custom"
          ><img src="/images/star_wars_logo.svg" alt="" srcset=""
        /></a>
      </div>
      <div class="w-1/5 px-4">
        <a
          href="#"
          class="bg-gray-700 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-600 shadow-custom"
          ><img src="/images/national_geographic_logo.svg" alt="" srcset=""
        /></a>
      </div>
    </div>
    <!-- start of slides -->
    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-400 mb-1">Recommended For You</h2>
      <Carousel :items-to-show="3.5" :wrap-around="true">
        <Slide v-for="reco in recommeded" :key="reco.id">
          <div>
            <img :src="reco.image" alt="" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

    <!-- end of slides -->
    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-400 mb-1">Continue Watching</h2>
      <div class="flex items-center">
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/one_strange_rock.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/high_school_musical.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"><img src="/images/snow_white.jpg" alt="star wars" /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/avengers_infinity_war.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/remember_the_titans.jpg" alt="star wars"
          /></a>
        </div>
      </div>
    </div>
    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-400 mb-1">Trending Now</h2>
      <div class="flex items-center">
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/the_mandalorian.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/black_panther.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/avengers_endgame.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"><img src="/images/zootopia.jpg" alt="star wars" /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/star_wars_a_new_hope.jpg" alt="star wars"
          /></a>
        </div>
      </div>
    </div>
    <div class="recommended px-6 mb-12">
      <h2 class="text-gray-400 mb-1">Disney+ Originals</h2>
      <div class="flex items-center">
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/marvel_hero_project.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/the_mandalorian.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/remember_the_titans.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"
            ><img src="/images/star_wars_a_new_hope.jpg" alt="star wars"
          /></a>
        </div>
        <div class="shadow-xl mr-6">
          <a href="#"><img src="/images/zootopia.jpg" alt="star wars" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Slide, Pagination, Carousel, Navigation } from "vue3-carousel"
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          name: "Slide One",
          image: "/images/slide1.jpg",
        },
        {
          name: "Slide One",
          image: "/images/slide2.jpg",
        },
        {
          name: "Slide One",
          image: "/images/slide3.jpg",
        },
      ],
      recommeded: [
        {
          id: 1,
          image: "/images/star_wars_a_new_hope.jpg",
        },
        {
          id: 3,
          image: "/images/the_sound_of_music.jpg",
        },
        {
          id: 4,
          image: "/images/zootopia.jpg",
        },
        {
          id: 5,
          image: "/images/black_panther.jpg",
        },
        {
          id: 2,
          image: "/images/cinderella.jpg",
        },
      ],
    }
  },
}
</script>

<style>
.carousel__pagination-button {
  @apply bg-gray-400;
}
.carousel__prev,
.carousel__next {
  @apply w-12 h-12;
}
.carousel__prev,
.carousel__next,
.carousel__pagination-button--active {
  @apply bg-gray-500 shadow-custom;
}

.carousel__slide {
  margin-right: 1.5rem;
}
</style>
