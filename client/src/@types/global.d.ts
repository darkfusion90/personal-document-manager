declare interface ArrayResponseData<T> {
    length: number
    data: Array<T>
}

type OnRenderChild = (...args) => Promise<React.ReactNode>