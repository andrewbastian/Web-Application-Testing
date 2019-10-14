import React from 'react'

export default function Display (props){
    return(
      
        <div>

            <h2>Display</h2>
            <div>

                <p>balls</p>
                {props.balls}

                <p>strikes</p>
                {props.strikes}

                <p>fouls</p>
                {props.fouls}

                <p>hits</p>
                {props.hits}

            </div>

        </div>
    )
}
