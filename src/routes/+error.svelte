<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head><title>{page.status}, Alex Nygård</title></svelte:head>

<h1 class="text-4xl font-normal">
  {page.status === 404 ? 'Page not found' : 'Something went wrong'}
</h1>
<p class="mt-6">
  {#if page.status === 404}
    There’s nothing at <span class="aside">{page.url.pathname}</span>. The page may have moved, or
    the link has a typo.
  {:else}
    {page.error?.message ?? 'The page failed to load.'}
  {/if}
</p>
<p class="mt-4"><a href="/">Go to the home page</a></p>
