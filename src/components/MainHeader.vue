<template>
  <div class="banner">
    <div class="container">
      <div class="banner-content">
        <div class="banner-item">
          <img src="@/assets/icons/phone-call.svg" alt="Phone Icon" />
          <span>Phone: 704-234-8546</span>
        </div>
        <div class="banner-item">
          <img src="@/assets/icons/mail.svg" alt="Email Icon" />
          <span>info@caringhandshome-careagency.com | info@hands.care</span>
        </div>
        <div class="banner-item">
          <span>Stay Connected: </span>
          <div class="sm-icons">
            <img src="@/assets/images/facebook.png" alt="Facebook Icon" />
            <img src="@/assets/images/twitter.png" alt="Twitter Icon" />
            <img src="@/assets/images/instagram.png" alt="Instagram Icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <header>
    <div class="container">
      <nav>
        <img class="logo" src="@/assets/header.png" alt="Caring Hands Logo" />
        <div class="nav-links" :class="{ activeNav: showSideNav }">
          <img
            src="@/assets/icons/close.svg"
            alt="Close Btn"
            class="close-btn"
            @click="hideNav"
          />
          <router-link @click="hideNav" to="/">Services</router-link>

          <router-link @click="hideNav" to="/resources">Resources</router-link>
          <router-link to="#" @click="hideNav">
            <button class="btn">Contact us</button>
          </router-link>
        </div>
        <img
          src="@/assets/icons/menu.svg"
          alt="Menu"
          class="menu-btn"
          @click="showNav"
        />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showSideNav: false,
    };
  },
  methods: {
    showNav() {
      this.showSideNav = true;
    },
    hideNav() {
      this.showSideNav = false;
    },
  },
};
</script>

<style scoped>
.menu-btn,
.close-btn {
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: none;
}

@media screen and (max-width: 1059px) {
  .banner {
    display: none;
  }
}

@media screen and (max-width: 968px) {
  .logo {
    height: 50px;

    width: 100px;
    object-fit: contain;
  }

  .nav-links {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -55%;
    width: 55%;
    z-index: 2;
    padding: 2rem 3rem;
    background-color: white;
    height: 100%;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    transition: 0.25s;
  }

  .activeNav {
    right: 0;
  }

  .menu-btn,
  .close-btn {
    display: initial;
  }
}
</style>
