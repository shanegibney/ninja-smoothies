<template lang="html">
  <div v-if="smoothie" class="edit-smoothie container">
     <h2>Edit {{ smoothie.title }} smoothie</h2>
     <form @submit.prevent="EditSmoothie">
       <div class="field title">
          <label for="title">Smoothie Title:</label>
          <input type="text" name="title" v-model="title">
       </div>
         <div v-for="(ing, index) in ingredients" :key="index" class="field ingredient" >
             <label for="ingredient">Ingredient: </label>
             <input type="text" name="ingredient" v-model="ingredients[index]">
             <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
         </div>
         <div class="field add-ingredient">
           <label for="add-ingredient">Add an ingredient: (press tab to add)</label>
           <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
       </div>
       <div class="field center-align">
         <p v-if="feedback" class="red-text">{{ feedback }}</p>
           <button class="btn pink">Update smoothie</button>
       </div>
     </form>
  </div>
</template>
<script>
import db from '@/firebase/init'
export default {
  name: 'EditSmoothie',
  data () {
  return {
       smoothie: null
    }
  },
  created(){
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>

<style lang="css">

</style>
