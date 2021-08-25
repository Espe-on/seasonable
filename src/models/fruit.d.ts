import {Month} from "./month"

export type Fruit = {
    name : string,
    months: Month[],
    daysFresh: number | "to add",
    storage: 'Fridge' | 'Cupboard' | 'Counter' | 'Freezer' | "to add",
    imageUrl?: string
    notes? :string
};
