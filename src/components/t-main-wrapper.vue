<template>
    <div class="t-main-wrapper">
        <t-catalog-in-stock />
        <hr />
        <t-catalog-to-order />
        <hr />
        <t-card />
    </div>
</template>

<script>

import TCatalogInStock from '@/components/in-stock/t-catalog-in-stock'
import TCatalogToOrder from '@/components/to-order/t-catalog-to-order'

import TCard from './t-card'



export default {
    name: 't-main-wrapper',
    components: {
        TCatalogInStock,
        TCatalogToOrder,
        TCard
    }
}
</script>