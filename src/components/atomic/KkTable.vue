<template>
 <table class="table-auto w-full border">
    <thead>
      <tr>
        <th v-for="(header, i) in headers" :key="i" class="p-2 border-b text-left">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in items" :key="i" class="hover:bg-gray-100">
        <td
          v-for="(col, j) in columns"
          :key="j"
          class="p-2 border-b"
        >
          {{ formatCell(item[col]) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
  defineProps({
    headers: Array,   // Ej: ["Descripción", "Fecha", "Total"]
    items: Array,     // Ej: [{ description: ..., date: ..., total: ... }, ...]
    columns: Array    // Ej: ["description", "date", "total"]
  })

  const formatCell = (value) => {
    if (typeof value === 'number') return `$${value.toFixed(2)}`
    if (typeof value === 'string' && !isNaN(Date.parse(value)))
      return new Date(value).toLocaleDateString()
    return value
  }
</script>

<style scoped>
  .table-auto {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem;
  }
</style>
