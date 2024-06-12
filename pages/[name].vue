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
    name: "Arefyne Gebreyohannes Ambaye",
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
const { name } = useRoute().params;
const employee = employees.find((employee) => employee.name === name);
const img = employee?.name.split(' ','-')[0]
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-900">
    <div class="bg-gray-800 shadow-lg rounded-lg w-full max-w-md mx-2 sm:mx-0">
      <div class="p-6">
        {{
          img
        }}
        <div class="flex items-center">
          <div class="w-24 h-24 rounded-full  overflow-hidden mr-4">
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
        <div class="mt-4 text-center mb-2">
          <NuxtLink
            target="_blank"
            to="`https://salemconsult.com/`"
            class="text-gray-300"
          >
            <p class="text-gray-400 flex flex-col">
              <span class="text-gray-300">SALEM CONSULT</span>
              <span class="text-gray-300 text-xs"
                >ARCHITECTURAL AND ENGINEERING CONSULTANTS</span
              >
            </p></NuxtLink
          >
          <br />
          <NuxtLink
            target="_blank"
            to="https://maps.app.goo.gl/t1edof81hXJipDYj8"
          >
            <div class="flex items-center justify-center">
              <MyLocation class="w-8 h-8 mr-2" />
              <span class="text-gray-300"
                >Lesotho St, Addis Ababa, Ethiopia</span
              >
            </div>
          </NuxtLink>

          <div class="flex mt-4 justify-between">
            <a
              :href="`tel:${employee?.phone}`"
              class="text-blue-500 hover:text-blue-700 mr-4 flex items-center gap-3"
            >
              <CallMe class="w-10 h-10" />
              Call
            </a>
            <a
              :href="`mailto:${employee?.email}`"
              class="text-blue-500 hover:text-blue-700 flex items-center gap-3"
            >
              <EmailMe class="w-12 h-12" />
              Email Me
            </a>
          </div>
        </div>

        <!-- <div class="mt-6 flex justify-end gap-4">
          <NuxtLink
            :to="employee.email"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <Email/> Send Email
          </NuxtLink> 
          <NuxtLink
            :to="employee.linkedin"
            target="_blank"
            class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center"
          >
            <Calander/> Connect on LinkedIn
          </NuxtLink>
        </div>-->
      </div>
    </div>
  </div>
</template>
