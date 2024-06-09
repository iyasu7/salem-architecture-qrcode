<script lang="ts" setup>
const employees = [
  {
    id: 1,
    name: "AmehaSelase seleyehun",
    position: "Senior Architect",
    description:
      "Voluptate elit quis ad mollit id minim. Et anim cupidatat deserunt qui id cillum enim reprehenderit occaecat occaecat cillum. Ex do anim aute excepteur officia. Irure reprehenderit nulla consequat laboris aute cillum voluptate esse nulla velit non sunt commodo voluptate. Deserunt ex esse dolor laborum ut elit.",
    joinedAt: new Date(),
    isActive: true,
    linkdin:'https://www.linkedin.com/in/johndoe',
    email:'abcxyz3@gmail.com',
    phone: '+251911341111',
  },
  {
    id: 2,
    name: "Mahelet seleyehun",
    position: "architect",
    description:
      "Duis minim voluptate adipisicing Lorem consectetur elit commodo consequat eu irure. Nostrud non est esse quis labore fugiat esse irure nulla sint enim laboris irure. Ipsum Lorem officia id labore Lorem nulla esse laborum velit. Dolore nulla occaecat magna dolor pariatur mollit reprehenderit dolore anim non dolore sint labore. Est exercitation irure anim esse do culpa adipisicing elit ea duis proident ea qui. Ullamco irure consequat dolor irure cupidatat esse dolor.",
    joinedAt: new Date(),
    isActive: true,
    linkdin:'https://www.linkedin.com/in/johndoe',
    email:'abcxyz3@gmail.com',
    phone: '+251911111161',
  },
  {
    id: 3,
    name: "Seleyehun amehaSelase",
    position: "Senior Architect",
    description:
      "Esse consequat qui voluptate et aliqua ut irure anim dolore eu. Pariatur amet proident aute magna ipsum ipsum ullamco minim exercitation consectetur labore amet sunt. Dolore ut non incididunt deserunt exercitation nostrud excepteur in minim et reprehenderit. Nulla adipisicing excepteur aute eu. Ut aliquip tempor cillum non sunt anim laboris laborum ut cupidatat occaecat sint enim. Ullamco incididunt ut occaecat pariatur adipisicing do nulla commodo mollit id quis.",
    joinedAt: new Date(),
    isActive: true,
    linkdin:'https://www.linkedin.com/in/johndoe',
    email:'abcxyz3@gmail.com',
    phone: '+251911111123',
  },
  {
    id: 1,
    name: "AmehaSelase seleyehun",
    position: "Marketing Exec. at Denva Corp",
    description:
      "Do dolor id velit ad ad. Pariatur deserunt sunt nostrud proident incididunt exercitation nostrud anim veniam voluptate et labore commodo. Dolor labore dolor aliqua mollit tempor exercitation ea eu ullamco dolor ullamco esse. Non aute eiusmod minim proident ex nisi duis tempor nulla eu. Aute incididunt pariatur non incididunt deserunt sint.",
    joinedAt: new Date(),
    isActive: true,
    linkdin:'https://www.linkedin.com/in/johndoe',
    email:'abcxyz3@gmail.com',
    phone: '+251915211111',
  },
  {
    id: 2,
    name: "Mahele seleyehun",
    position: "architect",
    description:
      "Proident in laboris elit non nostrud culpa id ex esse amet. Qui cillum veniam dolor excepteur esse cupidatat. Minim amet labore officia ut proident mollit officia reprehenderit et. Eu enim nostrud enim do aute sunt velit amet.",
    joinedAt: new Date(),
    isActive: true,
    linkdin:'https://www.linkedin.com/in/johndoe',
    email:'abcxyz3@gmail.com',
    phone: '+251911123578',
  },
  {
    id: 3,
    name: "Seleyehun amehaSelase",
    position: "architect",
    description:
      "Commodo nisi non nisi dolor ipsum laboris excepteur ad aliquip incididunt nostrud. Ex veniam dolor magna quis minim nisi. Do velit nulla magna dolore ad laborum ullamco ad ipsum pariatur nisi ea. Amet do deserunt pariatur do ullamco tempor labore ullamco.",
    joinedAt: new Date(),
    isActive: true,
    linkdin:'https://www.linkedin.com/in/johndoe',
    email:'abcxyz3@gmail.com',
    phone: '+251911237418',
  },
];
const { name } = useRoute().params;
const employee = employees.find((employee) => employee.name === name);
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <div class="bg-gray-800 shadow-lg rounded-lg w-full max-w-md mx-4 sm:mx-0">
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
            <h2 class="text-2xl font-bold text-gray-100">
              {{ employee.name }}
            </h2>
            <p class="text-gray-300 font-semibold">{{ employee.position }}</p>
          </div>
        </div>
        <div class="mt-6 text-center mb-4">
          <p class="text-gray-400">
            <i class="fas fa-map-marker-alt mr-2"></i>
            Salem architecture.<br />
            Abo Sarebet, Addis Ababa, Ethiopia
          </p>
          <div class="flex mt-4 justify-between">
            <a
              :href="`tel:${employee.phone}`"
              class="text-blue-500 hover:text-blue-700 mr-4"
            >
              <i class="fas fa-phone-alt mr-2"></i> {{ employee.phone }}
            </a>
            <a
              :href="`mailto:${employee.email}`"
              class="text-blue-500 hover:text-blue-700"
            >
               {{ employee.email }}
            </a>
          </div>
        </div>
        <p
          class="text-center text-sm leading-6 text-gray-200 hover:text-gray-100 line-clamp-4"
        >
          {{ employee.description }}
        </p>

        <div class="mt-6 flex justify-end gap-4">
          <!-- <NuxtLink
            :to="employee.email"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <Email/> Send Email
          </NuxtLink> -->
          <NuxtLink
            :to="employee.linkedin"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center"
          >
            <Calander/> Connect on LinkedIn
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
