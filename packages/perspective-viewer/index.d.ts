import {Table, TableData, TableOptions, Schema, View, ViewConfig} from '@finos/perspective';

declare module '@finos/perspective-viewer' {
    export interface PerspectiveViewer extends PerspectiveViewerOptions, HTMLElement {
        load(data: TableData | Table): void;
        load(schema: Schema, options: TableOptions): void;
        update(data: TableData): void;
        notifyResize(): void;
        delete(): Promise<void>;
        flush(): Promise<void>;
        toggleConfig(): void;
        save(): ViewConfig;
        reset(): void;
        restore(x: any): Promise<void>;
        restyleElement(): void;
        readonly table?: Table;
    }

    export interface PerspectiveViewerOptions extends Omit<ViewConfig, "row_pivots"|"column_pivots"|"filter" > {
        editable? : boolean;
        plugin? : string;
        "computed-columns"? : { [column_name:string]: string}[];
        "row-pivots"? : string[];
        "column-pivots"? : string[];
        filters?: Array<Array<string>>;
    }
    

}

export default PerspectiveViewer;
