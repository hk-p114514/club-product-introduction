/// <reference types="react-scripts" />

// .mp4ファイルをimport可能にする
declare module "*.mp4" {
  const src: string;
  export default src;
}
