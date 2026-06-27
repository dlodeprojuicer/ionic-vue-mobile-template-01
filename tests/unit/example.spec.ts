import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'
import { describe, expect, test } from 'vitest'
import router from '@/router'

describe('HomePage.vue', () => {
  test('renders home overview', async () => {
    router.push('/home')
    await router.isReady()

    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Overview')
    expect(wrapper.text()).toContain('Expenses')
  })
})
