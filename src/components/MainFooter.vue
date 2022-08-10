<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer-col">
          <img class="logo" src="@/assets/header.png" alt="Caring Hands Logo" />
          <p>
            Service Areas Covered: Mecklenburg County, Union County, Cabarrus
            County, Gaston County, Anson County, Rowan County, Catawba County,
            and Lincoln County
          </p>
          <div class="sm-icons">
            <img src="@/assets/images/facebook.png" alt="Facebook Icon" />
            <img src="@/assets/images/twitter.png" alt="Twitter Icon" />
            <img src="@/assets/images/instagram.png" alt="Instagram Icon" />
          </div>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <router-link to="#">Home</router-link>
          <router-link to="#">About Us</router-link>
          <router-link to="/">Services</router-link>
          <router-link to="#">Careers</router-link>
          <router-link to="#">Testimonials</router-link>
          <router-link to="/resources">Resources</router-link>
          <router-link to="#">Blog</router-link>
          <router-link to="#">Contact Us</router-link>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <div class="info">
            <img src="@/assets/icons/map-pin.svg" alt="Location" />
            <span
              >124 Unionville Indian Trail Rd., Suite <br />
              B6 Indian Trail, NC 28079</span
            >
          </div>
          <div class="info">
            <img src="@/assets/icons/mail.svg" alt="Email Address" />
            <span
              >info@caringhandshome.com <br />
              info@hands.care</span
            >
          </div>
          <div class="info">
            <img src="@/assets/icons/phone-call.svg" alt="Phone number" />
            <span
              >Phone: 704-234-8546 <br />
              Fax: 704-684-5228</span
            >
          </div>
        </div>
        <div class="footer-col">
          <h4>Accreditation</h4>
          <p>Caring Hands Home-Care Agency LLC is a proud Member of:</p>
          <div class="accreditators">
            <img src="@/assets/images/chamber.png" alt="Chamber Company Logo" />
            <img src="@/assets/images/achc.png" alt="Achc Company Logo" />
          </div>
        </div>
      </div>
      <hr />
      <p class="copyright">
        © Copyright 2021 - 2022 | Caring Hands Home-Care Agency LLC
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (max-width: 768px) {
}
</style>
