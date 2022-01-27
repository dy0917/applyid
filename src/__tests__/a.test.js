import {mount, shallowMount } from '@vue/test-utils';
import TestComponent from '../components/TestComponent.vue';

describe('A', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof TestComponent.data).toBe('function')
    })

    
  })

  describe('Mounted App', () => {
    const wrapper = mount(TestComponent);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('renders the correct markup', () => {
      expect(wrapper.html()).toContain('What is the sum of the two numbers?')
    })

    it('has a button', () => {
      expect(wrapper.find('button').exists()).toBe(true)
    })

    it('has a button', () => {
      expect(wrapper.find("button", {text: "check answer"}).exists()).toBe(true)
    })
  })