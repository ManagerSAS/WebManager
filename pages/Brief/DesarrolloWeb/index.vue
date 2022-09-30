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
import FoorterBrief from '~/components/FoorterBrief.vue'

    export default {
        components:{
        Welcome,
        FormBrief,
        FoorterBrief
        }
    }
</script>