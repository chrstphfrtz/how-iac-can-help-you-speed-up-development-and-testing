# How IaC can help you speed up development and testing

A short demo and talk highlighting how IaC creates consistent and isolated environments to simplify development and testing.

## Overview

This repository contains all the code for the talk [How IaC can help you speed up development and testing]() in the `code/` directory and all the slides in the `slides/` directory.

When starting the Dev Container multiple things happen:

- Node.js, Typescript and the Pulumi CLI are installed as part of container image and features
- The initialization script `init.sh` runs and
  - sources the `PULUMI_ACCESS_TOKEN` and `DIGITALOCEAN_TOKEN` from the top-level `.env` file
  - exports the current branch as the stack name for the Pulumi CLI as the environment variable `STACK`
  - creates a new stack for the Pulumi CLI if it does not already exist
  - provisions the infrastructure defined in the `iac/` directory
  - exports the URL of the backend service as the environment variable `API_URL` and adds it to `frontend/.env` as the variable `EXPO_PUBLIC_API_URL`
  - generates test data with the `.devcontainer/generateTestData.js` script
  - installs NPM dependencies in the frontend project and starts Expo

## Usage

1. Copy the top-level `.env.example` file and name it `.env`
2. Copy in your `PULUMI_ACCESS_TOKEN` and `DIGITALOCEAN_TOKEN`
3. Start any editor that supports Dev Containers and build the container
4. Scan the QR code of the Expo CLI and start developing/testing

## Notes

This is a simple demo project for a talk that I prepared for different [Meetups](https://meetup.com) and knowledge sharing. Therefore, the code does exactly what it needs to do to show the main ideas. Nothing more, nothing less. That means that there is no error handling, no validation, nothing.

## Where to find me?

Github: [chrstphfrtz](https://github.com/chrstphfrtz)  
LinkedIn: [christoph-fritz](https://linkedin.com/in/christoph-fritz)  
