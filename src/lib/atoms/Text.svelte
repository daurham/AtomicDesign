<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { TextConfiguration } from "../types"; /* Change from TextConfiguration to a new one */

  /* Configurations Passed Down */
  export let config: TextConfiguration = {};

  const defaultConfig: TextConfiguration = {
    /* Default configurations */
    style: {
      margin: "0",
      padding: "0",
    },
  };

  $: config = deepMerge(defaultConfig, config);
</script>

<p class={config.class} style={convertToCSS(config)}>
  <slot>
    {config.innerText}
  </slot>
</p>

<style lang="scss">
  p {
    margin: 0;
    padding: 0;
  }
</style>
