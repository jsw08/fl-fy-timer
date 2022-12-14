<script lang="ts">
  import Shorts from './lib/Shorts.svelte'
  import Counter from './lib/Counter.svelte'
  import Games from './lib/Games.svelte';
  import { menu } from './stores';

</script>

<main class="w-full h-screen flex justify-center items-center p-12">
  {#if $menu === "counter"}
    <Counter/> 
  {:else if $menu === "shorts"}
    <Shorts/>
  {:else if $menu === "games"}
    <Games/>
  {/if}
</main>