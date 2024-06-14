<script lang="ts" setup>
import { employees } from '~/utils/employes';
</script>

<template>
  <div class="py-4 md:py-8">
    <h1 class="text-3xl font-bold text-center text-[#F9CA6A] mx-4 hover:scale-110 title">SALEM ARCHITECTURAL AND ENGINEERING CONSULTANCY EMPLOYEES</h1>
  </div>
  <div class="grid grid-cols-1 md:gap-6 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="employee in employees"
      :key="employee.id"
      class="m-1 md:m-2 lg:m-4 my-4 md:my-2"
    >
      <NuxtLink :to="`/${employee.name}`">
        <ProfileCard
          :employee="employee"
          class="col-span-1 sm:col-span-2 lg:col-span-3"
      /></NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.title {
  font-weight: bold;
  font-family: "Rajdhani", sans-serif;
}
</style>
