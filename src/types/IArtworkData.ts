import {IImageData} from './IImageData';
import { Document, EMPTY_DOCUMENT } from "@contentful/rich-text-types";
export interface IArtworkData {
    title: string;
    description: Document;
    creationDate: Date;
    images: IImageData[];
  }