import React from 'react';
import {challengeProgress} from "@/db/schema";
type Props={
    missChallenge?:string;

}
const Card = ({missChallenge}:Props) => {
    return (
        <>
          <div className={"border-b-2 w-40 lg:w-48 border-blue-500"}>
              <h1 className="text-3xl text-center">{missChallenge}</h1>
          </div>
        </>
    );
};

export default Card;