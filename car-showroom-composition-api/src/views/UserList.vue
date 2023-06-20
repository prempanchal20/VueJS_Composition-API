<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">ID</th>
                <th class="text-left">User name</th>
                <th class="text-left">User Email</th>
                <th class="text-left">User Password </th>
                <th class="text-left">User Role</th>
                <th class="text-left">User Gender</th>
                <th class="text-left">User DOB</th>
                <th class="text-left">User Age</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="item in userList">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.password }}</td>
                <td>{{ item.role }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.dob }}</td>
                <td>{{ item.age }}</td>
            </tr>
        </tbody>
    </v-table>
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

<style>
thead {
    background-color: lightslategrey;
    color: white;
}

.text-left {
    color: white;
}
</style>
