#!/bin/sh
set -u

. ./.env

stack=$(git rev-parse --abbrev-ref HEAD)
export STACK="${stack}"

stack_exists=$(pulumi -C code/iac/ stack ls -j | jq -r --arg stack "${stack}" 'any(.[] ; .name == $stack)')
if [ "${stack_exists}" = "false" ]; then
  pulumi -C code/iac/ stack init "${stack}"
fi

cd code/iac && npm install && cd ../..

pulumi -C code/iac/ -s "${stack}" up -y
demoBackendUrl=$(pulumi -C code/iac/ -s "${stack}" stack output demoBackendUrl -j | tr -d "\"")
export API_URL="${demoBackendUrl}"

node .devcontainer/generateTestData.js
echo "export EXPO_PUBLIC_API_URL=${demoBackendUrl}" > code/frontend/.env

cd code/frontend && npm install && npx expo start --tunnel