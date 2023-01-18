<template>

    <table id="table">
        <tr>
            <th v-for="(value, name) in props.data[0]">{{ name }}</th>
        </tr>
        <tr v-for="element in props.data">
            <td v-for="(value) in element">{{ value }}</td>
        </tr>
    </table>

</template>

<script lang="ts" setup>

const props = defineProps({
    data: {
        type: Array<any>,
        required: false,
        default: []
    }
})
</script>