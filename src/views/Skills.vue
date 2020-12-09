<template>
  <v-container fluid grid-list-md>
    <v-flex xs12 md8 offset-md2>
      <v-card v-for="(item, key) in items" class="mb-3 elevation-4" :key="`skills-${key}`">
        <v-card-title class="subheading font-weight-bold">
          {{ $t(item.text) }}
        </v-card-title>
        <v-divider></v-divider>
        <v-slide-y-transition>
          <v-list dense>
            <v-list-tile v-for="skill in item.items" :key="`skills-${key}-${skill.name}`">
              <v-list-tile-content>{{ skill.name }}</v-list-tile-content>
              <v-list-tile-content class="align-end">
                <v-rating :title="skill.score"
                          v-model="skill.score"
                          classes="text-lg-right"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          half-increments
                          :readonly="true">
                </v-rating>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data () {
      return {
          items: [
              {
                  text: 'skills.languages',
                  color: 'teal darken-2',
                  items: [
                    { name: 'Nodejs', score: 3 },
                    { name: 'Html', score: 4.5 },
                    { name: 'JavaScript', score: 3 },
                    { name: 'CSS', score: 4 },
                    { name: 'Php', score: 3 },
                    { name: 'C#', score: 2 }
                  ]
              },
              {
                  text: 'skills.frameworks',
                  color: 'light-blue darken-4',
                  items: [
                      { name: 'Magento 1.9' , score: 3 },
                      { name: 'React' , score: 2 },
                      { name: 'VueJs 2' , score: 3 },
                      { name: 'WordPress' , score: 3 },
                      { name: 'Laravel' , score: 3 }
                  ]
              },
              {
                  text: 'skills.libs',
                  color: 'red darken-1',
                  items: [
                      { name: 'Bootstrap 3/4' , score: 4.5 },
                      { name: 'Jquery' , score: 4 },
                      { name: 'UnitTest' , score: 4 }
                  ]
              },
              {
                  text: 'skills.databases',
                  color: 'deep-purple darken-1',
                  items: [
                      { name: 'Mysql' , score: 4.5 },
                      { name: 'MongoDb' , score: 3.5 }
                  ]
              },
              {
                  text: 'skills.os',
                  classes: 'green darken-3',
                  items: [
                      { name: 'Windows' , score: 4.5 },
                      { name: 'Linux' , score: 4.5 }
                  ]
              },
              {
                  text: 'skills.others',
                  color: 'blue-grey darken-1',
                  items: [
                      { name: 'Git' , score: 5 },
                      { name: 'Kubernetes' , score: 4.5 },
                      { name: 'Cloudflare' , score: 4 },
                      { name: 'Adobe Photoshop' , score: 4 },
                      { name: 'Ubuntu' , score: 4 },
                      { name: 'Nginx' , score: 1 },
                      { name: 'Jenkins' , score: 1 },
                      { name: 'Docker' , score: 3.5 },
                      { name: 'Redis' , score: 3.5 },
                      { name: 'Heroku' , score: 2.5 }
                  ]
              }
          ]
      }
  }
}
</script>

<style scoped>
</style>
