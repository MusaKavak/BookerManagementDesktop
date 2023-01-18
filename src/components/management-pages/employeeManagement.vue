<template>
    <div id="container">
        <Table :data="data" />
    </div>
</template>

<script lang="ts" setup>
import Table from "../tools/table.vue"
import {ref, onMounted, Ref} from "vue"
import { EmployeeDataAccess } from "../../api/Employee";
import { Employee } from "../../types/Employee";

const data:Ref<Employee[]|undefined> = ref([])
const dataAccess = new EmployeeDataAccess()
onMounted(async ()=>{
    data.value = await dataAccess.getAll()
})
</script>