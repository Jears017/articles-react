let obj = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December',
}

export const convertData = (publishedAt: string) => {
    const date:string[] = new Date(publishedAt).toString().split(' ')
    const month = date[1]
    const dateNumber = date[2]
    const year = date[3]

    // @ts-ignore
    return `${obj[month]} ${dateNumber}${dateNumber == 1 ? 'st' : dateNumber == 2 ? 'nd' : dateNumber == 3 ? 'rd' : 'th' }, ${year}`
}