<script lang="ts">
  import { set, add } from "date-fns";
  import { onDestroy, onMount } from "svelte";
  import { menu } from "../stores.js";

  interface Class {
    d: Date;
    t: string;
  }
  interface CDownTimes {
    h: number;
    m: number;
    s: number;
  }

  const classes: Array<Class> = [
    {
      d: set(new Date(), { hours: 8, minutes: 0, seconds: 0 }),
      t: "1st class",
    },
    {
      d: set(new Date(), { hours: 8, minutes: 45, seconds: 0 }),
      t: "2nd class",
    },
    {
      d: set(new Date(), { hours: 9, minutes: 30, seconds: 0 }),
      t: "1st break",
    },
    {
      d: set(new Date(), { hours: 9, minutes: 45, seconds: 0 }),
      t: "3rd class",
    },
    {
      d: set(new Date(), { hours: 10, minutes: 30, seconds: 0 }),
      t: "4th class",
    },
    {
      d: set(new Date(), { hours: 11, minutes: 15, seconds: 0 }),
      t: "2nd break",
    },
    {
      d: set(new Date(), { hours: 11, minutes: 30, seconds: 0 }),
      t: "5th class",

    {
      d: set(new Date(), { hours: 12, minutes: 15, seconds: 0 }),
      t: "6th class",
    },
    {
      d: set(new Date(), { hours: 13, minutes: 0, seconds: 0 }),
      t: "3rd break",
    },
    {
      d: set(new Date(), { hours: 13, minutes: 30, seconds: 0 }),
      t: "7th class",
    },
    {
      d: set(new Date(), { hours: 14, minutes: 15, seconds: 0 }),
      t: "8th class",
    },
    {
      d: set(new Date(), { hours: 15, minutes: 0, seconds: 0 }),
      t: "4th break",
    },
    {
      d: set(new Date(), { hours: 15, minutes: 5, seconds: 0 }),
      t: "9th class",
    },
    {
      d: set(new Date(), { hours: 15, minutes: 50, seconds: 0 }),
      t: "10th class",
    },
    {
      d: set(new Date(), { hours: 16, minutes: 35, seconds: 0 }),
      t: "The end :D",
    },
  ];

  let date: Date = new Date();
  let inSchool: boolean = false;
  let currentClass: undefined | Class;
  let currentTimes: CDownTimes = { h: 0, m: 0, s: 0 };

  $: {
    currentClass = classes.find(
      (v) => new Date(v.d).getTime() > date.getTime()
    );
    inSchool =
      date.getDay() !== 6 &&
      date.getDay() !== 0 &&
      currentClass !== undefined &&
      date.getHours() >= 6;

    if (inSchool) {
      let distance: number =
        new Date(currentClass.d).getTime() - date.getTime();
      currentTimes["h"] = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      currentTimes["m"] = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      currentTimes["s"] = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      let tomorrow: Date = add(date, { days: 1 });
      tomorrow = set(new Date(tomorrow), { hours: 8, minutes: 30, seconds: 0 });
      let distance: number = new Date(tomorrow).getTime() - date.getTime();
      currentTimes["h"] = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      currentTimes["m"] = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      currentTimes["s"] = Math.floor((distance % (1000 * 60)) / 1000);
      currentClass = {
        d: tomorrow,
        t: "1st class",
      };
    }
  }

  let dateInterval: number;
  onMount(() => (dateInterval = setInterval(() => (date = new Date()), 1000)));
  onDestroy(() => clearInterval(dateInterval));

  const click: any | Function = () => {
    $menu = "shorts";
  };
  const rClick: any | Function = () => {
    $menu = "games";
  };
</script>

<div
  class="bg-base-200 p-4 rounded-lg shadow-lg scale-110 sm:scale-120 text-center"
  on:click={click}
  on:keypress={click}
  on:contextmenu|preventDefault={rClick}
>
  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style={`--value:${currentTimes.h};`} />
      </span>
      hours
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style={`--value:${currentTimes.m};`} />
      </span>
      minutes
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span style={`--value:${currentTimes.s};`} />
      </span>
      seconds
    </div>
  </div>
  <span>until {currentClass.t}</span>
</div>

<span class="absolute right-0 bottom-0 m-4 text-xl">Made by Jurn Wubben</span>
