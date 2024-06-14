<script lang="ts" setup>
import { employees } from '~/utils/employes';
const { name } = useRoute().params;
const employee = employees.find((employee) => employee.name === name);
const img = employee?.name.split(" ", "-")[0];
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <div class="bg-gray-800 shadow-lg rounded-lg w-full max-w-md mx-2 sm:mx-0">
      <div class="p-6">
        {{ img }}
        <div class="flex items-center">
          <div class="w-24 h-24 rounded-full overflow-hidden mr-4">
            <img
              :src="employee?.imgUrl"
              :alt="employee?.name"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-100">
              {{ employee?.name }}
            </h2>
            <p class="text-gray-300 font-semibold">
              {{
                employee?.positions
                  .map(
                    (position, index) =>
                      `${position}${
                        index === employee?.positions.length - 1 ? "" : " / "
                      }`
                  )
                  .join("")
              }}
            </p>
          </div>
        </div>
        <div class="mt-3 text-center mb-2">
          <p class="text-gray-400 flex flex-col company">
            <span class="text-gray-300 mb-1 text-2xl tracking-wider"
              >SALEM CONSULT</span
            >
            <span class="text-gray-300 text-[10px]"
              >ARCHITECTURAL AND ENGINEERING CONSULTANTS</span
            >
          </p>
          <br />
          <NuxtLink
            target="_blank"
            to="https://maps.app.goo.gl/t1edof81hXJipDYj8"
          >
            <div class="flex items-center justify-center">
              <MyLocation class="w-8 h-8 mr-2" />
              <span class="text-gray-300 hover:text-gray-500"
                >Lesotho St, Addis Ababa, Ethiopia</span
              >
            </div>
          </NuxtLink>

          <div class="flex mt-4 justify-between items-center">
            <a
              :href="`tel:${employee?.phone}`"
              class="text-blue-500 hover:text-blue-700 mr-6 flex items-center gap-3"
            >
              <CallMe class="w-10 h-10" />
            </a>
            <NuxtLink
              target="_blank"
              to="https://salemconsult.com"
              class="text-gray-300 flex items-center mr-6 "
            >
              <!-- <MyWeb class="w-12 h-12 mr-4" /> -->
              <MyWebLink class="w-10 h-10" />
              </NuxtLink
            >
            <a
              :href="`mailto:${employee?.email}`"
              class="text-blue-500 hover:text-blue-700 flex items-center gap-3"
            >
              <EmailMe class="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.company {
    font-family: 'salem';
    font-weight: 900;
}
</style>
