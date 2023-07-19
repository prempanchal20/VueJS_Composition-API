<template>
  <section class="navbar">
    <div class="navbar-logo">
      <div class="button-home">
        <button>{{ $t("app_name") }}</button>
      </div>
      <div class="nav-menu">
        <div class="navbar-links">
          <div class="toggle"></div>
          <div class="sidebar"></div>
          <div class="user-name">

            <button v-if="userValid" class="bi bi-person-circle"></button>
            <h1 v-if="userValid">{{ $t("welcome") }} <b>{{ userData.name }}</b></h1>

            <div class="hamburger-menu" :class="{ 'open': isNavOpen }">

              <RouterLink v-if="userData?.role == 'admin'" @click="toggleNav" class="user-list" to="/user-list">{{
                $t('Users List') }}
              </RouterLink>
              <RouterLink v-if="userValid" class="home" @click="toggleNav" to="/">{{ $t("home") }}</RouterLink>
              <RouterLink v-else class="login" to="/login" @click="toggleNav">Login</RouterLink>
              <button v-if="userValid" @click="logoutBtn(); toggleNav();" class="logout-btn">{{ $t("logout")
              }}</button>
              <RouterLink v-else class="register" to="/register" @click="toggleNav">Register</RouterLink>
            </div>
            <i class="bi bi-list" @click="toggleNav"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from 'pinia';
import { ref } from "vue";

const router = useRouter();
const userStore = useUserStore();
const { userValid, userData } = storeToRefs(userStore)

const logoutBtn = () => {
  const response = userStore.logout()
  if (response === true) {
    router.push("/login");
  }
}

const isNavOpen = ref(false);
function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.navbar {
  position: sticky;
  top: 0;
  background-color: #001f3f;
  z-index: 1;
}

.navbar-logo {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
}

.navbar-logo button {
  border: none;
  background-color: transparent;
  color: #F8F8F8;
  font-size: 25px;
  font-weight: 600;
}

.navbar-links {
  display: flex;
  justify-content: flex-end;
}

.user-name {
  display: flex;
}

.navbar-links button {
  font-size: 20px;
  color: white;
  padding-left: 30px;
  font-weight: 100;
  cursor: pointer;
}

.home,
.login,
.register,
.user-list {
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: white;
  padding-left: 30px;
  transition: color 0.3s;
}

.navbar-links h1 {
  color: white;
  font-weight: 100;
  margin-left: 10px;
}

.bi-person-circle,
.bi-list {
  font-size: 30px;
  color: #F8F8F8;
  cursor: pointer;
  transition: color 0.3s;
}

.bi-list {
  display: none;
}

.user-data-list {
  position: absolute;
  top: 100%;
  right: 11%;
  display: none;
  background-color: white;
  padding: 10px;
  list-style-type: none;
}

.user-name .user-data-list {
  display: block;
}

.user-data-list li {
  margin-top: 10px;
}

.bi-chevron-down {
  font-size: 15px;
  margin-left: 5px;
}

@media only screen and (max-width: 950px) {
  .navbar-logo {
    padding: 3%;
  }

  .navbar-logo button {
    font-size: 25px;
  }

  .home,
  .login,
  .register,
  .logout-btn,
  .user-list,
  h1,
  .navbar-links button,
  .user-name {
    font-size: 18px;
  }

  .bi-list {
    display: inline;
    font-size: 30px;
    color: white;
  }

  .user-name {
    display: flex;
    align-items: center;
  }

  .hamburger-menu {
    display: none;
    position: absolute;
    top: 66px;
    background-color: #001f3f;
    border-radius: 24px 6px 0px 57px;
    padding: 10px;

  }

  .open {
    display: block;
    right: 0px;
    width: 25%;
    top: 57px;
  }

  .hamburger-menu a,
  .hamburger-menu button {
    display: block;
    margin-bottom: 10px;
    color: #ffffff;
    font-weight: 100;
  }

  .hamburger-menu .user-list,
  .hamburger-menu .home,
  .hamburger-menu .login,
  .hamburger-menu .logout-btn,
  .hamburger-menu .register {
    margin: 10px;
    transition: color 0.3s;
  }

  .bi-list {
    margin-left: 10px;
  }
}

@media only screen and (max-width: 753px) {

  .home,
  .login,
  .register,
  .logout-btn,
  .user-list,
  .navbar-links button,
  .user-name {
    font-size: 18px;
  }

  .hamburger-menu.open {
    width: 30%;
  }
}

@media only screen and (max-width: 500px) and (min-width: 375px) {

  .home,
  .login,
  .register,
  .logout-btn,
  .user-list,
  .navbar-links button,
  .user-name {
    font-size: 18px;
  }

  .hamburger-menu.open {
    width: 50%;
  }

  .button-home {
    width: 46%;
  }
}
</style>