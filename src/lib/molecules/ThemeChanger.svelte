<script lang="ts">
  import { onMount } from "svelte";
  import Button from "../atoms/Button.svelte";
  import { deepMerge } from "../methods";
  import type { ThemeChangerConfiguration } from "../types";
  import { AppConfig } from "../../AppConfiguration";

  export let config: ThemeChangerConfiguration = {};

  const defaultConfig: ThemeChangerConfiguration = {
    class: "theme-changer",
    theme: "light",
    onClickAction: () => toggleTheme(),
    onKeyAction: () => toggleTheme()
  };
  let themeText = "Turn Dark Mode";
  // const darkModeSVGPath = "src/assets/moon-svgrepo-com.svg";
  const lightModeSVGPath = "src/assets/light-mode-svgrepo-com.svg";
  const darkModeSVGPath = "src/assets/dark-mode-night-moon-svgrepo-com.svg"
  
  const appConfigUnsubscriber = AppConfig.subscribe(appConfig => {
    config.theme = appConfig.theme;
  });

  $: {
    config = deepMerge(defaultConfig, config);
    themeText = `Turn ${config.theme === "light" ? "Dark" : "Light"} Mode`;
  }
  
  const toggleTheme = () => {
    let newTheme: "light" | "dark" = "light";
    if (config.theme === "light") {
      newTheme = "dark";
      // config.theme = "dark";
    } else if (config.theme === "dark") {
      newTheme = "light";
      // appConfig.theme = "light";
    }

    AppConfig.update((appConfig) => {
      appConfig.theme = newTheme;
      return appConfig; 
    })
    document.documentElement.setAttribute("theme", newTheme);
    config.theme = newTheme;
  };

  // const update

  onMount(() => {
    // Match the Applications theme with the users prefered theme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      AppConfig.update((appConfig) => {
      appConfig.theme = "dark";
      return appConfig; 
    })
      document.documentElement.setAttribute("theme", "dark");
      config.theme = "dark";
    }
    return appConfigUnsubscriber;
  });

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

<Button
  config={{onClickAction: handleClick, onKeyAction: handleKeyDown}}
>
<img src={config.theme === "light" ? darkModeSVGPath : lightModeSVGPath} alt="">
</Button>

<style lang="scss">

</style>