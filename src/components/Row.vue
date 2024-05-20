<template>
  <tr>
    <td class="field">{{ people.name }}</td>
    <td class="field">{{ people.birth_date | formatDate }}</td>
    <td class="field">{{ people.sex | formatSex }}</td>
    <td class="field">{{ people.organisation}}</td>
    <td class="field">{{ people.job_title }}</td>
    <td class='fired' v-if="people.fired">Уволен</td>
  </tr>
</template>

<script>
export default {
  name: 'BlankField',
  props: {
    people: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
