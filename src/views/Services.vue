<template>
  <div class="sub-heading">
    <div class="container">
      <div class="sub-text">
        <h1>{{ currentRoute }}</h1>
        <p><span>Home ></span> {{ currentRoute }}</p>
      </div>
    </div>
  </div>
  <div class="container sect-ctn">
    <div class="top">
      <div class="image-ctn">
        <img src="@/assets/images/old.png" alt="" />
      </div>
      <div class="side">
        <h2>Our Services</h2>

        <div class="side-info">
          <span>Care Provided</span>
          <span>Home Health Aide Services</span>
          <span>Instruction</span>
        </div>
      </div>
    </div>
    <div class="lower-ctn">
      <div class="info">
        <h2>Providing the highest quality of care at an affordable way</h2>
        <span>
          <span class="sec"> Caring Hands Home-Care Agency LLC</span> provides
          you with care services to address your day-to-day needs. We support a
          wide range of conditions, such as Alzheimer’s, and those who need
          everyday assistance due to their illness.
        </span>
        <span
          >Our caregivers receive ongoing training to equip them with the
          necessary skills to deliver the appropriate care. So you can rest easy
          knowing that you or your loved one is receiving enriching, engaging,
          and empowering in-home supportive care services.</span
        >
      </div>
      <div class="services">
        <h4>We offer:</h4>
        <div class="services-ctn">
          <div
            class="service"
            v-for="(service, index) in services"
            :key="index"
          >
            <img src="@/assets/images/check-square.svg" alt="" />
            <span>{{ service.name }}</span>
          </div>
        </div>
      </div>

      <div class="contact-box">
        <p>
          Feel free to <span class="contact">contact us</span> to learn more
          about our in-home supportive care services and how they can help you
          or your loved ones.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: "Alzheimer’s/Dementia Care" },
        { name: "Decubitus Care" },
        { name: "Gastrostomy/Colostomy Care" },
        { name: "Post Operative Care" },
        { name: "Respite Care" },
        { name: "Skin Care" },
        { name: "Terminal Illness Care" },
        { name: "Urinary Catheter Care" },
      ],
    };
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
  background-image: url("@/assets/images/services-hero.png");
  background-size: cover;
  height: 100%;
  background-position: center;
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

.sect-ctn {
  padding-block: 6rem;
}

.top {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.image-ctn {
  width: 65%;
}

.image-ctn img {
  width: 100%;
}

.side {
  width: 27%;
  display: flex;
  flex-direction: column;
  background: #139371;
  color: white;
  padding: 2rem 1.5rem 3rem 2rem;
}

.side h2 {
  font-size: 2.5rem;
  border-bottom: 1px solid #fff;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}

.side-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.side-info span {
  font-size: 1.5rem;
}
.side-info span:hover {
  color: var(--secondary);
  cursor: pointer;
}

.lower-ctn {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 5rem;
}

.info {
  display: flex;
  width: 65%;
  flex-direction: column;
  gap: 2rem;
}

.info h2 {
  font-size: 4rem;
}

.info span .sec {
  color: var(--secondary);
}

.services {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.services h4 {
  font-size: 2.5rem;
}

.services-ctn {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 80%;
}

.service {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact-box {
  background: #547587;
  width: 65%;
  padding: 4rem 4rem;
  color: #fff;
}

.contact-box p {
  font-size: 1.6rem;
  line-height: 150%;
  word-spacing: 0.2rem;
}

.contact-box .contact {
  color: var(--secondary);
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  .sub-heading {
    padding-block: 5rem;
  }

  .sub-text h1 {
    font-size: 3rem;
  }

  .sub-text p {
    font-size: 1.5rem;
  }

  .top {
    flex-direction: column;
  }

  .image-ctn {
    width: 100%;
  }

  .side {
    width: 100%;
    margin-top: 2rem;
  }

  .side h2 {
    font-size: 2rem;
  }

  .side-info {
    gap: 2rem;
  }

  .side-info span {
    font-size: 1.3rem;
  }

  .lower-ctn {
    width: 100%;
  }

  .info {
    width: 100%;
  }

  .info h2 {
    font-size: 2.5rem;
  }

  .info span {
    font-size: 1.3rem;
  }

  .services {
    width: 100%;
  }

  .services h4 {
    font-size: 2rem;
  }

  .services-ctn {
    width: 100%;
  }

  .service {
    font-size: 1.3rem;
  }

  .contact-box {
    width: 100%;
    padding: 2rem 2rem;
  }

  .contact-box p {
    font-size: 1.3rem;
  }
}

@media screen and (max-width: 375px) {
  .services-ctn {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
