<script lang="ts">
  import { page } from '$app/state';
  import { toggleMode } from 'mode-watcher';
  import { nav, site } from '#lib/data/site.ts';
</script>

<header class="measure flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-8 pb-4">
  <!-- The home page already opens with the name as its heading. -->
  {#if page.url.pathname === '/'}
    <span></span>
  {:else}
    <a href="/" class="font-bold text-foreground no-underline">{site.name}</a>
  {/if}

  <nav
    aria-label="Main"
    class="-mx-1 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[1.0625rem]"
  >
    {#each nav as link (link.href)}
      <a
        href={link.href}
        aria-current={page.url.pathname === link.href ? 'page' : undefined}
        class="px-1 text-muted-foreground no-underline hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:underline aria-[current=page]:decoration-foreground/40"
      >
        {link.label}
      </a>
    {/each}
    <button
      type="button"
      onclick={toggleMode}
      class="cursor-pointer px-1 text-muted-foreground italic hover:text-foreground"
      title="Switch colour theme (t)"
    >
      <span class="dark:hidden">Dark</span><span class="hidden dark:inline">Light</span>
    </button>
  </nav>
</header>
