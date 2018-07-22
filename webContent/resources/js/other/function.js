function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
var result3 = buildName();
var result4 = buildName("Bob", "Adams", "Sir.");
