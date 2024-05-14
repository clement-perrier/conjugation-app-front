import { AsyncListInterface, ListInterface, ObjectInterface } from "./interfaces"

export const asyncListInitialState: AsyncListInterface =  {
    data: [],
    loading: false,
    error: null
}

export const listInitialState: ListInterface =  {
    data: []
}

export const objectInitialState: ObjectInterface =  {
    value: {
        id: null,
        name: null,
        language: {}
    }
}