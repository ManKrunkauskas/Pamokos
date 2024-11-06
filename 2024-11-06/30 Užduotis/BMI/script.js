function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
    const markBMI = markWeight / (markHeight ** 2);
    const johnBMI = johnWeight / (johnHeight ** 2);
    return markBMI > johnBMI;
}

// Testavimo pavyzdys
console.log(compareBMI(70, 1.85, 68, 1.87)); // Turėtų grąžinti `true`, nes Marko KMI yra didesnis
