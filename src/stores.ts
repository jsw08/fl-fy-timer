import { writable } from "svelte/store"


type menu = "counter" | "shorts" | "games"

export  let menu = writable(<menu> "counter")