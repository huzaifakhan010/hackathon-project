# Physical AI & Humanoid Robotics – Hands-On Guide to Building Voice-Controlled Humanoids (2025 Capstone Edition)

This repository contains the complete documentation and code examples for the Physical AI & Humanoid Robotics book project, built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Project Overview

This book project provides a comprehensive, hands-on guide to building voice-controlled humanoid robots using open-source AI and robotics technologies. The content is organized into four progressive modules:

- **Module 1**: Robotic Nervous System - From Digital AI to Physical Humanoids
- **Module 2**: Digital Twin - Physics-Accurate Humanoid Simulation
- **Module 3**: AI Robot Brain - NVIDIA Isaac Perception and Navigation
- **Module 4**: Vision-Language-Action - Complete Voice-Controlled Robot Pipeline

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Spec-Kit Plus Commands

This project uses Spec-Kit Plus for specification-driven development:

- `/sp.specify` - Generate/update specifications
- `/sp.plan` - Generate implementation plan
- `/sp.tasks` - Generate task breakdown
- `/sp.implement` - Execute implementation tasks
- `/sp.git.commit_pr` - Create commit and pull request
