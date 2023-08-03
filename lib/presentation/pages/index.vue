<script setup lang="ts">
  import data_projects from "~/lib/features/project/data";
import { technologies } from "~/lib/features/technology/data";

  const filter = reactive<{ technology_id?: string }>({})

  const change_technology = (technology?: ITechnology) => {
    filter.technology_id == technology?.id
      ? filter.technology_id = undefined
      : filter.technology_id = technology?.id
  }

  const projects = computed<IProject[]>(() => {
    if (filter.technology_id == undefined) {
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
          <TechnologyPhp />
          <TechnologyMysql />
          <TechnologyHtml />
          <TechnologyScss />
          <TechnologyCss />
          <TechnologyJs />
          <TechnologyTs />
          <TechnologyDart />
          <TechnologyFirebase />
        </ul>
      </Section>
      <Section
        class="projects"
        name="Proyectos"
        description="Todas estas son las technologías con la cueles me desenvuelvo bien"
      >
        <ul class="filters">
          <TechnologyLaravel class="animate" :class="{ enabled: filter.technology_id == technologies.laravel.id }" @click="change_technology(technologies.laravel)" />
          <TechnologyNuxt    class="animate" :class="{ enabled: filter.technology_id == technologies.nuxt.id }"    @click="change_technology(technologies.nuxt)"/>
          <TechnologyNode    class="animate" :class="{ enabled: filter.technology_id == technologies.node.id }"    @click="change_technology(technologies.node)"/>
          <TechnologyFlutter class="animate" :class="{ enabled: filter.technology_id == technologies.flutter.id }" @click="change_technology(technologies.flutter)"/>
        </ul>
        <ul class="projects">
          <li v-for="project in projects" :key="project.id">
            <a :href="project.url" target="_blank">
              <Project :project="project" />
            </a>
          </li>
        </ul>
      </Section>
    </template>
  </Pager>
</template>
