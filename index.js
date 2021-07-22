function findMatching(drivers, name){
    return drivers.filter(el => el.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(el => el.charAt() === name.charAt('S'))
}

function matchName(drivers, match) {
    return drivers.filter(el => el.name === match)
}