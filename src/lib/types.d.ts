// Types
type ThemeType = "light" | "dark"
type ModeType = "editable" | "readonly" | "draggable" | "";
type Link = { text: string, url: string };

// Exports
export interface AppConfirguration {
  theme: ThemeType;
  mode?: ModeType;
}
export interface NavbarConfiguration extends DefaultConfiguration, Partial<HTMLNavbarElement> {
  links?: Link[]
  /* properties */
};
export interface ButtonConfiguration extends DefaultConfiguration, Partial<HTMLButtonElement> {
  onClickAction?: any;
  onKeyAction?: any;
};
export interface BrConfiguration extends DefaultConfiguration, Partial<HTMLBrElement> {
  depth?: number;
/* properties */
};
export interface AnchorConfiguration extends DefaultConfiguration, Partial<HTMLAnchorElement> {
  onClickAction?: any;
  onKeyAction?: any;
};
export interface InputConfiguration extends DefaultConfiguration, Partial<HTMLInputElement> {
  onClickAction?: any;
  onChangeAction?: any;
  onKeyAction?: any;
}
export interface LabelConfiguration extends DefaultConfiguration, Partial<HTMLAnchorElement> {
/* properties */
};
export interface TextConfiguration extends DefaultConfiguration, Partial<HTMLPreElement> {
  /* properties */
};
export interface FooterConfiguration extends DefaultConfiguration, Partial<HTMLFooterElement> {
  links?: Link[]
  /* properties */
};

// Custom Components
export interface ThemeChangerConfiguration extends DefaultConfiguration, Partial<HTMLAnchorElement> {
  onClickAction?: any;
  onKeyAction?: any;
};


export interface DefaultConfiguration {
  mode?: ModeType;
  theme?: ThemeType;
  class?: string;
  /**
   * The purpose of this styling is NOT to replace the styling tag, but for specific scenarios where stying must be passed in
   * - Note, this styling will overwrite all other CSS, including media queries and globals
   */
  style?: Partial<CSSStyleDeclaration>;
}

/**
 * Modes: view, edit, draggable?
 * 
 * Accessibility should be in mind
 * 
 * Have proper
 * 
 * 
 * Reasearch: Symantic web design
 */
