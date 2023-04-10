import React from 'react'

interface Item {
    id: number;
    title: string;
    body: string;
}
interface Props {
    data: {
        title:string;
        body:string;
    }
}
interface Params {
    params: {
        id: number
    }
}
export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map((item: Item) => {
        return {
            params: {
                id: item.id.toString(),
            },
        };
    });


    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async (context: Params) => {
    const id = context.params.id;
    console.log(id);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}
function PostsId(props: Props) {

    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.body}</p>
        </div>
    )
}

export default PostsId