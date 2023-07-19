<template>
    <section>
        <div class="not-found-image">
            <img src="../assets/error.png" alt="404 Image">
        </div>

        <div class="go-back-btn">
            <button @click="handleError">Go Back</button>
        </div>
    </section>
</template>

<script setup>
import router from '../router/router';

const handleError = () => {
    router.push('/home');
}   
</script>

<style scoped>
.not-found-image,
.go-back-btn {
    display: flex;
    justify-content: center;
}

.go-back-btn {
    text-align: center;
    border-radius: 10px;
}

.go-back-btn button {
    font-size: 20px;
    border-radius: 15px;
    padding: 3px 10px;
}
</style>