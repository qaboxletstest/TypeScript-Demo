enum DaysOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}

// enum DaysOfWeek {
//     SUNDAY = 3,
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//     THURSDAY,
//     FRIDAY,
//     SATURDAY
// }

let today: DaysOfWeek
today = DaysOfWeek.SUNDAY
console.log(today)
today = DaysOfWeek.SATURDAY
console.log(today)

// Numeric enums
// SUNDAY = 0
// MONDAY = 1
// TUESDAY = 2
// WEDNESDAY = 3
// THURSDAY = 4
// FRIDAY = 5
// SATURDAY = 6

// String ENUMS

enum Colors {
    red = "RED",
    green = "GREEN",
    blue = "BLUE"
}

let favColor: Colors
// favColor = 1
favColor = Colors.blue
console.log(favColor)

// Heterogeneous enums

enum Animals {
    lion = 1,
    tiger = "TIGER"
}

let carnivorous: Animals
carnivorous = Animals.lion
console.log(carnivorous)
carnivorous = Animals.tiger
console.log(carnivorous)