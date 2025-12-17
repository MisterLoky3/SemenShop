 <template>
<v-container class="Header"> 
<v-container>
   <v-row>
            <v-col cols="">
                <p @click="$router.push('/')" class="cursor">Каталог</p>
            </v-col>
            <v-col>
                <p>Поиск</p>
            </v-col>
            <v-col>
                <p>Регион</p>
            </v-col>
             <v-col cols="1" class="man-cont">
                <img class="man cursor" src="@/assets/icons/man.png" @click="$router.push('/profile')">
            </v-col>
        </v-row>
</v-container>


</v-container>
</template>
<style scoped>
.Header{
    background-color: rgba(3, 48, 247, 0.736);
    margin: 0px;
    min-width: 100vw;
    height: 90px;
    position: fixed;
    z-index: 1;
    backdrop-filter: blur(10px);
}
.man-cont{
    width: fit-content;
}

.man{
    width: 40px;
    height: 40px;
    justify-self: end;
}

.cursor{
    cursor: pointer;
    user-select: none;
}










</style>










