import { newE2EPage } from '@stencil/core/testing';

describe('COMPONENT_TAG', () => {
  it('should build', () => {
    expect(new COMPONENT_NAME()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCOMPONENT_NAMEElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [COMPONENT_NAME],
        html: '<COMPONENT_TAG>' 
          + '</COMPONENT_TAG>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
