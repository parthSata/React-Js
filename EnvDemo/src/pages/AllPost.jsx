import React, { useEffect, useState } from 'react'
import databaseService from '../appwrite/Database'
import { Container, Postcard } from '../Component/index'

function AllPost() {
    const [post, setPost] = useState([])
    useEffect(() => {
        databaseService.getAllPosts([]).then((posts) => {
            if (posts) {
                setPost(posts.document)
                console.log("posts",posts)
            }
        })
    }, [])

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap ">
                    {post.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard post={post} />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
}

export default AllPost
