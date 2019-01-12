<template>
    <div>
        <nav-bar />
        <el-row>
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
    </div>

</template>

<script>
  import navBar from "../components/navBar";
  export default {
    name: "login",
    components: { navBar },
    auth: false,
  };
</script>

<style scoped>

</style>