<template>
    <div>
        <Welcome/>
        <FormBrief/>
        <FoorterBrief/>
    </div>

</template>
<script>
import Welcome from '@/components/Brief/DesarrolloWeb/welcome.vue'
import FormBrief from '@/components/Brief/DesarrolloWeb'
import FoorterBrief from '~/components/FooterBrief.vue'

    export default {
        components:{
        Welcome,
        FormBrief,
        FoorterBrief
        }
    }
</script>