import { ISummary } from "./summary";

export interface IRenderTemplate {
    render: (emp: ISummary, title: string, pos: any) => void
}