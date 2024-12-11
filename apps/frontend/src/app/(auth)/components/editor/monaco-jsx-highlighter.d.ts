declare module 'monaco-jsx-highlighter' {
  import { traverse as babelTraverse } from '@babel/traverse';
  import * as monaco from 'monaco-editor'; // Assuming you're using the Monaco editor types

  // Class definition
  export default class MonacoJSXHighlighter {
    constructor(
      monaco: typeof monaco, // You can use the actual monaco types if available
      parse: (code: string) => ParseResult<File>, // parse function should take code and return AST
      traverse: typeof babelTraverse, // Babel traverse or similar AST traversal function
      editor: monaco.editor.IStandaloneCodeEditor // Type for Monaco editor instance
    );

    highlightOnDidChangeModelContent(): void; // Function to highlight JSX on content change
    addJSXCommentCommand(): void; // Function to add JSX comment command
  }

  // Utility function to make Babel parser compatible with JSX
  export function makeBabelParse(parse: (input: string, options?: ParserOptions) => ParseResult<File>, isJSX: boolean): ParseResult<File>;
}
