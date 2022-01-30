import {shallowMount } from '@vue/test-utils';
import AsyncButton from '../components/AsyncButton.vue';


  describe('Mounted App', () => {
    const wrapper = shallowMount(AsyncButton,{
      propsData: {
        label: 'test button'
      }
    });
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('has a button', () => {
      expect(wrapper.find('el-button').exists()).toBe(true)
    })

    it('has a button with Text', () => {
      expect(wrapper.find("el-button", {text: "test button"}).exists()).toBe(true)
    })

    it('Click button', async() => {
      wrapper.vm.buttonAction();
      await setTimeout(async ()=>{
        expect(wrapper.emitted().nextAction).toBeTruthy()
      }, 1000);
    })
  })