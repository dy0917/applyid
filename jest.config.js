module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/"],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!vue-awesome|vue-quill-editor)"
  ],

  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}