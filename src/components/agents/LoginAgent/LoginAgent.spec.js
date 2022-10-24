import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import LoginAgent from './LoginAgent.vue'


describe('LoginAgent', () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(LoginAgent, {
      localVue,
      vuetify
      // global: {
      //   plugins: [vuetify],
      // },
    });
  };

  it('should test component render correctly', () => {
    const wrapper = initWrapper();

    const title = wrapper.find('h2');
    expect(title.text()).toContain('Connexion');
    expect(wrapper).toMatchSnapshot();
  });
});
