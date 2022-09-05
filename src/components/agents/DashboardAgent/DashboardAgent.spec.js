import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import DashboardAgent from "./DashboardAgent.vue";

describe("DashboardAgent", () => {
  const initWrapper = () => {
    const localVue = createLocalVue();
    const vuetify = new Vuetify();
    return shallowMount(DashboardAgent, {
      localVue,
      vuetify,
    });
  };

  it("should test component render correctly", async () => {
    const wrapper = initWrapper();
    const agents = {
      id: "f5552305-302b-4c6a-acc5-7b722225c54c",
      firstname: "Yohann",
      lastname: "Perriguey",
      email: "Yo44prg@icloud.com",
    };
    await wrapper.setData({ agents: agents });
    const title = wrapper.find("h2");
    expect(title.text()).toContain("Tableau de bord");
    expect(wrapper).toMatchSnapshot();
  });
});
