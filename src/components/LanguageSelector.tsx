import i18n from "../i18n"

export function LanguageSelector() {
    const onLanguageClick = (countryCode: string): void => {
        i18n.changeLanguage(countryCode);
    }

    return (<>
        <button onClick={() => onLanguageClick('en')} className="btn btn-light btn-lg">🇬🇧</button>
        <button onClick={() => onLanguageClick('pl')} className="btn btn-light btn-lg">🇵🇱</button>
    </>)
}