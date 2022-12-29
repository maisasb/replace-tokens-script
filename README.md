# replace-tokens-script

Script to replace design system tokens in a project

## First steps

- Clone the repository
- Execute npm install or yarn install

## How to use

- Open the terminal in the replate-tokens-script folder
- Run the command:
  yarn replace {project-directory}
  Ex:
  yarn replace ../front-app-ehr/src

This script will iterate in the given folder and get all Vue paths, then it will iterate in paths replacing tokens for the new ones.
The script will create a file.txt contain all the paths that were found

### Tokens that will replace

Wonderland
OLD 1.4.3 v1 latest => NEW v2.2.0

--gl-font-letter-spacing-rule-_ => --gl-letter-spacing-rule-_

--gl-font-line-height-_ => --gl-line-height-_

--gl-font-weight-thin => deleted

--gl-font-family-secondary => deleted

--gl-font-family-primary => --gl-font-family-base

--gl-border-radius-circle => deleted

DS v1

- colors
- borders
- opacity
- shadow
- font (letter-spacing, size, text-transform, weight)

**Tokens that will NOT be replaced**

--gl-shadows-level-_-_ => --gl-shadow-level-\*

--sys-color-surface-background-inverse => deleted

--sys-color-paring-\* => deleted
