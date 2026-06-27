import pluginVue from 'eslint-plugin-vue'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default withVueTs(
  {
    ignores: [
      '.DS_Store',
      'node_modules',
      'coverage',
      'dist',
      'ios',
      'android',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.idea',
      '.vscode',
    ],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      'vue/no-deprecated-slot-attribute': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
