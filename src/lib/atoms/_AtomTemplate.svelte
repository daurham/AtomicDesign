<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { DefaultConfiguration } from "../types"; /* Change from DefaultConfiguration to a new one */

  /* Configurations Passed Down */
  export let config: DefaultConfiguration = {};

  const defaultConfig: DefaultConfiguration = {
    /* Default configurations */
  };

  $: config = deepMerge(defaultConfig, config);
</script>

<div class={config.class} style={convertToCSS(config)}></div>

<style lang="scss">
</style>
