function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "default lastname"; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
var result3 = buildName();
var result4 = buildName("Bob", "Adams", "Sir.");
var result5 = buildName2("Bob");
var result6 = buildName2("Bob", "Adams");
var result7 = buildName2();
var result8 = buildName2("Bob", "Adams", "Sir.");
