import { writable } from 'svelte/store';

export const pageStore = writable('Home');

export const firstTime = writable(true);