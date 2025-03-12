<script lang="ts">
  import Anchor from "../atoms/Anchor.svelte";
  import Br from "../atoms/Br.svelte";
  import { deepMerge } from "../methods";
  import type { NavbarConfiguration } from "../types";
  import ThemeChanger from "./ThemeChanger.svelte";

  export let config: NavbarConfiguration = {};

  const defaultConfig = {
    class: "navbar",
    links: [
      { text: "Home", url: "/" },
      { text: "About", url: "/about" },
      { text: "Services", url: "/services" },
      { text: "Contact", url: "/contact" },
    ],
  };

  $: config = deepMerge(defaultConfig, config);
</script>

<nav class={config.class}>
  <ul>
    {#each config.links || [] as item (item.text)}
      <li class="list">
        <Anchor config={{ href: item.url }}>{item.text}</Anchor>
      </li>
    {/each}
    <li class="list">
      <ThemeChanger />
    </li>
  </ul>
</nav>

<Br config={{ depth: 1 }} />

<style lang="scss">
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
    z-index: 1000;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    align-self: center;
  }
</style>
