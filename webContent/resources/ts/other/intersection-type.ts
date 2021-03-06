interface Kicker {
    kick(speed: number): number;
}

interface Puncher {
    punch(power: number): number;
}
// assign intersection type definition to alias KickPuncher
type KickPuncher = Kicker & Puncher;

function attack(warrior: KickPuncher) {
    warrior.kick(102);
    warrior.punch(412);
    warrior.judoChop(); // Property 'judoChop' does not exist on type 'KickPuncher'
}