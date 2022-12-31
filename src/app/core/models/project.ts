export interface Project {
    name: string;
    stack?: { iconClasses: string, name: string };
    description: string;
    sourceUrl?: string;
    previewUrl: string;
    featured?: boolean;
    type: string;
    image?:string;
    association?: string;
}
