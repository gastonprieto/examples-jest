import service from "../src/service.js";

service.isGoingToTheMoon().then(result => {
    console.log(result ? "Going to the moon!" : "Not going to the moon");
});