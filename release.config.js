const isDryRun = process.argv.includes('--dry-run');

module.exports = {
  branches: [{ name: 'develop' }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'docs/CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    ...(isDryRun ? [] : ['@semantic-release/github']),
  ],
};