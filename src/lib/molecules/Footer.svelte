<!-- Footer.svelte -->
<script lang="ts">
  import Anchor from "../atoms/Anchor.svelte";
  import Br from "../atoms/Br.svelte";
  import { deepMerge } from "../methods";
    import type { FooterConfiguration } from "../types";

  export let config: FooterConfiguration = {};

  // Example config object
  const defaultConfig = {
    class: "footer",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Contact Us", url: "/contact" },
    ],
  };

  $: {
    config = deepMerge(defaultConfig, config);
  }
</script>

<Br config={{ depth: 1 }} />

<footer class={config.class}>
  <ul>
    {#each config.links || [] as item (item.text)}
      <li class="list">
        <Anchor config={{ href: item.url }}>{item.text}</Anchor>
      </li>
    {/each}
  </ul>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 10px;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }
</style>
