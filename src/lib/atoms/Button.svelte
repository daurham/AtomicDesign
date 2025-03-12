<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { ButtonConfiguration } from "../types";

  export let config: ButtonConfiguration = {};

  const defaultConfig: ButtonConfiguration = {
    innerText: "here",
    mode: "readonly",
    type: "button",
    onClickAction: () => console.log("Button Clicked"),
    onKeyAction: () => console.log("Button Clicked"),
    class: "button",
    theme: "light",
    tabIndex: 0,
    style: {},
  };

  $: config = deepMerge(defaultConfig, config);

  const handleClick = () => {
    config.onClickAction();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      config.onKeyAction();
    }
  };
</script>

<button
  class={config.class}
  style={convertToCSS(config)}
  type={config.type}
  tabindex={config.tabIndex}
  on:click={handleClick}
  on:keydown={(e) => handleKeyDown(e)}
>
  <slot>
    {config.innerText}
  </slot>
</button>

<!-- 

  Styling passed to the component will overwrite:
  - globals.css
  - @media queries
  - styles defined in style tags
  
  How can i blend the options, so styling can be dynamic??


  hierarchy:
  - styles passed into component
  - globals
  - locally defined styles


 -->

<!-- <style lang="scss">
</style> -->
