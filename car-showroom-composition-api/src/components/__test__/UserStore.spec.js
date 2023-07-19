import { beforeEach, describe, expect, test, vi } from "vitest";
import { useUserStore } from "../../stores/userStore";
import { setActivePinia, createPinia } from "pinia";

describe("userStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Check that User is valid or not", async () => {
    const users = useUserStore();
    const loginData = { email: "prem@gmail.com", password: "Prem@206" };

    expect(users.userValid).toBe(null);

    await users.checkUser(loginData);
    expect(users.userValid).toBe(true);
  });
});
