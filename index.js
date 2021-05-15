var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUNDAY"] = 0] = "SUNDAY";
    DaysOfWeek[DaysOfWeek["MONDAY"] = 1] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DaysOfWeek[DaysOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DaysOfWeek[DaysOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DaysOfWeek[DaysOfWeek["SATURDAY"] = 6] = "SATURDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
// enum DaysOfWeek {
//     SUNDAY = 3,
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//     THURSDAY,
//     FRIDAY,
//     SATURDAY
// }
var today;
today = DaysOfWeek.SUNDAY;
console.log(today);
today = DaysOfWeek.SATURDAY;
console.log(today);
// Numeric enums
// SUNDAY = 0
// MONDAY = 1
// TUESDAY = 2
// WEDNESDAY = 3
// THURSDAY = 4
// FRIDAY = 5
// SATURDAY = 6
// String ENUMS
var Colors;
(function (Colors) {
    Colors["red"] = "RED";
    Colors["green"] = "GREEN";
    Colors["blue"] = "BLUE";
})(Colors || (Colors = {}));
var favColor;
// favColor = 1
favColor = Colors.blue;
console.log(favColor);
// Heterogeneous enums
var Animals;
(function (Animals) {
    Animals[Animals["lion"] = 1] = "lion";
    Animals["tiger"] = "TIGER";
})(Animals || (Animals = {}));
var carnivorous;
carnivorous = Animals.lion;
console.log(carnivorous);
carnivorous = Animals.tiger;
console.log(carnivorous);
