<script lang="ts">
  import { projects } from '#lib/data/projects.ts';
  import { techList } from '#lib/data/tech.ts';
</script>

<svelte:head><title>Projects, Alex Nygård</title></svelte:head>

<h1 class="text-4xl font-normal">Projects</h1>
<p class="mt-4 text-muted-foreground">
  Things I built at school and in my spare time. Each title links to the source code.
</p>

<ul class="mt-14 space-y-12">
  {#each projects as project (project.name)}
    <li class="grid gap-x-6 gap-y-4 sm:grid-cols-[11rem_1fr]">
      <img
        src={project.image}
        alt=""
        loading="lazy"
        class="aspect-[4/3] w-full rounded-sm border object-cover object-top sm:w-44"
      />
      <div>
        <h2 class="text-xl">
          <a href={project.link}>{project.name}</a>
        </h2>
        <p class="aside figures mt-0.5 text-base">{project.time}</p>
        <p class="mt-2">{project.description}</p>
        <p class="mt-1 text-base text-muted-foreground">{techList(project.tech)}.</p>
      </div>
    </li>
  {/each}
</ul>
