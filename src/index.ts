import { Command } from 'commander';
import * as path from 'path';
import * as fs from 'fs';

const program = new Command();

program
  .version('1.0.0')
  .description('Project Scaffolding Tool CLI');

program.command('generate <template> <projectName>')
  .description('Generate a new project based on a template')
  .action((template, projectName) => {
    const templateDir = path.join(__dirname, 'templates', template);
    const projectDir = path.join(process.cwd(), projectName);

    if (!fs.existsSync(templateDir)) {
      console.error(`Template "${template}" does not exist.`);
      process.exit(1);
    }

    fs.mkdirSync(projectDir, { recursive: true });

    function copyFiles(srcDir: string, destDir: string) {
      const entries = fs.readdirSync(srcDir, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.isDirectory()) {
          fs.mkdirSync(destPath, { recursive: true });
          copyFiles(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    copyFiles(templateDir, projectDir);
    console.log(`Generated project "${projectName}" based on template "${template}".`);
  });

program.parse(process.argv);