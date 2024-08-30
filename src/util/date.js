import { format } from "date-fns";

class Date {

    formatDate(dateTime) {
        return format(new Date(dateTime), 'dd-MM-yyyy')
    }
    formatTime(dateTime) {
        return format(new Date(dateTime), 'HH:mm')
    }

    today() {
        return format(new Date(dateTime), 'dd-MM-yyyy')
    }
}

export default Date