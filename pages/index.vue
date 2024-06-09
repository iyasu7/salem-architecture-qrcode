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
</script>

<template>
  <div class="grid grid-cols-1 md:gap-6 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="employee in employees"
      :key="employee.id"
      class="m-2 md:m-4 lg:m-6"
    >
      <NuxtLink :to="`/${employee.name}`">
        <ProfileCard
          :employee="employee"
          class="col-span-1 sm:col-span-2 lg:col-span-3"
      /></NuxtLink>
    </div>
  </div>
</template>
