module.exports = {
    git: {
      commitMessage: 'chore: Release ${version}',
      tag: true,
      push: true,
    },
    npm: {
      publish: false
    },
    github: {
      release: true,
      draft: false
    },
    plugins: {
      '@release-it/conventional-changelog': {
        preset: 'angular',
        infile: 'CHANGELOG.md'
      }
    }
  };
