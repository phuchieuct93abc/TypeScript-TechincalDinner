var Response;
(function (Response) {
    Response[Response["No"] = 1] = "No";
    Response[Response["Yes"] = 2] = "Yes";
})(Response || (Response = {}));
function respond(recipient, message) {
    showModal("Enum", "Value is " + message);
}
//respond("Princess Caroline", Response.Yes)
