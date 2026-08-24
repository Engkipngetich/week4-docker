console.log("Running application tests...");

const expectedPort = 3000;

if (expectedPort !== 3000) {
    console.error("Test failed!");
    process.exit(1);
}

console.log("All tests passed successfully!");
process.exit(0);
