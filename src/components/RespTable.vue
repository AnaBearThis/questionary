<template>
  <table class="list-of-respondents__table">
    <thead class="list-of-respondents__table_head">
      <tr class="list-of-respondents__table_row">
        <th class="list-of-respondents__table_heading">Full Name</th>
        <th class="list-of-respondents__table_heading">E-mail</th>
        <th class="list-of-respondents__table_heading">Phone</th>
        <th class="list-of-respondents__table_heading">Result</th>
      </tr>
    </thead>
    <tbody class="list-of-respondents__table_body" v-for="resp in respondents">
      <tr class="list-of-respondents__table_row">
        <td class="list-of-respondents__table_cell">{{ resp.name }}</td>
        <td class="list-of-respondents__table_cell">{{ resp.email }}</td>
        <td class="list-of-respondents__table_cell">{{ resp.phone }}</td>
        <td class="list-of-respondents__table_cell">{{ resp.result }}/10</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    respondents: {
      type: Array,
    },
  },
};
</script>

<style>
.list-of-respondents__table {
  margin: 31px 0 0;
  padding: 0;
  width: 100%;
  min-height: 828px;
  border: 1px solid #dde1e6;
  border-radius: 6px;
  display: grid;
  align-content: start;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
}
.list-of-respondents__table_head {
  display: contents;
}
.list-of-respondents__table_body {
  display: contents;
}
.list-of-respondents__table_row {
  display: contents;
}
.list-of-respondents__table_heading {
  margin: 0;
  padding: 12px;
  height: 24px;
  background-color: #f9fafb;
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  text-align: start;
  border-bottom: 1px solid #dde1e6;
}
.list-of-respondents__table_cell {
  margin: 0;
  padding: 12px;
  height: 24px;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #636b75;
  text-align: start;
  border-bottom: 1px solid #dde1e6;
}
</style>
