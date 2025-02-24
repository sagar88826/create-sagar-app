#!/usr/bin/env node
import { Command } from "commander";
import { createProject } from "./commands/create.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(join(__dirname, "../package.json"), "utf8"));

const program = new Command();

program.name("create-sagar-app").description("CLI to scaffold various project templates").version(pkg.version);

program
  .command("create")
  .description("Create a new project")
  .argument("<name>", "Project name")
  .option("-t, --template <template>", "Template to use (mern)", "mern")
  .action(createProject);

program.parse();
