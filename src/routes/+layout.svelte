<script lang="ts">
  import '../app.css';
  import { goto, onNavigate } from '$app/navigation';
  import { ModeWatcher, toggleMode } from 'mode-watcher';
  import SiteHeader from '#lib/components/SiteHeader.svelte';
  import { nav, site } from '#lib/data/site.ts';

  let { children } = $props();

  const shortcuts: Record<string, string> = {
    h: '/',
    ...Object.fromEntries(nav.map((link) => [link.key, link.href])),
  };

  function onkeydown(event: KeyboardEvent) {
    if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

    if (event.key === 't') {
      toggleMode();
    } else if (shortcuts[event.key]) {
      goto(shortcuts[event.key]);
    }
  }

  // Cross-fade between pages where the browser supports view transitions.
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:window {onkeydown} />

<svelte:head>
  <title>{site.name}</title>
  <meta
    name="description"
    content="Alex Nygård is an associate consultant at PwC Norway with an MSc in Security and Cloud Computing."
  />
</svelte:head>

<ModeWatcher themeColors={{ light: '#f5f7f8', dark: '#1c1d1f' }} disableTransitions />

<a
  href="#main"
  class="sr-only bg-background px-3 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50"
>
  Skip to content
</a>

<div class="flex min-h-dvh flex-col">
  <SiteHeader />

  <main id="main" class="measure flex-1 pt-14 pb-24 sm:pt-20">
    {@render children()}
  </main>

  <footer class="measure pb-10 text-base text-muted-foreground">
    <p class="hidden border-t pt-6 sm:block">
      Press a, w, e, p or c to move between pages, h for home and t to switch theme.
    </p>
  </footer>
</div>
