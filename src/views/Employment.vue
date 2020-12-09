<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <div class="employment">
        <v-timeline>
          <v-timeline-item
                  v-for="(year, i) in years"
                  :key="i"
                  :color="year.color"
                  small>
          <span slot="opposite"
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"></span>
            <v-card class="elevation-4">
              <v-card-title class="headline" :class="`${year.color}--text`">{{ year.title }}</v-card-title>
              <v-card-text v-text="$t(year.description)" class="subheading"></v-card-text>
              <v-card-text v-text="year.city"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: "Employment",
    data: () => ({
        years: [
            {
                color: 'pink',
                year: '2013',
                title: 'Manga Restaurant 2013 - 2017 ',
                description: 'employment.full_stack',
                city: "Cape Town, South Africa"
            },
            {
                color: 'amber',
                year: '2018',
                title: 'OneDayOnly December 2018 - March 2020',
                description: 'employment.tech_lead',
                city: "Cape Town, South Africa"
            },
            {
                color: 'teal',
                year: '2020',
                title: 'Fireflex CC April 2020 - Present',
                description: 'employment.architect',
                city: "Cape Town, South Africa"
            }
        ]
    })
}
</script>
