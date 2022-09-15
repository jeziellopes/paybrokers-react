// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  // verbose: true,
  collectCoverageFrom: ['src/**/**/*.ts'],
  coveragePathIgnorePatterns: [
    '.entity.ts',
    '.model.ts',
    '.adapter.ts',
    '.config.ts',
    '.middleware.ts',
    '.route.ts',
    '.dto.ts',
    '.usecase.ts',
    '.contract.ts',
    '.controller.ts',
    '.repository.ts',
    'index.ts',
    'server.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      statements: 100,
    },
  },
}

module.exports = config
