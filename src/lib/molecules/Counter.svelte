<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import Label from "../atoms/Label.svelte";
  import type { DefaultConfiguration } from "../types";

  export let config: DefaultConfiguration = {
    theme: "light",
  };
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <Label>Counter Component</Label>
  <Button
    config={{
      onClickAction: increment,
      ...config,
      style: {
        maxWidth: "200px",
      },
    }}
  >
    count is {count}
  </Button>
</div>

<!-- <button on:click={increment}>count is {count} OG</button> -->

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
</style>
