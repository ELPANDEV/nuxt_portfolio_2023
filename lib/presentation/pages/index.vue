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
          <Technology
            v-for="technology in technologies"
            :key="technology.id"
            :technology="technology"
          />
        </ul>
      </Section>
      <Section
        class="projects"
        name="Proyectos"
        description="Todas estas son las technologías con la cueles me desenvuelvo bien"
      >
        <ul class="filters">
          <Technology
            v-for="technology in technologies"
            :key="technology.id"
            @click="filter.technology_id = technology.id"
            :class="{ enabled: filter.technology_id == technology.id }"
            :technology="technology"
          />
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
