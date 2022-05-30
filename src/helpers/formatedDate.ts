import dayjs from 'dayjs'

export const formatedDate = (date: string | number | Date | dayjs.Dayjs) =>
    dayjs(date).format('MM/DD/YYYY')
