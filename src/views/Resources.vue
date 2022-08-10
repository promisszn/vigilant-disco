<template>
  <div class="sub-heading">
    <div class="container">
      <div class="sub-text">
        <h1>{{ currentRoute }}</h1>
        <p><span>Home ></span> {{ currentRoute }}</p>
      </div>
    </div>
  </div>
  <links />
  <section class="resource-banner">
    <div class="container">
      <div class="resource-banner-content">
        <p>
          Feel free to contact us to learn more about our in-home supportive
          care services and how they can help you or your loved ones.
        </p>
        <router-link to="#">
          <button class="btn secondary-button btn-alt">
            Contact Us
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9167 15.5833L16.5 11L11.9167 6.41666"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 15.5833L10.0833 11L5.5 6.41666"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Links from "@/components/Resources/Links.vue";
export default {
  components: {
    Links,
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped>
.sub-heading {
  padding-block: 10.5rem;
  background-image: url("@/assets/images/resources-hero.png");
  height: 100%;
  background-position: center;
  background-size: cover;
}

.sub-text {
  color: white;
}

.sub-text h1 {
  text-transform: capitalize;
  font-size: 6rem;
  margin-bottom: 1.3rem;
}

.sub-text p {
  text-transform: capitalize;
}

.sub-text span {
  color: var(--secondary);
}

.resource-banner {
  background-color: var(--secondary);
}

.resource-banner-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  max-width: 700px;
  margin-inline: auto;
}

.resource-banner-content p {
  font-family: var(--subheading);
  font-weight: 700;
  margin-bottom: 4rem;
  font-size: 3rem;
}

.resource-banner-content a {
  margin-inline: auto;
  width: auto;
}

@media (max-width: 768px) {
  .resource-banner-content {
    width: 100%;
  }
  .resource-banner-content p {
    font-size: 2.5rem;
  }
}
</style>
