import { beforeEach, describe, expect, test, vi } from "vitest";
import { useUserStore } from "../../stores/userStore";
import axios from "axios";
import { setActivePinia, createPinia } from "pinia";

vi.mock("axios");

describe("userStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Check that User is valid or not", () => {
    const users = useUserStore();
    const formData = { email: "prem@gmail.com", password: "Prem@206" };
    expect(users.userValid).toBe(null);
    axios.get.mockResolvedValue({
      data: formData,
    });
    users.checkUser(formData);
    expect(users.userValid).toBe(true);
  });
});
