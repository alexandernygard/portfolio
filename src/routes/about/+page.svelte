<script lang="ts">
  import { site } from '#lib/data/site.ts';
  import { stack, techList } from '#lib/data/tech.ts';
  import portrait from '#lib/images/pfp-transparent.png';
</script>

<svelte:head><title>About, Alex Nygård</title></svelte:head>

<h1 class="text-4xl font-normal">About</h1>

<figure class="mt-10 sm:float-right sm:mt-1 sm:mb-6 sm:ml-8">
  <img
    src={portrait}
    alt="Alex Nygård"
    class="w-44 rounded-sm bg-muted object-cover object-top sm:w-48"
    width="192"
    height="240"
  />
</figure>

<div class="mt-10 space-y-5">
  <p>
    I’m Norwegian, and school has taken me to Japan, the Netherlands, Finland and Denmark. These
    days I’m back in Oslo, working as an associate consultant at PwC Norway.
  </p>
  <p>
    I finished the SECCLO joint master’s in Security and Cloud Computing in June 2026, after a year
    at Aalto University and a year at DTU. Before that I took a bachelor’s in Computer Science and
    Engineering at TU Delft, with an exchange semester at HKUST.
  </p>
  <p>
    For two years I also worked at Ardoq alongside my studies, first as an intern and then as an
    apprentice, mostly in Clojure, TypeScript and React. I like backend work, cloud infrastructure
    and the places where they meet security.
  </p>
</div>

<h2 class="mt-14 text-xl sm:clear-both">Tools I know well</h2>
<dl class="mt-4 space-y-2">
  {#each stack as group (group.label)}
    <div class="entry">
      <dt class="aside">{group.label}</dt>
      <dd>{techList(group.items)}</dd>
    </div>
  {/each}
</dl>

<p class="mt-14">
  Elsewhere: <a href={site.github}>GitHub</a> and <a href={site.linkedin}>LinkedIn</a>.
</p>
