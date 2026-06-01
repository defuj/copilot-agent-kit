import {
  readFileSync,
  existsSync,
  copyFileSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  appendFileSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = join(__dirname, "..", "..");

function copyRecursive(src, dest) {
  if (!existsSync(src)) return;
  const entries = readdirSync(src, { withFileTypes: true });
  mkdirSync(dest, { recursive: true });
  for (const entry of entries) {
    if (entry.name === ".DS_Store") continue;
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      if (!existsSync(destPath)) {
        copyFileSync(srcPath, destPath);
      }
    }
  }
}

export async function init(options) {
  const targetDir = options.dir;
  const force = options.force;

  console.log(`\n  copilot-agent-kit init`);

  if (!existsSync(targetDir)) {
    console.error(`  ✗ Target directory does not exist: ${targetDir}`);
    process.exit(1);
  }

  const copilotDir = join(targetDir, ".github");

  if (existsSync(copilotDir) && !force) {
    console.log(`  \n  ⚠  .github/ already exists in ${targetDir}`);
    const rl = await import("readline/promises");
    const readline = rl.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const answer = await readline.question(
      `  ? Overwrite existing files? [y/N] `,
    );
    readline.close();
    if (answer.toLowerCase() !== "y") {
      console.log(`  ✗ Aborted.`);
      process.exit(0);
    }
  }

  const srcAgentDir = join(PKG_ROOT, ".github", "agents");
  const srcHooksDir = join(PKG_ROOT, ".github", "hooks");
  const srcWorkflowsDir = join(PKG_ROOT, ".github", "workflows");

  console.log(`  \n  📁 Copying .github/agents/ configuration...`);
  copyRecursive(srcAgentDir, join(copilotDir, "agents"));

  if (existsSync(srcHooksDir)) {
    console.log(`  📁 Copying .github/hooks/...`);
    copyRecursive(srcHooksDir, join(copilotDir, "hooks"));
  }

  if (existsSync(srcWorkflowsDir)) {
    console.log(`  📁 Copying .github/workflows/...`);
    copyRecursive(srcWorkflowsDir, join(copilotDir, "workflows"));
  }

  const pkgJson = JSON.parse(
    readFileSync(join(PKG_ROOT, "package.json"), "utf-8"),
  );

  console.log(`\n  ✅ copilot-agent-kit v${pkgJson.version} installed!\n`);
  console.log(`     Location: ${targetDir}`);
  console.log(`     What you got:`);
  console.log(`       • .github/agents/      — 13 agent prompt files`);
  const hookCount = existsSync(srcHooksDir) ? readdirSync(srcHooksDir).length : 0;
  if (hookCount > 0) {
    console.log(`       • .github/hooks/       — ${hookCount} automation hooks`);
  }
  console.log(`       • .github/workflows/   — CI/CD workflows`);
  console.log(`\n     Next steps:`);
  console.log(`       cd ${targetDir}`);
  console.log(`       Open this project in GitHub Copilot\n`);
}
