export interface Region {
    id: string;
    code: string;
    name: string;
}

export interface CountryIdResponse {
    id: string;
    two_letter_abbreviation: string;
    three_letter_abbreviation: string;
    full_name_locale: string;
    full_name_english: string;
    available_regions: Region[];
}