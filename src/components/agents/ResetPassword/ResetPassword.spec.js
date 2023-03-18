import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import ResetPassword from './ResetPassword.vue';

describe('ResetPassword', () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(ResetPassword, {
      localVue,
      vuetify
    });
  };

  it('should test component render correctly', () => {
    const wrapper = initWrapper();

    const title = wrapper.find('h2');
    expect(title.text()).toContain('Réinitialisation du mot de passe');
    expect(wrapper).toMatchSnapshot();
  });
});
