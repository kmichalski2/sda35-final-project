import i18n from "i18next";
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            "employees": "Employees",
            "add": "Add",
            "delete": "Delete",
            "edit": "Edit",
            "save": "Save",
            "cancel": "Cancel",
            "yes": "Yes",
            "no": "No",
            "id": "ID",
            "firstname": "Firstname",
            "lastname": "Lastname",
            "status": "Status",
            "salary": "Salary",
            "birthdate": "Birthdate",
            "postalcode": "Postal Code",
            "address": "Address",
            "city": "City",
            "phonenumber": "Phone Number",
            "searchphrase": "Search phrase...",
            "details_page_title": "Details Page",
            "confirmation": "Confrimation",
            "delete_dialog_description": "Are you that you want to remove this employee?"
        }
    },
    pl: {
        translation: {
            "employees": "Pracownicy",
            "add": "Dodaj",
            "delete": "Usuń",
            "edit": "Edytuj",
            "save": "Zapisz",
            "cancel": "Anuluj",
            "yes": "Tak",
            "no": "Nie",
            "id": "ID",
            "firstname": "Imię",
            "lastname": "Nazwisko",
            "status": "Status",
            "salary": "Wynagrodzenie",
            "birthdate": "Data Urodzenia",
            "postalcode": "Kod Pocztowy",
            "address": "Adres",
            "city": "Miasto",
            "phonenumber": "Numer Telefonu",
            "searchphrase": "Wyszukiwana fraza...",
            "details_page_title": "Szczegóły Pracownika",
            "confirmation": "Potwierdzenie",
            "delete_dialog_description": "Czy jesteś pewien, czy chcesz usunąć tego pracownika?"
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "pl",
    fallbackLng: "en"
});

export default i18n;