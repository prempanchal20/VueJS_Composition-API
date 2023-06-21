import { beforeEach, describe, test, vi } from "vitest";
import { useUserStore } from "../../stores/userStore";
import axios from "axios";
import { setActivePinia, createPinia } from "pinia";

vi.mock("axios");

describe("userStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("User Store", async () => {
    const users = useUserStore();
    const formData = { email: "prem@gmail.com", password: "Prem@206" };

    axios.get.mockResolvedValue({
      data: formData,
    });

    users.checkUser(formData);
    console.log(formData);
  });
});
