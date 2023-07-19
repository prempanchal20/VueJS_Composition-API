import LoginForm from "../../views/LoginForm.vue";
import { setActivePinia, createPinia } from "pinia";
import { mount, shallowMount } from "@vue/test-utils";
import { expect } from "vitest";
import { useUserStore } from "@/stores/userStore";
import { validation } from "../../includes/validation.js";

describe("LoginForm.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Render The Login Data", () => {
    const userStore = useUserStore();
    const wrapper = mount(LoginForm, {
      global: { plugins: [validation] },
    });

    expect(userStore.isLoggedIn).not.toBe(true);
    const emailInput = wrapper.find("#email");

    const passwordInput = wrapper.find("#password");

    expect(emailInput.exists()).toBe(true);
    expect(passwordInput.exists()).toBe(true);
    emailInput.element.value = "prem@gmail.com";

    passwordInput.element.value = "Prem@206";
    expect(passwordInput.element.value).toEqual("Prem@206");
  });
});
