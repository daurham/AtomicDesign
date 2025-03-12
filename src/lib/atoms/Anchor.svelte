<script lang="ts">
  import { convertToCSS, deepMerge } from "../methods";
  import type { AnchorConfiguration } from "../types";

  export let config: AnchorConfiguration = {};

  const defaultConfig: AnchorConfiguration = {
    innerText: "here",
    mode: "readonly",
    class: "a",
    onClickAction: () => console.log("Button Clicked"),
    onKeyAction: () => console.log("Button Clicked"),
    theme: "light",
    href: "/",
    target: "_blank",
    rel: "noreferrer",
    tabIndex: 0,
    style: {},
  };

  $: config = deepMerge(defaultConfig, config); // must be reactive, for times where any config properties are supposed to update - this keeps the defaults inside.

  // event listeners
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

<a
  class={config.class}
  style={convertToCSS(config)}
  tabindex={config.tabIndex}
  href={config.href}
  target={config.target}
  rel={config.rel}
  on:click={handleClick}
  on:keydown={(e) => handleKeyDown(e)}
>
  <slot>{config.innerText}</slot>
</a>

<style lang="scss">
  a {
    text-decoration: none; /* Remove underline by default */
    background-color: transparent; /* Default background color */
    color: #80b7f1;
  }

  .a:hover {
    text-decoration: underline; /* Underline on hover */
    color: #55a2f4;
  }

  a:active {
    color: #0056b3;
  }
</style>
