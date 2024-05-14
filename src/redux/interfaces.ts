
export interface AsyncListInterface {
    data: any[],
    loading: boolean,
    error: string | undefined | null
}

export interface ListInterface {
    data: any[]
}

export interface ObjectInterface {
    value: {
        id: Number | null,
        name: String | null,
        language: {}
    }
}

export interface RootStateInterface {
    tenseList: AsyncListInterface;
    selectedTense: ObjectInterface;
    verbList: AsyncListInterface;
    selectedVerbList: ListInterface;
}