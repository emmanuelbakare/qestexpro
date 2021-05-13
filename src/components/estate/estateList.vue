<template>
 <q-page padding>
   <q-list bordered separator class="q-mt-lg " v-if="estates.length">
            <q-item  v-for="estate in estates" :key="estate.id">
            <q-item-section side top>
              <q-icon name="house" color="green" dense/>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-grey-8">{{estate.name}}</q-item-label>
              <q-item-label caption lines="2">{{ estate.street1}} {{estate.state_region}}, {{estate.city}}, {{estate.country}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-btn color="secondary"   label="Join" @click="$emit('estateJoiner', estate.id)"  />
            </q-item-section>
          </q-item>
          </q-list>

 </q-page>
</template>
<script>

export default {
  props:['estates'],
  

}
</script>

<style>

</style>
