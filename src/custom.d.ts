declare namespace NodeJS {
	interface ProcessEnv {
      		NODE_ENV: 'development' | 'production' | 'test';
      		PUBLIC_URL: string;
      		REACT_APP_TEST: string;
	}
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.tsx" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.ts" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.png";
declare module "*.PNG";


