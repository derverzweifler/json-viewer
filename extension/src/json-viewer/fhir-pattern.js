function fhirReference() {
    return "([a-zA-Z]+/[a-zA-Z0-9\|]+)"
}

module.exports = new RegExp("^(" + fhirReference() + ")$", "i");