
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    console.log(message)
}
respond("Princess Caroline", Response.Yes)

