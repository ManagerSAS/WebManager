<template>
    <div>
        <Welcome/>
        <FormBrief/>
        <FoorterBrief/>
    </div>

</template>
<script>
import Welcome from '@/components/Brief/DiseñoGrafico/welcome.vue'
import FormBrief from '@/components/Brief/DiseñoGrafico'
import FoorterBrief from '~/components/FooterBrief.vue'

    export default {
        components:{
        Welcome,
        FormBrief,
        FoorterBrief
        }
    }
</script>