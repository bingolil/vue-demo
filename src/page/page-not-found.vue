<template>
  <div class="error404">
    <div>
      <h1>404</h1>
      <h2>
        Error !
        <div>Page Not Found</div>
      </h2>
    </div>
    <p>For Some Reason The Page You Requested Could Not Be Found On Our Server</p>
    <p>
      <a href="javascript:history.go(-1)">&laquo; Go Back</a> /
      <a href="/">Go Home &raquo;</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style scoped>
.error404 {
  padding-top: 60px;
  line-height: 1.6em;
  text-align: center;
  color: #919191;
  font-family: Georgia, "Times New Roman", Times, serif;
  box-sizing: border-box;
}

.error404 h1,
.error404 h2 {
  margin: 0 0 0 40px;
  padding: 0;
  display: inline-block;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

.error404 h1 {
  font-size: 200px;
}

.error404 h2 {
  font-size: 60px;
}

.error404 h2 div {
  font-size: 30px;
}

.error404 p {
  margin: 25px 0 0 0;
  padding: 0;
  font-size: 16px;
}

.error404 a {
  color: #ff9900;
}
</style>
