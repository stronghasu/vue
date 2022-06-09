<template>
  <HeaderCont />
  <main id="main">
    <section class="contact__cont">
      <TitleCont />
      <div class="contact__inner">
        <div class="text">
          <div>YOU ARE</div>
          <div>ALREADY</div>
          <div>DOING WELL.</div>
        </div>
      </div>
    </section>
  </main>
  <FooterCont />
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
// import TitleCont from "@/components/TitleCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    // TitleCont,
  },
};
</script>

<style lang="scss" scoped>
.contact__cont {
  background-color: var(--dark_bg);
  height: 100vh;
}
.contact__inner {
  color: var(--white);
  align-content: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;

  .text {
    font-size: 9vw;
    line-height: 0.85;
    font-family: var(--main_font);
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 1200px) {
  .contact__inner {
    .text {
      div {
        text-align: center;
      }
      div:nth-child(2) {
        text-align: center;
        padding-right: 0;
      }
      div:nth-child(3) {
        text-align: center;
      }
    }
    .desc {
      margin-left: 0;
      width: 40vw;
      text-align: center;
      word-break: keep-all;
    }
  }
}

@media (max-width: 600px) {
  .contact__inner {
    .text {
      font-size: 60px;
    }
    .desc {
      width: 90vw;
    }
  }
}
</style>
