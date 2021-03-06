import { describe, expect, it, vi } from 'vitest'
import type { MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { fireEvent, render } from '@testing-library/vue'

import Component from './HelloWorld.vue'

const factory = (options?: MountingOptions<any>) => render(Component, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn }), i18n],
  },
  ...options,
})

describe('HelloWorld', () => {
  it('shold mount correctly', async () => {
    const wrapper = factory({})
    expect(wrapper).toBeTruthy()
    wrapper.unmount()
  })

  it('shold add counter correctly', async () => {
    const wrapper = factory({})
    const { getByTestId } = wrapper
    const counterElement = getByTestId('counter')
    const counterPiniaElement = getByTestId('counter-pinia')
    const addElement = getByTestId('add-btn')
    const addPiniaElement = getByTestId('add-btn-pinia')

    expect(counterElement.innerHTML).toBe('Counter: 0')
    await fireEvent.click(addElement)
    expect(counterElement.innerHTML).toBe('Counter: 1')

    expect(counterPiniaElement.innerHTML).toBe('Counter Pinia: 0')
    await fireEvent.click(addPiniaElement)
    expect(counterPiniaElement.innerHTML).toBe('Counter Pinia: 1')
    wrapper.unmount()
  })

  it('shold change locale correctly', async () => {
    const wrapper = factory({})
    const { getByTestId } = wrapper
    const toggleElement = getByTestId('toggle-button')
    const localElement = getByTestId('local')

    expect(toggleElement.innerHTML).toBe('Button Change Locale')
    expect(localElement.innerHTML).toBe('Local')
    await fireEvent.click(toggleElement)
    expect(toggleElement.innerHTML).toBe('دکمه تغییر زبان')
    expect(localElement.innerHTML).toBe('محلی')

    wrapper.unmount()
  })
})
