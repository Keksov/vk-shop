<template>
    <div class="gallery-wrapper">
        <div class="gallery-main">
            <img :src="photos[0]" alt="">
        </div>
        <div class="gallery-right">
            <img :src="photos[1]" alt="">
            <img :src="photos[2]" alt="">
            <img :src="photos[3]" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductGallery',
    props: ['photos', 'productId']
}
</script>