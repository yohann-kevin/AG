import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import AboutPage from './AboutPage.vue';

describe('AboutPage', () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(AboutPage, {
      localVue,
      vuetify
    });
  };

  it('should test component render correctly', () => {
    const wrapper = initWrapper();

    const title = wrapper.find('h2');
    expect(title.text()).toContain('A propos');
    expect(wrapper).toMatchSnapshot();
  });
});
