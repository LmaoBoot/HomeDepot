console.log("Running tests...")

var header_check = !!document.querySelector(".shared-header").querySelector("div")
var counter_check = !!document.querySelector(".acl-tabs__link").firstChild
var test_check = document.querySelector(".acl-tabs__link").firstChild.wholeText == "Unassigned (0)"
var pass = 0

if (header_check) {
    pass++
    console.log("✅ Successfully found bell icon location")
} else {
    console.log("❌ Failed to find bell icon location")
}

if (counter_check) {
    pass++
    console.log("✅ Successfully found order tracker")
} else {
    console.log("❌ Failed to find order tracker")
}

if (test_check) {
    pass++
    console.log("✅ Successfully verified label is 'Unassigned (0)'")
} else {
    console.log("❌ Failed to verify label text")
}

console.log("\n" + pass + "/3 tests passed")

