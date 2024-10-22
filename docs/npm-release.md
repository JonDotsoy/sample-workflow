# Action npm-release

Action `Servicios-Liverpool-Infraestructura/dig_gh_workflows/.github/workflows/npm-release.yml@v1`

This action upgrade versions on package.json and publishes them to Artifact Registry.

## Inputs

- 

## Usage

### Configure `.npmrc`

> [!INFORMATION]
> You can skip this step if your `.npmrc` file is already configured.

Add the following template to your `.npmrc` file, in the same directory as your `package.json` file. Replace the parameters according to your Artifact Registry repository settings.

**Parameters:**

- `{{@SCOPE}}`: The scope of the package, typically an organization or user name.
- `{{LOCATION}}`: The Google Cloud region where your Artifact Registry repository is located.
- `{{PROJECT_ID}}`: The Google Cloud project ID that hosts your Artifact Registry repository.
- `{{REPOSITORY_ID}}`: The name of your Artifact Registry repository.

```
{{@SCOPE}}:registry=https://{{LOCATION}}-npm.pkg.dev/{{PROJECT_ID}}/{{REPOSITORY_ID}}/
//{{LOCATION}}-npm.pkg.dev/{{PROJECT_ID}}/{{REPOSITORY_ID}}/:always-auth=true
```

Read more about `.npmrc` file [here](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc).

### Usage the action in a workflow

To use the action, add the the `uses` property `Servicios-Liverpool-Infraestructura/dig_gh_workflows/.github/workflows/npm-release.yml@v1` in the job.

**Sample (minimal configuration):**

```yaml
name: release this lib

jobs:
  release:
    uses: Servicios-Liverpool-Infraestructura/dig_gh_workflows/.github/workflows/npm-release.yml@v1
```

