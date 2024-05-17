export const conservationStates = [
    {
        id: 0,
        name: 'ND',
        description: 'No disponible',
        text: 'No disponible'
    },
    {
        id: 1,
        name: 'FDC',
        description: 'Flor de cuño',
        text: '- PROOF (Prueba) | FDC (Flor De Cuño) | MS (Mint Sets) .- Es un método de fabricación, y no un grado de conservación. La acuñación se realiza de manera especial, con cuños especialmente tratados. El proceso de acuñación de este tipo de piezas, es mucho más lento y preciso de lo habitual, en el cual, como mínimo se golpea la misma pieza dos o más veces. Como resultado se obtiene una moneda de gran belleza, con el fondo (campo) espejo y relieves mate. Generalmente hecha para coleccionistas y destinadas generalmente a sets y carteras oficiales.'
    },
    {
        id: 2,
        name: 'SC',
        description: 'Sin circular',
        text: '- BU (Brillant uncirculated | UNC (Unciculated) | SC (Sin Circular).- Moneda tal y como sale del cuño, que nunca ha circulado y que conserva su lustre original, aunque en algunas con más antigüedad el lustre puede perder brillo, especialmente las de cobre y las de plata, en las cuales aparece una pátina de brillo negruzco o azulado. Debido al proceso de acuñación, embalaje, transporte, etc., puede presentar ligeros golpes, rayas ó roces, al haber estado en contacto con otras piezas. Se suele distinguir BU de UNC y SC otorgando el primer termino a las que proceden de carteras oficiales.'
    },
    {
        id: 3,
        name: 'EBC',
        description: 'Excelente bien conservada',
        text: '- EBC (Excelente Bien Conservada) | XF ó EF (Extremely Fine) .- Moneda que ha tenido muy poca circulación, con ligero desgaste en zonas de mayor relieve y pérdida de brillo, apenas perceptible en algunas partes. Hasta el más mínimo detalle se distingue con total nitidez.'
    },
    {
        id: 4,
        name: 'MBC',
        description: 'Muy bien conservada',
        text: '- MBC (Muy Bien Conservada) | VF (Very Fine) .- La moneda aunque ha circulado, presenta un desgaste medio y su aspecto general sigue siendo muy bueno y atractivo. Se aprecia la perdida de brillo original Todas las características importantes son visibles. Las áreas de mayor relieve pueden estar aplanadas y desgastadas (detalles finos del pelo, orejas, etc.).'
    },
    {
        id: 5,
        name: 'BC',
        description: 'Bien conservada',
        text: '- BC (Bien Conservada) | VG (Very Good) .- las dos caras de la moneda presentan los diseños desgastados; es perfectamente identificable en lo que respecta a los detalles más importantes, como las leyendas mayores, mientras que las menores, aparecen solo parcialmente, o muy borrosas.'
    },
    {
        id: 6,
        name: 'RC',
        description: 'Regular conservación',
        text: '- RC (Regular Conservación) | G (Good) .- La moneda esta bastante desgastada, aunque se reconocen todos los símbolos y leyendas. Las leyendas menores no se distinguen y la gráfila tiende a desaparecer.'
    },
    {
        id: 7,
        name: 'MC',
        description: 'Mal conservada',
        text: '- MC (Mal Conservada) | P (Poor) .- La moneda está completamente lisa; las leyendas y la fecha apenas se distinguen. Prácticamente no coleccionable.'
    }
]

export function getConservationColors(conservation: string): string {
    switch (conservation) {
        case 'FDC':
        case 'SC':
            return 'success';
        case 'MBC':
        case 'EBC':
            return 'info';
        case 'BC':
        case 'RC':
            return 'warning';
        case 'MC':
            return 'danger';
        default:
            return '-';
    }
}