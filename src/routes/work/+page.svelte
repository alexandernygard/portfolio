<script lang="ts">
  import { techList } from '#lib/data/tech.ts';
  import { work } from '#lib/data/work.ts';
</script>

<svelte:head><title>Work, Alex Nygård</title></svelte:head>

<h1 class="text-4xl font-normal">Work</h1>
<p class="mt-4 text-muted-foreground">
  Five companies so far, in Norway and the Netherlands. Under each role are the tools I used day to
  day.
</p>

<ol class="mt-14 space-y-12">
  {#each work as employer (employer.company)}
    <li class="entry">
      <span class="figures text-muted-foreground">{employer.span}</span>
      <div>
        <h2 class="text-xl">
          <a href={employer.website} class="text-foreground">{employer.company}</a><span
            class="aside font-normal">, {employer.location}</span
          >
        </h2>

        <ul class="mt-3 space-y-4">
          {#each employer.roles as role (role.title)}
            <li>
              <p>{role.title}, <span class="aside">{role.time}</span></p>
              {#if role.tech}
                <p class="mt-1 text-base text-muted-foreground">{techList(role.tech)}.</p>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </li>
  {/each}
</ol>
