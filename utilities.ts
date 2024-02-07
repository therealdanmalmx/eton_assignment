export const formatUrlName = (url: string) => {
    return url.toLowerCase().trim().split(" ").join("-")
}