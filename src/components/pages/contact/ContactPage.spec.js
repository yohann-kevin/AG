import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import ContactPage from "./ContactPage.vue";

describe("ResetPassword", () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(ContactPage, {
      localVue,
      vuetify,
    });
  };

  it("should test component render correctly", () => {
    const wrapper = initWrapper();

    const title = wrapper.find("h2");
    expect(title.text()).toContain("Contact");
    expect(wrapper).toMatchSnapshot();
  });

  it("should method formatNeed return need formatted", () => {
    const needFormattedExpected = "mannequin/photographe/studio";

    const wrapper = initWrapper();
    wrapper.setData({
      needSelected: ["mannequin", "photographe", "studio"],
    });

    const needFormatted = wrapper.vm.formatNeed();

    expect(needFormatted).toEqual(needFormattedExpected);
  });

  it('should method checkContactForm return true if all value is present', () => {
    const wrapper = initWrapper();
    wrapper.setData({
      email: 'test@test.com',
      object: 'object test',
      needSelected: ["mannequin", "photographe", "studio"],
      content: 'test text'
    });

    const contactformIsComplete = wrapper.vm.checkContactForm();

    expect(contactformIsComplete).toBeTruthy();
  });

  it('should method checkContactForm return false if all value is not present', () => {
    const wrapper = initWrapper();
    wrapper.setData({
      email: 'test@test.com',
      object: 'object test',
      content: 'test text'
    });

    const contactformIsNotComplete = wrapper.vm.checkContactForm();

    expect(contactformIsNotComplete).toBeFalsy();
  });
});
