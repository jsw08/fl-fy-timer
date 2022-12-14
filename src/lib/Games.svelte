<script lang="ts">
  import { menu } from '../stores'
  import faClock from '../assets/clock.svg'
  import faMenu from '../assets/menu.svg'

  type GMenu = "ingame" | "inmenu";
  let GMenu : GMenu = "inmenu"
  let GSource : string;

  const lGame = (g) => {
    GMenu = "ingame"
    GSource = `/games/${g}`
  }
  const lExternal = (g) => {
    GMenu = "ingame"
    GSource = g
  }
</script>

{#if GMenu === "inmenu"}
  <div class="bg-base-200 p-4 rounded-lg shadow-lg sm:scale-110 md:scale-75 lg:scale-120 w-fit">
      <ul class="menu bg-base-100 w-full p-2 rounded-box">
        <li class="menu-title">
          <span>Puzzles</span>
        </li>
        <li><a href="#." on:click|preventDefault={() => lGame("tetris")} disabled>Tetris (coming soon)</a></li> <!-- TODO -->
        <li><a href="#." on:click|preventDefault={() => lGame("2048")}>2048 (mouse)</a></li>
        <li><a href="#." on:click|preventDefault={() => lGame("onoff")}>OnOff (arrows + space)</a></li>
        <li class="menu-title">
          <span>Action games</span>
        </li>
        <li><a href="#." on:click|preventDefault={() => lGame("liar")}>The liar (arrows + z & x)</a></li> 
        <li><a href="#." on:click|preventDefault={() => lGame("ducksoup")}>DuckSoup (arrows + d & f)</a></li>
        <li><a href="#." on:click|preventDefault={() => lGame("domeromantik")}>Dome Romantik (arrows + space)</a></li>
        <li><a href="#." on:click|preventDefault={() => lGame("norman")}>Norman the Necromancer (mouse)</a></li>
        <li><a href="#." on:click|preventDefault={() => lGame("poom")}>Pico Doom (arrows + z & x)</a></li>
        <li class="menu-title">
          <span>External sites</span>
        </li>
        <li><a href="#." on:click|preventDefault={() => lExternal("https://jsw-hub.netlify.app")}>Jsw-Hub</a></li>
      </ul>
      <br>
      <div class="btn-group bg-base-100 w-full p-2 rounded-box">
        <button class="btn btn-sm" on:click={() => $menu = "shorts"}>Shortcuts</button>
        <button class="btn btn-sm" on:click={() => $menu = "counter"}>Countdown</button>
        <button class="btn btn-sm btn-active" on:click={() => $menu = "games"}>Games</button>
      </div>
  </div>
{:else if GMenu === "ingame"}
  <iframe src={GSource} frameborder="0" class="w-full h-screen" title="Game window.">Your browser doesn't support iframes. It surprises me that you could open this menu lmao.</iframe>
  <div class="absolute right-0 bottom-0 p-4 flex flex-col gap-2 text-xl text-white">
    <button class="btn text-2xl" title="Go back to games menu." on:click={() => GMenu = "inmenu"}><img src={faMenu} alt="Menu icon."></button>
    <button class="btn text-2xl" title="Go back to countdown." on:click={() => $menu = "counter"}><img src={faClock} alt="Clock icon."></button>
  </div>
{/if}
