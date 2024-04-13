# Contributing

## What's in the folder

- `package.json` - this is the manifest file in which declares the language support and defines the location of the grammar file.
- `syntaxes/gherkin.tmLanguage` - this is the Text mate grammar file that is used for tokenization.
- `language-configuration.json` - this is the language configuration, defining the tokens that are used for comments and brackets.

## Get up and running straight away

- Make sure the language configuration settings in `language-configuration.json` are accurate.
- Press `F5` to open a new window with your extension loaded.
- Create a new `.feature` file containing Gherkin.
- Verify that syntax highlighting works and that the language configuration settings are working.

## Make changes

- You can relaunch the extension from the debug toolbar after making changes to the files listed above.
- You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Install the extension

- To start using the extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
