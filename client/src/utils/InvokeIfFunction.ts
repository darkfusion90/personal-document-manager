export default function invokeIfFunction(fn: Function | undefined, ...args: any) {
    if (typeof fn === 'function') {
        fn(...args)
    }
}