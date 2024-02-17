import React, { useEffect, useState } from 'react'
import databaseService from '../../appwrite/Database'
import { Container, Postcard } from '../index'
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
    const [post, setPost] = useState([])
    useEffect(() => {
        databaseService.getAllPosts([]).then((posts) => {
            if (posts) {
                setPost(posts.document)
            }
        })
    }, [])

    if (post.document === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />  // spread use because get multiple post
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
