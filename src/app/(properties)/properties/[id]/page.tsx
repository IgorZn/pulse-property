import React from 'react';

async function Page({params}: {params: {id: string}}) {
    const { id } = await params
    return (
        <div>{id}</div>
    );
}

export default Page;