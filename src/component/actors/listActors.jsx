import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { context } from '../contextApi/context'

export default function ListActors() {
    useEffect(() => {
        require("./script")
    }, [])

    const { handleChangeActors,actors,inish_state,forceUpdate } = useContext(context)
    // inish_state();
    // inish_state();
    //  const actors= await inish_actors();
    console.log(actors);
    // debugger
    return (
        <div id='actor-container'>
            <div className="cards">
                {actors?actors.map(actor=>(
                <div className="card card-1" key={actor.actorid}>
                    <h5>{actor.actorname}</h5>
                    <div className={`valve valve-actor-${actor.actorid}`} onClick={() => handleChangeActors(actor.actorid,actor.actorstatus)}>
                        <div className="circle">
                            <div className="inner-circle"></div>
                        </div>
                        <div className="valve-pipe vertical"></div>
                        <div className="valve-pipe horizontal"></div>
                    </div>
                    <div className={`badge-actor badge-actor-${actor.actorid} ${actor.actorstatus==1?"open_valve":"close_valve"}`}>
                        <span>{actor.actorstatus==1?"شیر جاری است":"شیر قطع است"}</span>
                    </div>
                </div>
                )):""}
                {/* <div className="card card-1">
                    <h5>شیر باغچه ورودی</h5>
                    <div className="valve">
                        <div className="circle">
                            <div className="inner-circle"></div>
                        </div>
                        <div className="valve-pipe vertical"></div>
                        <div className="valve-pipe horizontal"></div>
                    </div>
                    <div className='badge-bottom'>

                        <span>شیر جاری است</span>
                    </div>
                </div> */}
            </div>
            {/* {forceUpdate} */}
        </div>
    )
}
