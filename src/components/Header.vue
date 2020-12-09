<template>
    <span>
    <v-navigation-drawer dark v-model="drawer"
                        fixed
                        app>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/images/profile.jpg" alt="andres">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Reagan Matunga Raice</v-list-tile-title>
              <v-list-tile-sub-title>{{ $t('common.software_developer') }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <Menu></Menu>
    </v-navigation-drawer>
    <v-toolbar :color="color" dark fixed app>
        <v-tooltip bottom close-delay="0">
          <template v-slot:activator="{ on }">
            <v-toolbar-side-icon v-on="isDesktop && on" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          </template>
          <span>{{ $t(titleHamburger) }}</span>
        </v-tooltip>
        <v-toolbar-title class="text-capitalize">{{ $t('header.' + $route.name) }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://www.linkedin.com/in/raice-matunga-a58494a4/">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </template>
          <span>Linkedin</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://github.com/reaganraice">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://twitter.com/reaganmatunga">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </template>
          <span>Twitter</span>
        </v-tooltip>
                <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://www.facebook.com/profile.php?id=1783206338">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </template>
          <span>Facebook</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </template>
          <span>reaganmatunga@gmail.com</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" flat fab href="https://wa.me/27847191540">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </template>
          <span>WhatsApp</span>
        </v-tooltip>
        <!-- <LangSwitcher>
        </LangSwitcher> -->
    </v-toolbar>
    </span>
</template>

<script>
import Menu from './Menu'
import LangSwitcher from './LangSwitcher'
import '@mdi/font/css/materialdesignicons.css'

export default {
    name: "Header",
    components: {
        Menu,
        LangSwitcher
    },
    props: ['color'],
    data () {
        return {
            drawer: null,
        }
    },
    computed: {
        titleHamburger: function() {
            return this.drawer ? 'header.hide_menu' : 'header.show_menu'
        },
        isDesktop: function () {
            return window.outerWidth > 960
        }
    }
}
</script>
