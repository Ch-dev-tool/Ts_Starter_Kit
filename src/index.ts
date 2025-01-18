import { Command } from 'commander';
import { Setup_Project } from './utils/commands/setupProject.command.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Project Scaffolding Tool CLI');

program.command('generate <template> <projectName>')
  .description('Generate a new project based on a template')
  .action((template, projectName) => {
    Setup_Project(template, projectName);
  });

program.parse(process.argv);