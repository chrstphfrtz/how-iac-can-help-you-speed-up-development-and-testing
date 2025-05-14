import * as digitalocean from "@pulumi/digitalocean";

const stack = process.env.STACK;

const demoBackendName = `demo-backend-${stack}`
const demoBackend = new digitalocean.App(demoBackendName, {
  projectId: "c1cf44a6-cd57-41bf-b95b-f6a60efed99c",
  spec: {
    databases: [{
      clusterName: "dev",
      engine: "PG",
      name: "dev",
      version: "17",
    }],
    envs: [
      {
        key: "DB_USER",
        value: "${dev.USERNAME}",
      },
      {
        key: "DB_PASSWORD",
        value: "${dev.PASSWORD}",
      },
      {
        key: "DB_HOST",
        value: "${dev.HOSTNAME}",
      },
      {
        key: "DB_NAME",
        value: "${dev.DATABASE}",
      },
      {
        key: "DB_PORT",
        value: "${dev.PORT}",
      },
    ],
    name: demoBackendName,
    services: [{
      name: demoBackendName,
      instanceCount: 1,
      instanceSizeSlug: "apps-s-1vcpu-0.5gb",
      git: {
        repoCloneUrl: "https://github.com/chrstphfrtz/how-iac-can-help-you-speed-up-development-and-testing-demo.git",
        branch: "main"
      },
      sourceDir: "code/backend"
    }]
  }
})

export const demoBackendUrl = demoBackend.liveUrl;