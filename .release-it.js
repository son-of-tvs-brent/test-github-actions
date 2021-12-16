module.exports = {
    git: {
      commitMessage: 'chore: Release ${version}',
      tag: true,
      push: true,
    },
    npm: {
      publish: true
    },
    github: {
      release: true
    },
    plugins: {
      '@release-it/conventional-changelog': {
        preset: 'angular',
        infile: 'CHANGELOG.md'
      }
    }
  };
