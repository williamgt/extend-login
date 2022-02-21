import { mount } from "@vue/test-utils";
import LoginComponent from "../../src/components/LoginComponent";
import { doLogin } from "../../src/utils/api";
import flushPromises from "flush-promises";

jest.mock("../../src/utils/api"); //Mocking doLogin

afterEach(() => {
  jest.clearAllMocks();
});

describe("LoginComponent", () => {
  it("Input fields are empty by default", () => {
    let wrapper = mount(LoginComponent);
    let usernameInput = wrapper.find('[data-testid="username-input"]');
    let passwordInput = wrapper.find('[data-testid="password-input"]');
    expect(usernameInput.element.value).toMatch("");
    expect(passwordInput.element.value).toMatch("");
  });

  it("Username input works and is connected to username data", () => {
    let wrapper = mount(LoginComponent);
    let usernameInput = wrapper.find('[data-testid="username-input"]');
    let newUsername = "TestingName";
    usernameInput.setValue(newUsername);
    expect(wrapper.vm.username).toMatch(newUsername); //vm is equivalent to data
  });

  it("Password input works and is connected to password data", () => {
    let wrapper = mount(LoginComponent);
    let passwordInput = wrapper.find('[data-testid="password-input"]');
    let newPassword = "TestingPassword";
    passwordInput.setValue(newPassword);
    expect(wrapper.vm.password).toMatch(newPassword);
  });

  it("Signing in with right username and password", async () => {
    await doLogin.mockReturnValueOnce(true); //Maybe mock return value instead
    let mockRouter = {
      push: jest.fn(),
    };
    let wrapper = mount(LoginComponent, {
      global: {
        stubs: ["router-link"],
        mocks: {
          $router: mockRouter,
        },
      },
    });
    await wrapper.find("button").trigger("click"); //Remember! You are mocking the actual componenet, remember to use them

    await flushPromises();

    expect(doLogin).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenLastCalledWith("/home");
    const message = wrapper.find('[data-testid="login-status-label"]').text();
    expect(message).toEqual("Logged in"); //TODO this is really bad
  });

  it("Signing in with wrong username and password", async () => {
    await doLogin.mockReturnValueOnce(false); //Maybe mock return value instead

    let wrapper = mount(LoginComponent, {
      global: {
        stubs: ["router-link"],
      },
    });
    await wrapper.find("button").trigger("click"); //Remember! You are mocking the actual componenet, remember to use them

    await flushPromises();

    expect(doLogin).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="login-status-label"]').text();
    expect(message).toEqual("Something went wrong"); //TODO this is really bad
  });
});
