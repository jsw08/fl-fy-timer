<script lang="ts">
  import { menu } from '../stores'
</script>
<div class="bg-base-200 p-4 rounded-lg shadow-lg  w-fit max-h-full flex flex-col gap-2 lg:text-xl">
  <ul class="menu bg-base-100 w-full p-2 rounded-box grow overflow-x-auto">
    <li class="menu-title">
      <span>School</span>
    </li>
    <li><a href="https://chrlyceumdelft.magister.net" target="_blank" rel="noreferrer">Magister</a></li>
    <li><a href="https://chrlyceumdelft.itslearning.com" target="_blank" rel="noreferrer">Elo</a></li>
    <li><a href="https://chrlyceumdelft.zportal.nl" target="_blank" rel="noreferrer">Zermelo</a></li>
    <li class="menu-title">
      <span>Google</span>
    </li>
    <li><a href="https://mail.google.com" target="_blank" rel="noreferrer">Gmail</a></li>
    <li><a href="https://drive.google.com" target="_blank" rel="noreferrer">Drive</a></li>
    <li><a href="https://docs.google.com" target="_blank" rel="noreferrer">Docs</a></li>
  </ul>
  <br>
  <div class="btn-group bg-base-100 w-full p-2 rounded-box flex-none">
    <button class="btn btn-sm btn-active" on:click={() => $menu = "shorts"}>Shortcuts</button>
    <button class="btn btn-sm" on:click={() => $menu = "counter"}>Countdown</button>
    <button class="btn btn-sm" on:click={() => $menu = "games"}>Games</button>
  </div>
</div>
