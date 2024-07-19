export function formatDateto12HourFormat(d) {
    const date = new Date(d);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours < 12 ? 'a.m.' : 'p.m.';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${month}/${day}/${year} ${formattedHours}:${formattedMinutes} ${period}`;
}
