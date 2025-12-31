/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.pdf' {
  const content: string;
  export default content;
}

declare module 'react-pdf' {
  export interface DocumentProps {
    file?: string | { url: string } | ArrayBuffer;
    onLoadSuccess?: (pdfInfo: any) => void;
    onLoadError?: (error: Error) => void;
    [key: string]: any;
  }

  export interface PageProps {
    pageNumber?: number;
    [key: string]: any;
  }

  export class Document extends React.Component<DocumentProps, any> {}
  export class Page extends React.Component<PageProps, any> {}

  export const pdfjs: {
    GlobalWorkerOptions: {
      workerSrc: string;
    };
    version: string;
  };
}
