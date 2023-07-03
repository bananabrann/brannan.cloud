<script lang="ts">
  export let data;
</script>

<h1>{data.post.title}</h1>
<div>
  {@html data.post.htmlContent}
</div>

<style lang="scss">
</style>
