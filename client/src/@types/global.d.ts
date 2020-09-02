declare interface ArrayResponseData<T> {
    length: number
    data: Array<T>
}

declare type OnRenderChild = (...args) => Promise<React.ReactNode>

declare type ValueCallback<T, R = void> = (v: T) => R

declare type VoidCallback<R = void> = () => R

declare type ReactComponent<P = {}, S = {}> = React.FC<P> | React.ComponentClass<P, S>