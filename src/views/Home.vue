<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 md8>
        <div class="text-xs-center">
          <v-avatar :size="200" class="pt-5">
            <img class="elevation-6" src="@/assets/images/profile.jpg" alt="andres">
          </v-avatar>

          <v-card class="col-xs-6 elevation-5 px-2 pb-2 pt-5">
            <v-card-text class="display-1 font-weight-bold">
              Raice Matunga Reagan
            </v-card-text>
            <v-card-text class="subheading pt-0 pb-0 font-weight-medium">
              {{ $t('common.software_developer')}}
            </v-card-text>
            <v-card-text class="caption pt-2">
              Cape Town, South Africa
            </v-card-text>
            <v-card-text class="body-1">
              {{ $t('home.about_me') }}
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  .v-avatar {
    z-index: 1;
  }
</style>
