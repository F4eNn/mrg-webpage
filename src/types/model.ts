export interface RootDataType<T> {
   id: number;
   attributes: T;
}

export interface ImageType {
   url: string;
   alt: string;
   width: number;
   height: number;
   blurDataUrl: string | undefined;
}

export interface IFormatType {
   formats: { large: ImageType };
}
