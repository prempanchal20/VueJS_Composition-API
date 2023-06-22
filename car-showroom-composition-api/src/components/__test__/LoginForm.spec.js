import LoginForm from "../../views/LoginForm.vue";
import { setActivePinia, createPinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import { expect } from "vitest";
import { useUserStore } from "@/stores/userStore";
import { validation } from "../..//includes/validation.js";

describe("LoginForm.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Render The Login Data", async () => {
    const userStore = useUserStore();
    const wrapper = shallowMount(LoginForm, {
      global: { plugins: [validation] },
    });

    expect(userStore.isLoggedIn).not.toBe(true);
    const emailInput = wrapper.find('.login-form input[name="email"]');
    const passwordInput = wrapper.find('.login-form input[name="password"]');

    expect(emailInput.exists()).toBe(true);
    expect(passwordInput.exists()).toBe(true);

    await emailInput.setValue("prem@gmail.com");
    expect(emailInput.element.value).toEqual("prem@gmail.com");

    await passwordInput.setValue("Prem@206");
    expect(passwordInput.element.value).toEqual("Prem@206");
  });
});
