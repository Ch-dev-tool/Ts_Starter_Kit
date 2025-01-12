import { Command } from 'commander';
const program = new Command();

program
  .version('1.0.0')
  .description('Project Scaffolding Tool CLI');

program.parse(process.argv);
