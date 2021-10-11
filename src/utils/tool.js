function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
export function computedWin(num) {
    let a = [randomFrom(0, 3), randomFrom(4, 6), randomFrom(7, 8)];
    let targetList = [];
    for (let i = 0; i < Number(num); i++) {
        if (!a.includes(i)) {
            targetList[i] = {
                id: i + 1,
                getrole: "bader",
                scoped: -(i*30-15),
                isClick: false,
            }
        }
        else {
            targetList[i] = {
                id: i + 1,
                getrole: "gooder",
                scoped: (i*50),
                isClick: false,
            }
        }
    }
    return targetList;
}
