
import { RouterLink } from 'vue-router';

<template>
    <div id="container">
        <div id="home">
            <RouterLink to="/">Home</RouterLink>
        </div>
        <div id="objects">
            <div id="employees">
                <RouterLink to="/employees">Employees</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .75rem;
    border-bottom: 1px solid black;
}
</style>