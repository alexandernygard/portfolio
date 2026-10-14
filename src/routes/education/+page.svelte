<script lang="ts">
  import School from '#lib/components/School.svelte';
  import { education } from '#lib/data/education.ts';
</script>

<svelte:head><title>Education, Alex Nygård</title></svelte:head>

<h1 class="text-4xl font-normal">Education</h1>
<p class="mt-4 text-muted-foreground">
  Schools in Oslo, Karuizawa, Delft, Helsinki and Copenhagen, with an exchange semester in Hong
  Kong.
</p>

<ol class="mt-14 space-y-12">
  {#each education as school (school.degree)}
    <School {school} />
  {/each}
</ol>
