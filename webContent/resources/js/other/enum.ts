enum Response {
    No = 1,
    Yes = 2,
}

function respond(recipient: string, message: Response): void {
    alert(message)
}
//respond("Princess Caroline", Response.Yes)

