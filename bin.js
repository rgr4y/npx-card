#!/usr/bin/env node
const chalk = require('chalk');
const boxen = require('boxen');
const open = require('open');

// Define colors
const primaryColor = chalk.hex('#6F2DA8'); // A rich purple
const secondaryColor = chalk.hex('#FF5F1F'); // A bright orange
const accentColor = chalk.hex('#19A7CE'); // A cyan blue
const dimColor = chalk.hex('#BEBEBE'); // A light gray

// Create header with ASCII art
const headerArt = [
'          ▗▖                  ▗▄▖  ▗▄▖       ',
'          ▐▌                  ▝▜▌  ▝▜▌       ',
' █▟█▌ ▟█▙ ▐▙█▙      ▐▙ ▟▌ ▟█▙  ▐▌   ▐▌   ▟██▖',
' █▘  ▐▛ ▜▌▐▛ ▜▌      █ █ ▐▙▄▟▌ ▐▌   ▐▌   ▘▄▟▌',
' █   ▐▌ ▐▌▐▌ ▐▌      ▜▄▛ ▐▛▀▀▘ ▐▌   ▐▌  ▗█▀▜▌',
' █   ▝█▄█▘▐█▄█▘      ▐█▌ ▝█▄▄▌ ▐▙▄  ▐▙▄ ▐▙▄█▌',
' ▀    ▝▀▘ ▝▘▀▘        ▀   ▝▀▀   ▀▀   ▀▀  ▀▀▝▘'
].map(line => primaryColor.bold(line)).join('\n');

const title = secondaryColor.bold(`    { ${chalk.bold('Web Developer & Software Engineer')} }`);

// Create divider with custom pattern
const divider = accentColor('•≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫≫•');

// Create social links with icons
const github = `${secondaryColor('⌘')}  ${dimColor('GitHub')}  :: ${accentColor('https://github.com/rgr4y')}`;
const email = `${secondaryColor('✉')}  ${dimColor('Email')}   :: ${accentColor('me@robvella.com')}`;
const web = `${secondaryColor('⌂')}  ${dimColor('Web')}     :: ${accentColor('https://robvella.com')}`;

// Create footer with call to action
const footer = `${secondaryColor('>')} ${chalk.italic('Run')} ${primaryColor.bold('npx robvella <command>')} ${chalk.italic('to connect!')}`;
const commands = dimColor('Commands: github, email, web');

// Card content
const content = [
  headerArt,
  title,
  '',
  divider,
  '',
  github,
  email,
  web,
  '',
  divider,
  '',
  footer,
  commands
].join('\n');

// Box options
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: '#6F2DA8',
  float: 'center'
};

// Print the box
console.log(boxen(content, boxOptions));

// Handle card interactions
const args = process.argv.slice(2);
if (args.length > 0) {
  const command = args[0].toLowerCase();
  
  switch(command) {
    case 'github':
      console.log(secondaryColor('\nOpening GitHub profile...'));
      open('https://github.com/rgr4y');
      break;
    case 'email':
      console.log(secondaryColor('\nOpening email client...'));
      open('mailto:me@robvella.com');
      break;
    case 'web':
      console.log(secondaryColor('\nOpening website...'));
      open('https://robvella.com');
      break;
    default:
      console.log(secondaryColor('\nUnknown command. Available commands: github, email, web'));
  }
}
