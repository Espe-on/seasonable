import {Months} from "./months"

export type Vegetable = {
    name : string,
    months: Months[],
    daysFresh: number,
    storage: 'Fridge' | 'Cupboard' | 'Counter' | 'Freezer'
}
