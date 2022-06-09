<template>
  <section class="cont__title">
    <div class="container">
      <h1>
        <strong>{{ name1 }}</strong>
        <em>{{ name2 }}</em>
      </h1>
    </div>
  </section>
</template>
<script>
export default {
  // 자바스크립트를 제외한 모든 언어는 변수설정을해줌
  props: {
    name1: String,
    name2: String,
  },
};
</script>
<style lang="scss" scoped>
.cont__title {
  padding: 15vmax 1% 10vmax;
  font-size: 5vmax;
  font-family: var(--main_font);
  text-transform: uppercase;
  line-height: 0.85;
  color: var(—white);
  background-color: var(--dark_bg);

  em {
    display: block;
  }
}
.cont__title.light {
  background-color: var(--light_bg);
  color: var(—black);
}

@media (max-width: 1200px) {
  .cont__title {
    text-align: center;
    padding-bottom: 10vw;
  }
}
</style>
