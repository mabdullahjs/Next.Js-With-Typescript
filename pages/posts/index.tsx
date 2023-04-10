import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}


interface Data {
    data: [];
}
interface Item {
    id: number;
    title: string;
}
function Post(props: Data) {
    const router = useRouter();
    const { data } = props;
    return (
        <div>
            {data.map((item: Item, index: number): JSX.Element => {
                return <h1 onClick={() => router.push(`/posts/${item.id}`)} key={index}>{item.title}</h1>
            })}
        </div>
    )
}

export default Post