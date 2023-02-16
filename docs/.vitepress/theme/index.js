import DefaultTheme from 'vitepress/theme';
import Autocomplete from '../../components/Autocomplete.vue';
import AutocompleteByState from '../../components/AutocompleteByState.vue';
import AutocompleteSvg from '../../components/AutocompleteSvg.vue';
import IsItInState from '../../components/IsItInState.vue';
import Favorites from '../../components/Favorites.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Autocomplete', Autocomplete);
    ctx.app.component('AutocompleteSvg', AutocompleteSvg);
    ctx.app.component(
      'AutocompleteByState',
      AutocompleteByState
    );
    ctx.app.component('IsItInState', IsItInState);
    ctx.app.component('Favorites', Favorites);
  },
};
