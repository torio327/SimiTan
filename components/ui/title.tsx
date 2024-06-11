import React from 'react';

type Props={
    title:string,
}
const Title = ({title}:Props) => {
    return (
        <header className={"border-slate-300 border-b-4 flex justify-center mb-14"}>
            <h1 className={"text-3xl text-blue-500"}>{title}</h1>
        </header>
    );
};

export default Title;