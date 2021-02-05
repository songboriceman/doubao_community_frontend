<template>
  <el-backtop :bottom="60" :right="60">
    <div title="回到顶部"
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 1px 0 0;
        border-radius: 12px;
        text-align: center;
        line-height: 40px;
        color: #167df0;
      }"
    >
      <i class="fa fa-arrow-up"></i>
    </div>
  </el-backtop>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>

</style>