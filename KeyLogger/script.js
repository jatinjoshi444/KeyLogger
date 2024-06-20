const log = document.getElementById("log");
const state = document.getElementById("state");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.addEventListener("click", ()=>{
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    start.disabled = true;
    stop.disabled = false;
});

stop.addEventListener("click", ()=>{
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    log.textContent = "";
    state.textContent = "";
    stop.disabled = true;
    start.disabled = false;
})

function handleDown(e) {
    log.textContent = `key ${e.key} pressed down`;
    state.textContent = `key is down`;
}

function handleUp(e) {
    log.textContent = `key ${e.key} pressed up`;
    state.textContent = `key is up`;
}