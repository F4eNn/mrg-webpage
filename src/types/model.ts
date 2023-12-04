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
export interface IMetadata {
   krotki_opis: string;
   tytul: string;
}
export interface IMetaStrapi {
   pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
   };
}
