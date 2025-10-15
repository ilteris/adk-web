declare module 'vanilla-jsoneditor' {
  export type Mode = 'text' | 'code' | 'tree' | 'view' | string;

  interface JSONEditorContent {
    json?: any;
    text?: string;
  }

  interface JSONEditorProps {
    content: JSONEditorContent;
    mode?: Mode;
    readOnly?: boolean;
    navigationBar?: boolean;
    statusBar?: boolean;
    onChange?: (updated: { content: JSONEditorContent }) => void;
    mainMenuBar?: boolean;
  }

  interface JSONEditorOptions {
    target: HTMLElement;
    props: JSONEditorProps;
  }

  export function createJSONEditor(options: JSONEditorOptions): {
    update: (options: Partial<JSONEditorOptions>) => void;
    destroy: () => void;
  };
}
