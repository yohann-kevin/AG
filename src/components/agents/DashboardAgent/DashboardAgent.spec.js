import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import DashboardAgent from './DashboardAgent.vue'


describe('DashboardAgent', () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(DashboardAgent, {
      localVue,
      vuetify
    });
  };

  it('should test component render correctly', () => {
    const wrapper = initWrapper();

    const title = wrapper.find('h2');
    expect(title.text()).toContain('Dashboard');
    expect(wrapper).toMatchSnapshot();
  });
});
