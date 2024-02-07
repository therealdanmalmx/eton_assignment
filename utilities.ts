export const formatUrlName = (url: string) => {
    return url.toLowerCase().split(" ").join("-")
//   return url.replace(/-/g, " ").replace(/_/g, " ");
}