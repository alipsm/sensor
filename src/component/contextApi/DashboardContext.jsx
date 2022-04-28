import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { context } from './context';

export default function DashboardContext({ children }) {
    const [sensors, setSensors] = useState();
    const [actors, setActors] = useState();
    const [textActorBadge, setTextActorBadge] = useState();
    // const [, forceUpdate] = useState();
    useEffect(() => {
        inish_state();
        require("../sensors/Script")
    }, [])


    async function inish_state() {

        await axios.get(
            "http://webswitch.ir:3000/actors"

        )
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    // debugger
                    if (JSON.stringify(actors) != JSON.stringify(data.actors)) {
                        setActors(data.actors)
                    }

                }
            })
            .catch(ex => {
                console.log(ex);
            });

        await axios.get(
            "http://webswitch.ir:3000/sensors"

        ).then(({ data, status }) => {
            if (status === 200) {
                // debugger
                console.log(data);
                if (JSON.stringify(sensors) != JSON.stringify(data.sensors)) {
                    setSensors(data.sensors)
                }
            }
        })
            .catch(ex => {
                console.log(ex);
            });

    }

    const handleChangeActors = (actorid, position) => {
        // debugger
        const badge_actor = document.querySelector(`.badge-actor-${actorid}`)
        const text_badge_actor = document.querySelector(`.badge-actor-${actorid} span`)
        const valve = document.querySelector(`.valve-actor-${actorid}`);
        // debugger
        badge_actor.classList.add("wait_valve")
        text_badge_actor.innerHTML = "درحال ارسال درخواست"
        axios.post(
            "http://webswitch.ir:3000/actors",
            {
                "actorid": actorid,
                "actorstatus": position == 1 ? 0 : 1
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            )
            .then(({ data, status }) => {
                if (status === 200) {

                    badge_actor.classList.remove("open_valve", "close_valve", "wait_valve")
                    valve.classList.remove("valve-rotate-reverce", "valve-rotate");

                    if (data.actorstatus == 1) {
                        
                        badge_actor.classList.add("open_valve")
                        valve.classList.add("valve-rotate-reverce");
                    } else {
                        badge_actor.classList.add("close_valve")
                        valve.classList.add("valve-rotate");
                    }
                    
                    inish_state();
                }
            })
            .catch(ex => {
                console.log(ex);
            });
        }

    return (
        <context.Provider
            value={{
                sensors,
                setSensors,
                actors,
                setActors,
                textActorBadge,
                setTextActorBadge,
                handleChangeActors,
                inish_state
            }}>
            {children}
        </context.Provider>
    )
}
