<script setup lang="ts">
  import data_projects from "~/lib/features/project/data";
  import { technologies } from "~/lib/features/technology/data"

  const filter = reactive<{ technology_id: string }>({ technology_id: technologies.all.id })

  const projects = computed<IProject[]>(() => {
    if (filter.technology_id == technologies.all.id) {
      return data_projects
    }

    return data_projects
      .filter((element) => element.technologies.some((tech) => (tech.id == filter.technology_id)))
  })
</script>

<template>
  <Pager>
    <template #buttons>
      <PagerButton name="Presentación" />
      <PagerButton name="Tecnologías" />
      <PagerButton name="Proyectos" />
    </template>
    <template #elements>
      <Profile />
      <Section
        class="stacks"
        name="Tecnologías"
        description="Todas estas son las technologías con las que he desarrollado durante toda mi carrera"
      >
        <ul>
          <TechnologyLaravel />
          <TechnologyNuxt />
          <TechnologyNode />
          <TechnologyFlutter />
        </ul>
        <ul>
          <TechnologyLaravel />
          <TechnologyNuxt />
          <TechnologyNode />
          <TechnologyFlutter />
          <TechnologyLaravel />
          <TechnologyNuxt />
          <TechnologyNode />
          <TechnologyFlutter />
          <TechnologyLaravel />
          <TechnologyNuxt />
          <TechnologyNode />
          <TechnologyFlutter />
          <TechnologyLaravel />
          <TechnologyNuxt />
          <TechnologyNode />
          <TechnologyFlutter />
        </ul>
      </Section>
      <Section
        class="projects"
        name="Proyectos"
        description="Todas estas son las technologías con la cueles me desenvuelvo bien"
      >
        <ul class="filters">
          <TechnologyLaravel class="animate" />
          <TechnologyNuxt    class="animate" />
          <TechnologyNode    class="animate" />
          <TechnologyFlutter class="animate" />
        </ul>
        <ul class="projects">
          <li v-for="project in projects" :key="project.id">
            <Project :project="project" />
          </li>
        </ul>
      </Section>
    </template>
  </Pager>
</template>
