function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName
    }
    return firstName;
}
function buildName2(firstName: string, lastName = "default lastname") {

    return firstName + " " + lastName

}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");
let result3 = buildName();
let result4 = buildName("Bob", "Adams", "Sir.")


let result5 = buildName2("Bob");
let result6 = buildName2("Bob", "Adams");
let result7 = buildName2();
let result8 = buildName2("Bob", "Adams", "Sir.")
