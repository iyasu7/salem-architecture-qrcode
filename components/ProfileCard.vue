<script lang="ts" setup>
const { employee } = defineProps(["employee"]);
</script>

<template>
  <div class="flex justify-center items-center bg-gray-900">
    <div
      class="bg-gray-800 shadow-lg rounded-lg w-full max-w-md mx-2 sm:mx-0 min-h-[316px] md:min-h-[352px] lg:min-h-[384px]"
    >
      <div class="p-6">
        <div class="flex items-center">
          <div
            class="minw24 w-24 h-24 rounded-full overflow-hidden mr-4 flex items-center justify-center"
          >
            <span
              v-if="!employee?.imgUrl"
              class="text-6xl font-bold text-[#F9CA6A]"
            >
              {{ employee?.name.slice(0, 1) }}</span
            >
            <img
              v-else
              :src="employee?.imgUrl"
              :alt="employee?.name"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-1">
            <h2 class="text-2xl font-semibold text-gray-100">
              {{ employee?.name }}
            </h2>
            <p class="text-gray-300 font-semibold h-12">
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
              class="text-blue-500 hover:text-blue-700 flex items-center gap-3"
            >
              <CallMe class="w-10 h-10" />
            </a>
            <NuxtLink
              target="_blank"
              to="https://salemconsult.com"
              class="text-gray-300 flex items-center "
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
@font-face {
    font-family: salemFont;
    src: url(../assets/fonts/Architects\ Draft.ttf);
}
  
.company {
    font-family: salem;
    font-weight: 900;
}
</style>