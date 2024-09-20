<script lang="ts" async>
  let res = await fetch("http://localhost:8000");
  let data = res.json();
</script>

<h1>Hello world!</h1>
<h2>{data}</h2>
