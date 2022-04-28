import { createContext } from "react";

export const context = createContext({
    sensors: [],
    setsensors: () => { },
    actors: [],
    setActors: () => { },
    textActorBadge: "",
    setTextActorBadge: () => { },
    inish_state: () => { },
    handleChangeActors: () => { }
});