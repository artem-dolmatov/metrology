<template>
  <section class="container-fluid">
    <header-contact/>   
    <navbar/>
    <header-banner/>
    <calculate-date/>
    <license/>
    <footer-page/>   
  </section>
</template>

<script>
import HeaderContact from '~/components/HeaderContact.vue';
import Navbar from '~/components/Navbar.vue';
import HeaderBanner from '~/components/HeaderBanner.vue';
import License from '~/components/License.vue';
import FooterPage from '~/components/FooterPage.vue';
import CalculateDate from '~/components/CalculateDate.vue';

export default {
  components: {
    HeaderContact,
    Navbar,
    HeaderBanner,
    License,
    FooterPage,
    CalculateDate
  }
}
</script>
