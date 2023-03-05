export const BinerConvert = () => {
    let Lang = localStorage.getItem("i18nextLng")
    if (Lang) {
        if (Lang.toLowerCase() === "fa") {
            return 1
        } else {
            return 0
        }
    } else {
        return 1
    }
}