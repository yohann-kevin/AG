import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import ContactPage from './ContactPage.vue';

describe('ResetPassword', () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(ContactPage, {
      localVue,
      vuetify
    });
  };

  it('should test component render correctly', () => {
    const wrapper = initWrapper();

    const title = wrapper.find('h2');
    expect(title.text()).toContain('Contact');
    expect(wrapper).toMatchSnapshot();
  });
});
