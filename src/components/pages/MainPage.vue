<template>
    <v-container class="app">
      <v-container class="main-col">
        <v-container class="main-row">
          <productCardComponent :name="i.name" v-for="i in items" :price="i.price" :image = "i.image"/>
        </v-container>
        <v-container class=" main-row">
          <productCardComponent :name="m.name" v-for="m in mouses" :price="m.price" :image = "m.image" />

        </v-container>
            <v-container class="main-row">
              <productCardComponent :name="k.name" v-for="k in keyboards" :price="k.price" :image = "k.image" />
            </v-container>
          
      </v-container>
    </v-container>
</template>

<script setup lang="ts">
const items = [
  {
    name: "Samsung",
    price: "1999",
    image: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/85337/1_85337.jpg"
  },
  {
    name: "Apple",
    price: "99999",
    image: "https://rebro-store.ru/upload/iblock/bf6/15pegh04r2sqlm2xtal0y3c0ue9mvgv3.jpg"
  },
  {
    name: "BlackBerry",
    price: "6999",
    image: "https://blackberry-rus.ru/image/cache/catalog/q10/q10black-1000x1000.jpg"
  },
  {
    name: "Xiaomi",
    price: "8999",
    image: "https://vladimir.ibrat.ru/upload/iblock/77c/mc84l4ptyqx9fhe1j7k52mb3w2ze9dve.jpg"
  },
  {
    name: "Huawei",
    price: "5999",
    image: "https://img.mvideo.ru/Big/400288784bb.jpg"
  },
  {
    name: "Honor",
    price: "12500",
    image: "https://fonarimarket.ru/_imag_images/115/45532-huawei-honor-7a-2gb-32gb-siniy.jpg"
  },
  {
    name: "PiskaPhone",
    price: "666",
    image: "src/assets/icons/Piska.png"
  },
]
const mouses = [
  {
    name: "Logitech G102",
    price: "2150",
    image: "https://s3.e2e4.ru/imgproxy/1600908"
  },
  {
    name: "RedDragon",
    price: "3000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXlSwmzkZwU3Mcn_MBFEq9IEGfBU-Rqa3Hw&s"
  },
  {
    name: "Rayzer",
    price: "2500",
    image: "https://storage.yandexcloud.net/s3-metaratings-storage/images/12/70/127071f6b145b0e586059c7487f2965e.jpg"
  },
  {
    name: "SteelSeries",
    price: "99999",
    image: "https://price.ru/blog/wp-content/uploads/2025/03/image-175.png"
  },
  {
    name: "ASUS ROG",
    price: "6045",
    image: "https://price.ru/blog/wp-content/uploads/2025/03/image-176.png"
  },
  {
    name: "HyperX",
    price: "21421647",
    image: "https://price.ru/blog/wp-content/uploads/2025/03/image-178.png"
  }
]
const keyboards = [
  {
    name: "A4Tech B314",
    price: "2000",
    image: "https://mygadget.ru/wp-content/uploads/2024/11/image-32.png"
  },
  {
    name: "Logitech",
    price: "6200",
    image: "https://mygadget.ru/wp-content/uploads/2024/11/image-33.png"
  },
  {
    name: "Razer ",
    price: "11999",
    image: "https://mygadget.ru/wp-content/uploads/2024/11/image-34.png"
  },
  {
    name: "Logitech G815",
    price: "70000",
    image: "https://mygadget.ru/wp-content/uploads/2024/11/image-35.png"
  },
  {
    name: "HIPER Venom",
    price: "2500",
    image: "https://mygadget.ru/wp-content/uploads/2024/11/hiper-otzyv.jpg"
  },
  {
    name: "Redragon Shiva",
    price: "1200",
    image: "https://mygadget.ru/wp-content/uploads/2024/11/image-37.png"
  }
]
</script>

<style scoped>

.main-row {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  justify-items: center;
  flex-wrap: nowrap;
}

.app {
  align-content: center;
  /* min-width: 100vh; */
margin-top: 90px;

  /* height: 100vh; */
  background-color: rgb(93, 171, 207);
  /* justify-items: center; */
}

p {
  width: fit-content;

}
</style>