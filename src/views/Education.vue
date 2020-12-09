<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <div class="education">
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
              <v-card-title class="headline" :class="`${year.color}--text`">
                {{ $t(year.title) }}
              </v-card-title>
              <v-card-text v-text="$t(year.description)" class="subheading"></v-card-text>
              <v-card-text v-text="year.site"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: "Education",
    data: () => ({
        years: [
            {
                color: 'cyan',
                year: '2005',
                title: 'education.high_school',
                description: 'education.secondary',
                site: "Bon Berger, Lubumbashi DRCongo"
            },
            {
                color: 'green',
                year: '2009',
                title: 'education.university',
                description: 'education.analyst',
                site: 'Unisa(2009-2010), Cape Town South Africa'
            },
            {
                color: 'pink',
                year: '2018',
                title: 'education.course',
                description: 'education.engineer',
                site: 'CodeSpace(2018), Cape Town South Africa'
            }
        ]
    })
}
</script>
