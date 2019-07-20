module.exports = {
  name: 'adoption-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/adoption-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
