<template>
  <div class="header">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'大屏数据可视化'
        }
    },
};
</script>

<style>
.header {
    /* background-color: beige; */
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal ;
    /* background-color: rgb(69, 69, 87,0.2); */
    z-index: 10;
}
</style>