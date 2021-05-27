<template>
    <div>
        <ul> 
            <li  v-for ="i in list" v-bind:key="i"> {{i}} </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ['list']
}
</script>