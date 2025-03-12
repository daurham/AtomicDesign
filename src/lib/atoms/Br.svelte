<script lang="ts">
    import type { BrConfiguration } from "../types";

  export let config: BrConfiguration = {
    depth: 1,
  };
</script>

{#each { length: config.depth || 1 } as _, i}
  <br />
{/each}
