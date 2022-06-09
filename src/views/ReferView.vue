<template>
  <HeaderCont />
  <main id="main">
    <section class="reference__cont">
      <TitleCont name1="Reference" name2="Book" />
      <div class="reference__inner">
        <div class="table">
          <h3>HTML</h3>
          <ul>
            <li v-for="refer in refers" :key="refer.id">
              <a :href="refer.link" target="_blank">
                <span class="num">{{ refer.id }}</span>
                <span class="attr">{{ refer.title }}</span>
                <span class="desc">{{ refer.desc2 }}</span>
                <span class="Inline">{{ refer.element }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ContactCont />
    </section>
  </main>
  <FooterCont />
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },
  setup() {
    const refers = ref([]);

    const Reference = () => {
      fetch("https://soyeon102.github.io/refer/src/assets/json/ReferHtml.json")
        .then((response) => response.json())
        .then((data) => {
          refers.value = data.data.htmlRefer;
          // console.log(data.data.htmlRefer);
        });
    };
    Reference();

    return {
      refers,
      Reference,
    };
  },
};
</script>

<style lang="scss" scoped>
.reference__cont {
  background-color: #f0eeeb;
  padding-bottom: 300px;
}
.reference__inner {
  .table {
    border-bottom: 2px solid #000;
    margin-top: 1.2rem;

    .tab {
      overflow: hidden;
      text-align: center;
      line-height: 2;
      li {
        width: 80px;
        height: 40px;
        border: solid 1px #000;
        float: left;
        transition: all 0.3s;
      }
    }

    h3 {
      padding-bottom: 10px;
    }

    li {
      margin: 0;
      list-style: none;
      border-top: 1px solid #000;
      position: relative;
      transition: all 0.2s;
      overflow: hidden;

      &:hover {
        color: #fff;
        background-color: #000;
      }

      &:nth-child(1) {
        border-top: 2px solid #000;
      }

      span {
        display: inline-block;
        // float: left;
        padding: 25px 10px;
        font-size: 14px;
        font-family: "S-CoreDream-3Light";
        box-sizing: border-box;

        &:nth-child(1) {
          width: 5%;
          text-align: center;
        }
        &:nth-child(2) {
          width: 10%;
        }
        &:nth-child(3) {
          width: 70%;
        }
        &:nth-child(4) {
          width: 15%;
          text-align: center;
        }
      }
    }
  }
}
</style>
