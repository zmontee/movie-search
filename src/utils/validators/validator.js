export const required = (value) => {
    if (value) return undefined;

    return "You entered an empty line"
}