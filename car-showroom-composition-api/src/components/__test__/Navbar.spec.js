import Navbar from "@/components/Navbar.vue";
import { RouterLinkStub, shallowMount, createRouter } from "@vue/test-utils";
import i18n from "@/includes/i18n.js";
import { createPinia } from "pinia";
import { useUserStore } from "@/stores/userStore";

describe("Navbar", () => {
  test("Navbar Title - Car Showroom", () => {
    useUserStore(createPinia());
    const wrapper = shallowMount(Navbar, {
      global: {
        components: { "router-link": RouterLinkStub },
        plugins: [i18n],
      },
    });
    const navbarTitle = wrapper.find(".button-home button").text();
    expect(navbarTitle).toBe("Car Showroom");
  });
});
