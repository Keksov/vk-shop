<template>
    <div>
        {{ productId}}, {{  productPrice }}
        <div class="gallery-wrapper">
            <transition name="fade">
        <div class="gallery-main" v-bind:class="{ bottom: isBottom }">
            
            <img :src="prevueImage" alt="main photo">
            
        </div>
        </transition>
        <div v-bind:class="[isBottom ? 'gallery-bottom' : 'gallery-right']">
            <img :src="photoFirst" alt="" @click="changeImage(photos[1])">
            <img :src="photoSecond" alt="" @click="changeImage(photos[2])">
            <img :src="photoThird" alt="" @click="changeImage(photos[3])">
        </div>
        <!-- links -->

    </div>
    </div>
</template>

<script>
export default {
    name: 'ProductGallery',
    data(){
        return {
            prevueImage: '',
            photoFirst: '',
            photoSecond: '',
            photoThird: ''
        }
    },
    props: ['photos', 'productId', 'productPrice', 'isBottom'],
    mounted(){
        this.prevueImage = this.photos[0],
        this.photoFirst = this.photos[1],
        this.photoSecond = this.photos[2],
        this.photoThird = this.photos[3]
    },
    methods: {
        changeImage: function (photosNum) {
            
            if(photosNum == this.photoFirst){
                 this.prevueImage = this.photoFirst
                 this.photoFirst = this.photos[0]
                 this.photoSecond = this.photos[2]
                 this.photoThird = this.photos[3]
            } else if(photosNum == this.photoSecond) {
                this.prevueImage = this.photoSecond
                this.photoSecond = this.photos[0]
                this.photoFirst = this.photos[1]
                this.photoThird = this.photos[3]
            } else if(photosNum == this.photoThird) {
                this.prevueImage = this.photoThird
                this.photoThird = this.photos[0]
                this.photoSecond = this.photos[2]
                this.photoFirst = this.photos[1]
            } else {
                 this.prevueImage = this.photos[0]
                 this.photoFirst = this.photos[1]
                 this.photoSecond = this.photos[2]
                 this.photoThird = this.photos[3]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>