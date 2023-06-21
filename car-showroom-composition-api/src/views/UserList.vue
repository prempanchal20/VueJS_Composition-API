<template>
    <div>
        <p>User's List</p>
        <v-table>
            <thead>
                <tr>
                    <th class=" text-left">ID</th>
                    <th class=" text-left">User name</th>
                    <th class="text-left">User Email</th>
                    <th class="text-left">User Role</th>
                    <th class="text-left">User Gender</th>
                    <th class="text-left">User DOB</th>
                    <th class="text-left">User Age</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in userList" :key="index" :class="index % 2 === 0 ? 'even-row' : 'odd-row'">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.dob }}</td>
                    <td>{{ item.age }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const userList = ref();

onMounted(async () => {
    try {
        const response = await axios.get("https://testapi.io/api/dartya/resource/users");
        userList.value = response.data.data;
    } catch (error) {
        alert(error);
    }
});
</script>

<style scoped>
* {
    margin: 50px;
}

thead {
    background-color: lightslategrey;
    color: white;
}

v-table {
    min-width: 1044px;
}

.v-table {
    border: 1px solid lightslategrey;
}

.text-left {
    color: white;
}

p {
    text-align: center;
    font-size: 30px;
}

.even-row {
    background-color: white;
}

.odd-row {
    background-color: lightgray;
}
</style>
