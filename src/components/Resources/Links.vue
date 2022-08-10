<template>
  <section>
    <div class="container">
      <div class="links">
        <div
          class="link-card"
          v-for="resource in resources"
          :key="resource.title"
        >
          <h6>{{ resource.title }}</h6>
          <p>{{ resource.link }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resources: [
        {
          title: "American Public Health Association",
          link: "www.apha.org",
        },
        {
          title: "American Psychological Association",
          link: "www.apa.org",
        },
        {
          title: "American Association of Retired Persons (AARP)",
          link: "www.aarp.org",
        },
        {
          title: "National Institute of Aging",
          link: "www.nia.nih.gov",
        },
        {
          title: "Meals on Wheels America",
          link: "www.mealsonwheelsamerica.org",
        },
        {
          title: "Dementia Society of America",
          link: "www.dementiasociety.org",
        },
        {
          title: "Alzheimers.gov",
          link: "www.alzheimers.gov",
        },
        {
          title: "HealthyChildren.org",
          link: "www.healthychildren.org",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background-color: #f7f7f7;
}
.links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3.5rem;
}

.link-card {
  min-height: 126px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
  font-family: var(--header) !important;
}

.link-card h6 {
  font-size: 2.1rem;
  padding-bottom: 2rem;
  color: var(--primary);
  font-weight: 600;
}

.link-card p {
  font-weight: 400;
  font-size: 20px;
}

@media screen and (max-width: 425px) {
  .links {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media screen and (max-width: 375px) {
  .container {
    width: 100%;
  }
  .links {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .link-card p {
    font-weight: 400;
    font-size: 15px;
  }
}
</style>
