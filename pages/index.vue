<script lang="ts" setup>
const employees = [
  {
    id: 1,
    name: "Israel Mesfin Solomon",
    positions: ["Architect"],
    email: "israelmesfin97@gmail.com",
    phone: "+251921797776",
    imgUrl: "https://i.postimg.cc/pTHkVN7S/Israel-Mesfin-Solomon.png",
  },
  {
    id: 2,
    name: "Abdulkerim Yesuf Mekonene",
    positions: ["Associate Engineer", "Liaison Officer"],
    email: "abduyesuf1992@gmail.com",
    phone: "+251994672469",
    imgUrl: "https://i.postimg.cc/Vv1KLyS6/Abdulkerim-Yesuf-Mekonene.png",
  },
  {
    id: 3,
    name: "Amehaselassie Sallehunae",
    positions: ["Architect"],
    email: "ameha12@gmail.com",
    phone: "+251913464640",
    imgUrl: "https://i.postimg.cc/pXTP2rgg/Amehaselassie-Sallehunae.png",

  },
  {
    id: 4,
    name: "Selamawit Jenberu Belay",
    positions: ["Engineer"],
    email: "",
    phone: "+251913812051",
    imgUrl: "https://i.postimg.cc/wTZYgV5m/Selamawit-Jenberu-Belay.png",
  },
  {
    id: 5,
    name: "Eskedar Moges Mekonnen",
    positions: ["Architect"],
    email: "eskedarmoges@gmail.com",
    phone: "+251911018259",
    imgUrl: "https://i.postimg.cc/Y9Ph1PLx/Eskedar-Moges-Mekonnen.png",
  },
  {
    id: 7,
    name: "Semere Mechal Tesema",
    positions: ["Drafts Person"],
    email: "semeremechal@gmail.com",
    phone: "+251947690338",
    imgUrl: "https://i.postimg.cc/52zd0Cpk/Semere-Mechal-Tesema.png",
  },
  {
    id: 8,
    name: "Ayele Balcha Abebe",
    positions: ["Engineer"],
    email: "ayele.balcha@gmail.com ",
    phone: "+251913057702",
    imgUrl: "https://i.postimg.cc/wjnq4z4n/Ayele-Balcha-Abebe.png",
  },
  {
    id: 9,
    name: "Hikma Abdela Ahmed",
    positions: ["Engineer"],
    email: "hikmaabdela5@gmail.com",
    phone: "+251966338139",
    imgUrl: "https://i.postimg.cc/c1DN5ZrT/Hikma-Abdela-Ahmed.png",
  },
  {
    id: 10,
    name: "Arefyne Gebreyohannes",
    positions: ["Architect"],
    email: "dejacharef@gmail.com",
    phone: "+251902635886",
    imgUrl: "https://i.postimg.cc/jqhjxGCJ/Arefyne-Gebreyohannes-Ambaye.png",
  },
  {
    id: 11,
    name: "Dejene Demissu",
    positions: ["Engineer", "Quantity Surveyor"],
    email: "dejene.demisu72@gmail.com",
    phone: "+251913812051",
    imgUrl: "https://i.postimg.cc/pTJPdFVt/Dejene-Demissu.png",
  },
  {
    id: 12,
    name: "Tezerawork Alemu",
    positions: ["Administrator"],
    email: "",
    phone: "+251913812051",
    imgUrl: "",
  },
  {
    id: 13,
    name: "Hemen Sallehunae",
    positions: ["Architect"],
    email: "hemen2448@gmail.com",
    phone: "+251913812051",
    imgUrl: "https://i.postimg.cc/7hQ8C1pj/Hemen-Sallehunae.png",
  },
  {
    id: 14,
    name: "Almaw Gebru",
    positions: ["Driver", "Courier"],
    email: "",
    phone: "+251967113211",
    imgUrl: "https://i.postimg.cc/yxTx2G3c/Almaw-Gebru.png",
  },
  {
    id: 15,
    name: "Sallehunae Kefyalew",
    positions: ["CEO", "Architect"],
    email: "salemaande@gmail.com",
    phone: "+251911210462",
    imgUrl: "https://i.postimg.cc/3rkSjDD8/Sallehunae-Kefyalew.png",
  },
];
</script>

<template>
  <div class="py-4 md:py-8">
    <h1 class="text-3xl font-bold text-center text-[#F9CA6A] mx-4 hover:scale-90">SALEM ARCHITECTURAL AND ENGINEERING CONSULTANCY EMPLOYEES</h1>
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
