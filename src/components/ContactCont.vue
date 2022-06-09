<template>
  <section class="cont__contact">
    <p>Let’s create something new</p>
    <h3>LET`S Get IN<em>TOUCH</em></h3>
    <router-link to="/contact">contact me</router-link>
  </section>
</template>

<style lang="scss" scoped>
.cont__contact {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--white);
  text-transform: uppercase;
  background-color: var(--dark_bg);

  p {
    font-size: 1.2rem;
    font-family: var(--sub_font);
    margin-bottom: 4vw;
  }
  h3 {
    font-family: var(--main_font);
    font-size: 9vw;
    text-align: center;
    line-height: 1;
    margin-bottom: 1vw;

    em {
      display: block;
    }
  }
  a {
    font-size: 1rem;
    font-family: var(—sub_font);
    border: 1px solid var(—white);
    border-radius: 50px;
    padding: 1vw 4vw;
  }
}
</style>
