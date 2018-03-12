# VS Code

## Shortcuts

- Show All Command - Ctrl+Shift+P
- Go to File - Ctrl+P
- Find in Files Ctrl+Shift+F
- Toggle Terminal Ctrl+`
- User Settings Ctrl+,
- Toggle Comment Ctrl+/

## Emmet Demo

## Path Variable

```bash
code .
code . -r
```

## User Settings

### Basics

```bash
{
  "files.exclude": {
  },
  "search.exclude": {
    "**/.git/": true,
    "**/node_modules": true,
    "**/bower_components": true
  },
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
}
```

### UI

```js
  "editor.minimap.enabled": false,
  "window.menuBarVisibility": "toggle",
  "workbench.activityBar.visible": true,
  "workbench.colorCustomizations": {
    "statusBar.background": "#333333",
    "statusBar.foreground": "#ADADAD"
  },
  "workbench.editor.enablePreview": false,
  "workbench.statusBar.visible": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false
```

### Linting

```js
"editor.detectIndentation": false,
"editor.tabSize": 2
"javascript.format.insertSpaceAfterConstructor": true,
"javascript.format.insertSpaceBeforeFunctionParenthesis": true,
"javascript.validate.enable": false,
"prettier.jsxBracketSameLine": true,
"prettier.printWidth": 120,
"prettier.semi": false,
"prettier.singleQuote": true
```

### Other

```js
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
},
"emmet.syntaxProfiles": {
  "xml": {
    "attr_quotes": "single"
  }
},
"git.autofetch": true,
"git.enableSmartCommit": true
```

## Extensions

A few common ones relevant to this project.

- Auto Import
- Debugger for Chrome
- Django Template
- markdownlint
- npm
- npm Intellisense
- Prettier
- Python
- Simple React Snippets
- SVG Viewer

## Debugging create-react-app

```js
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src"
    }
  ]
}
```
