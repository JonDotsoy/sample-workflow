# Action npm-release

Action `Servicios-Liverpool-Infraestructura/dig_gh_workflows/.github/workflows/npm-release.yml@v1`

This action upgrade versions on package.json and publishes them to Artifact Registry.

## Inputs

- `branch`: The branch to release from. Default is main.
- `scope`: The scope of the NPM package.
- `location`: The location of the Artifact Registry repository.
- `project_id`: The ID of the Google Cloud project.
- `repository_id`: The ID of the Artifact Registry repository.

## Permisions Required

```yaml
permissions:
  contents: write
  pull-requests: write
  issues: write
  actions: write
```

## Usage the action in a workflow

To use the action, add the the `uses` property `Servicios-Liverpool-Infraestructura/dig_gh_workflows/.github/workflows/npm-release.yml@v1` in the job.

**Sample (minimal configuration):**

```yaml
name: release this lib

permissions:
  contents: write
  pull-requests: write
  issues: write
  actions: write

jobs:
  release:
    uses: Servicios-Liverpool-Infraestructura/dig_gh_workflows/.github/workflows/npm-release.yml@v1
    with:
      branch: main
      scope: "@SCOPE"
      location: us-east1
      project_id: project-001
      repository_id: npm-repos
```

