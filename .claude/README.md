# Claude Configuration

This directory contains configuration and custom commands for Claude Code in the vibe-coding monorepo.

## Structure

- `config.json` - Project-level configuration for Claude Code
- `commands/` - Custom slash commands for common tasks

## Available Commands

- `/dev [app-name]` - Start development server
- `/test [project-name]` - Run tests
- `/build [project-name]` - Build for production
- `/graph` - Show dependency graph

## Usage

These commands are available when using Claude Code in this workspace. They provide shortcuts for common Nx monorepo operations.

## Customization

You can add more commands by creating new `.md` files in the `commands/` directory. Each command file should include:

```markdown
---
description: Brief description of what the command does
---

Detailed instructions for the command...
```
