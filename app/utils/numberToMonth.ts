export default function numberToMonth(num: number, shortened: boolean = false) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const shortenedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (shortened ? shortenedMonths[+num - 1] : months[num - 1]) ?? 'Bearimy'
}
