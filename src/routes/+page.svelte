<script lang="ts">
  import { site } from '#lib/data/site.ts';

  const recently = [
    { span: '2026–', what: 'Associate Consultant', where: 'PwC Norway' },
    { span: '2024–26', what: 'MSc Security and Cloud Computing', where: 'Aalto and DTU' },
    { span: '2024–26', what: 'Software Engineering Apprentice', where: 'Ardoq' },
  ];
</script>

<h1 class="text-[2.5rem] leading-tight font-normal sm:text-5xl">{site.name}</h1>
<p class="aside mt-2 text-xl">Software engineer in Oslo</p>

<div class="mt-12 space-y-5">
  <p>
    I work as an associate consultant at <a href="https://www.pwc.no/">PwC Norway</a>, which I
    joined in August 2026 after finishing a joint master’s in security and cloud computing. I spent
    the first year of it at Aalto University in Helsinki and the second at DTU in Copenhagen.
  </p>
  <p>
    Alongside my studies I worked at <a href="https://www.ardoq.com/">Ardoq</a>, writing Clojure and
    TypeScript on their product. Before that I lived in the Netherlands, where I studied computer
    science at TU Delft and worked at Picnic, Hammer Market Intelligence and Vera Connect.
  </p>
  <p>
    You can read my <a href={site.cv}>CV as a PDF</a>, <a href="/work">see where I’ve worked</a>, or
    <a href="/contact">get in touch</a>.
  </p>
</div>

<h2 class="mt-16 mb-4 text-xl">Recently</h2>
<ul class="space-y-2">
  {#each recently as item (item.what)}
    <li class="entry">
      <span class="figures text-muted-foreground">{item.span}</span>
      <span>{item.what}, <span class="aside">{item.where}</span></span>
    </li>
  {/each}
</ul>
