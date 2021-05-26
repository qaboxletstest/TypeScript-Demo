import { ISummary } from "./summary";
import { Position } from "../helpers/position.js"
export interface IRenderTemplate {
    render: (emp: ISummary, title: string, pos: Position) => void
}



