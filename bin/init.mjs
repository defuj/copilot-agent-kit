#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./commands/init.mjs";

const program = new Command();

program
  .name("copilot-agent-kit")
  .description(
    "AI Agent KIT — multi-stack agent system for GitHub Copilot",
  )
  .version("1.0.0");

program
  .command("init")
  .description("Install AI Agent KIT into your project")
  .option("-f, --force", "Overwrite existing files without prompt")
  .option("-d, --dir <path>", "Target project directory", process.cwd())
  .action(init);

program.parse();
