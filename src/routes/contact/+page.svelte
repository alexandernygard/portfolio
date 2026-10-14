<script lang="ts">
  import { site } from '#lib/data/site.ts';
</script>

<svelte:head><title>Contact, Alex Nygård</title></svelte:head>

<h1 class="text-4xl font-normal">Contact</h1>

<div class="mt-10 space-y-5">
  <p>
    Email is the best way to reach me:
    <a href="mailto:{site.email}">{site.email}</a>.
  </p>
  <p>
    You can also find me on <a href={site.linkedin}>LinkedIn</a>, or send a message on
    <a href={site.whatsapp.href}>WhatsApp</a> at
    <span class="figures whitespace-nowrap">{site.whatsapp.label}</span>.
  </p>
  <p class="text-muted-foreground">
    I’m happy to hear about engineering, AI or something you’re building.
  </p>
</div>
