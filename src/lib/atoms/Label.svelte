<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { LabelConfiguration } from "../types";

  export let config: LabelConfiguration = {};

  const defaultConfig: LabelConfiguration = {
    innerText: "Label Text",
    theme: "light",
    class: "label",
    style: {},
  };

  $: config = deepMerge(defaultConfig, config);
  
</script>

<label
  style={convertToCSS(config)}
  class={config.class}
>
  <slot>
    {config.innerText}
  </slot>
</label>
