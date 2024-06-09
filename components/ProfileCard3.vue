<script lang="ts" setup>
const { employee } = defineProps(["employee"]);
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <div class="bg-white shadow-lg rounded-lg w-full max-w-md mx-4 sm:mx-0">
      <div class="p-6">
        <div class="flex items-center">
          <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-4">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              :alt="employee.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">
              {{ employee.name }}
            </h2>
            <p class="text-gray-600 font-semibold">{{ employee.position }}</p>
          </div>
        </div>
        <div class="mt-6">
          <p class="text-gray-600">
            <i class="fas fa-map-marker-alt mr-2"></i>
            Salem architecture.<br />
            Abo Sarebet, Addis Ababa, Ethiopia
          </p>
          <div class="flex mt-4">
            <a
              href="tel:+1234567890"
              class="text-blue-500 hover:text-blue-700 mr-4"
            >
              <i class="fas fa-phone-alt mr-2"></i> {{ employee.phone }}
            </a>
            <a
              href="mailto:john.doe@example.com"
              class="text-blue-500 hover:text-blue-700"
            >
              <i class="fas fa-envelope mr-2"></i> {{ employee.email }}
            </a>
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <NuxtLink
            :to="employee.linkedin"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <i class="fab fa-linkedin-in mr-2"></i> Connect on LinkedIn
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
