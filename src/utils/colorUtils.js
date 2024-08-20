export const getColorRating = (value) => {
    if (value >= 1.0 && value <= 1.15) return 'text-yellow-500';
    if (value < 1.0) return 'text-red-500'; 
    return 'text-green-500'; 
}

export const getColorDpr = (value) => {
    if (value <= 0.65) return 'text-green-500';
    if (value > 0.65 && value <= 0.70) return 'text-yellow-500'; 
    return 'text-red-500'; 
}

export const getColorKpr = (value) => {
    if (value >= 0.75) return 'text-green-500';
    if (value < 0.75 && value >= 0.70) return 'text-yellow-500'; 
    return 'text-red-500'; 
}

export const getColorApr = (value) => {
    if (value >= 0.30) return 'text-green-500';
    if (value < 0.30 && value >= 0.20) return 'text-yellow-500'; 
    return 'text-red-500'; 
}