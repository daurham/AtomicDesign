<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { ButtonConfiguration } from "../types";

  export let config: ButtonConfiguration = {};

  const defaultConfig: ButtonConfiguration = {
    innerText: "here",
    mode: "readonly",
    onClickAction: () => console.log("Button Clicked"),
    onKeyAction: () => console.log("Button Clicked"),
    class: "button",
    theme: "light",
    tabIndex: 0,
    style: {},
  };

  $: {
    config = deepMerge(defaultConfig, config); // must be reactive, for times where any config properties are supposed to update - this keeps the defaults inside.
  }
</script>

<button
  class={config.class}
  style={convertToCSS(config)}
  type={config.type}
  tabindex={config.tabIndex}
  on:click={() => config.onClickAction()}
>
  <slot>
    {config.innerText}
  </slot>
</button>
