import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Go up two levels from dist/commands to reach project root, then into src/templates
const TEMPLATES_DIR = path.resolve(__dirname, "../../src/templates");

interface CreateOptions {
  template: "mern";
}

const IGNORED_PATHS = ["node_modules", ".git", "dist", ".next", ".turbo", ".cache", ".pnpm-store", "coverage"];

export async function createProject(name: string, options: CreateOptions) {
  const templateDir = path.resolve(TEMPLATES_DIR, options.template);
  const targetDir = path.resolve(process.cwd(), name);

  try {
    // Check if directory exists
    if (await fs.pathExists(targetDir)) {
      console.error(chalk.red(`Error: Directory ${name} already exists`));
      process.exit(1);
    }

    // Create target directory
    await fs.ensureDir(targetDir);

    // Copy all files
    console.log(chalk.blue(`Creating new ${options.template} project in ${targetDir}...`));

    await fs.copy(templateDir, targetDir, {
      filter: (src) => {
        const relativePath = path.relative(templateDir, src);
        return !IGNORED_PATHS.some((ignore) => relativePath.split(path.sep).some((part) => part === ignore));
      },
    });

    // Update package.json
    const pkgPath = path.join(targetDir, "package.json");
    if (await fs.pathExists(pkgPath)) {
      const pkg = await fs.readJson(pkgPath);
      pkg.name = name;
      await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    }

    console.log(chalk.green("\nProject created successfully! 🎉"));
    console.log("\nNext steps:");
    console.log(chalk.cyan(`  cd ${name}`));
    console.log(chalk.cyan("  pnpm install"));
    console.log(chalk.cyan("  pnpm dev"));
  } catch (error) {
    console.error(chalk.red("Error creating project:"), error);
    process.exit(1);
  }
}
