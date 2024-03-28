import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    cvc: '000',
    number: '0000 0000 0000 0000',
    name: 'JANE APPLESEED',
    month: '00',
    year: '00',
    userCvc: '',
    userNumber: '',
    userName: '',
    userMonth: '',
    userYear: '',
})