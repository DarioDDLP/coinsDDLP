export function getNametoFlags(name: string): string {
    const formattedName = name.toLowerCase().trim().replace(/[áéíóúàèìòùäëïöüâêîôûñ]/g, match => {
        const accents: { [key: string]: string } = {
            'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
            'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
            'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
            'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
            'ñ': 'n'
        };
        return accents[match] || match;
    });
    return 'assets/flags/' + formattedName + '-flag.png'
}

export function normalizeString(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}