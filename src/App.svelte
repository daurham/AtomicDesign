<script lang="ts">
  import Button from "./lib/atoms/Button.svelte";
  import Input from "./lib/atoms/Input.svelte";
  import Anchor from "./lib/atoms/Anchor.svelte";

  import Counter from "./lib/molecules/Counter.svelte";
  import Widget from "./lib/molecules/Widget.svelte";

  import Navbar from "./lib/molecules/Navbar.svelte";
  import Footer from "./lib/molecules/Footer.svelte";
  import { AppConfig } from "./AppConfiguration";
  import ThemeChanger from "./lib/molecules/ThemeChanger.svelte";
  import Label from "./lib/atoms/Label.svelte";
  import Text from "./lib/atoms/Text.svelte";
  import { onMount } from "svelte";
</script>
  

<Navbar/>
<Widget/>
<Counter />
<Footer/>