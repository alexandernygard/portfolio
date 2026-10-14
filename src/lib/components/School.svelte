<script lang="ts">
  import type { School } from '#lib/data/education.ts';

  let { school }: { school: School } = $props();

  // A topic picked by click stays highlighted; hover and focus preview one.
  let pinned = $state<string | null>(null);
  let preview = $state<string | null>(null);
  const active = $derived(pinned ?? preview);

  const courseCount = $derived(
    school.curriculum?.reduce(
      (total, year) => total + year.periods.reduce((n, p) => n + p.courses.length, 0),
      0,
    ) ?? 0,
  );
</script>

<li class="entry">
  <span class="figures text-muted-foreground">{school.span}</span>
  <div class="min-w-0">
    <h2 class="text-xl">{school.degree}</h2>
    <p class="mt-1">
      {school.institution}, <span class="aside">{school.location}</span>
    </p>
    {#if school.programme}
      <p class="aside mt-1 text-base">{school.programme}</p>
    {/if}
    {#if school.note}
      <p class="aside mt-1 text-base">{school.note}</p>
    {/if}
    {#if school.thesis}
      <p class="mt-3">
        Thesis: <a href={school.thesis.link}><cite>{school.thesis.title}</cite></a>
      </p>
    {/if}

    {#if school.curriculum && school.topics}
      <details class="group mt-4">
        <summary
          class="cursor-pointer list-none text-base text-link underline decoration-link/40 underline-offset-[0.18em] hover:decoration-current [&::-webkit-details-marker]:hidden"
        >
          <span class="group-open:hidden">Show the {courseCount} courses</span>
          <span class="hidden group-open:inline">Hide courses</span>
        </summary>

        <p class="mt-5 text-base text-muted-foreground">
          Highlight:
          {#each Object.entries(school.topics) as [key, label], i (key)}
            <button
              type="button"
              aria-pressed={pinned === key}
              onclick={() => (pinned = pinned === key ? null : key)}
              onpointerenter={() => (preview = key)}
              onpointerleave={() => (preview = null)}
              onfocus={() => (preview = key)}
              onblur={() => (preview = null)}
              class="cursor-pointer lowercase underline decoration-dotted underline-offset-[0.18em] hover:text-foreground aria-pressed:font-bold aria-pressed:text-foreground aria-pressed:decoration-solid"
              >{label}</button
            >{i < Object.keys(school.topics).length - 1 ? ', ' : ''}
          {/each}
        </p>

        <div class="mt-6 space-y-7 text-base">
          {#each school.curriculum as year (year.label)}
            <section>
              <h3 class="font-normal">
                {year.label}{#if year.location}<span class="aside">, {year.location}</span>{/if}
              </h3>
              <div class="mt-2 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {#each year.periods as period (period.label)}
                  <div>
                    <h4 class="aside text-[0.9375rem]">{period.label}</h4>
                    <ul class="mt-1">
                      {#each period.courses as course (course.name)}
                        <li
                          class="leading-snug transition-opacity duration-150 not-last:mb-1"
                          class:opacity-35={active && active !== course.topic}
                        >
                          {course.name}
                        </li>
                      {/each}
                    </ul>
                  </div>
                {/each}
              </div>
            </section>
          {/each}
        </div>
      </details>
    {/if}
  </div>
</li>
