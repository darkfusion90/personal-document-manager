export default interface AppActionType<T> {
    type: string,
    payload: T
}