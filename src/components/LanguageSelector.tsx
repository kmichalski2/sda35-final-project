import React from "react";
import i18n from "../i18n"

export function LanguageSelector() {
    const languages = [
        { code: 'pl', label: 'Polski' },
        { code: 'en', label: 'English' }
    ]
    const selectedLanguage = i18n.language;

    const onLanguageChange = (event: React.ChangeEvent): void => {
        const select = event.target as HTMLSelectElement;
        console.log(select.value);
        i18n.changeLanguage(select.value);
    }

    return (<>
        <select onChange={onLanguageChange} className="form-control mt-2" style={{width: '150px'}}>
            { languages.map((language) => <option key={language.code} value={language.code} selected={language.code === selectedLanguage}>{language.label}</option> )}
        </select>
    </>)
}