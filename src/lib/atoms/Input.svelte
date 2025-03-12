<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { InputConfiguration } from "../types";

  export let config: InputConfiguration = {};

  const defaultConfig: InputConfiguration = {
    placeholder: "Fill me in",
    value: "",
    theme: "light",
    type: "input",
    onChangeAction: () => console.log("Change Heard"),
    onClickAction: () => console.log("Button Clicked"),
    onKeyAction: () => console.log("Button Clicked"),
    class: "input",
    contentEditable: "false",
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

<input
  on:change={config.onChangeAction}
  style={convertToCSS(config)}
  class={config.class}
  placeholder={config.placeholder}
  type={config.type}
  checked={config?.checked}
/>
