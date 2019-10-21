Use terminal in MacOS and Linux, use git bash in Windows

1. Create bash file `create-component.sh`(run following commands):
```bash
mkdir ~/scripts
nano ~/scripts/create-component.sh
```
2. Insert next code to the editor
```bash
#!/usr/bin/env bash

mkdir "$(pwd)/src/components/${1}"
touch "$(pwd)/src/components/${1}/${1}.js"
touch "$(pwd)/src/components/${1}/${1}.scss"
touch "$(pwd)/src/components/${1}/index.js"

echo "export * from './${1}';" >> "$(pwd)/src/components/${1}/index.js"
```
3. `Ctrl+O`, then `Enter` to save; `Ctrl+X` - to exit
4. Add alias to bash profile(run following commands)
```bash
nano ~/.bash_profile
# add next line to the end of the file
alias cc="bash ~/scripts/create-component.sh"
# `Ctrl+O`, then `Enter` to save; `Ctrl+X` - to exit
```
5. Run `source ~/.bash_profile` and use alias in project folder
