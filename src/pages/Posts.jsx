import React, { useEffect, useRef, useState } from 'react'
import PostService from '../components/API/PostService'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import PostsFilter from '../components/PostsFilter'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import MyModal from '../components/UI/modal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import MySelect from '../components/UI/select/MySelect'
import '../css/style.css'
import { useFetching } from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver'
import { usePosts } from '../hooks/usePosts'
import { getPagesCount } from '../utils/pages'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()
    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, currentPage);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useObserver(lastElement, isLoading, currentPage < totalPages, () => setCurrentPage(currentPage + 1))

    useEffect(() => {
        fetchPosts()
    }, [currentPage, limit])

    const deletePost = (postId) => {
        setPosts(posts.filter(p => p.id !== postId))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    return (
        <div className='wrapper'>
            <MyButton style={{ marginTop: '30px ' }} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
            <hr style={{ margin: '10px 0' }} />
            <PostsFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Posts on page'
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: 50, name: '50'},
                ]}
            />
            {error && <h1>An error occured {error} </h1>}
            {isLoading && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Loader />
            </div>}
            <PostList posts={sortedAndFilteredPosts} deletePost={deletePost} title='All posts' />
            <div ref={lastElement} style={{height: '20px', backgroundColor: 'blue'}}></div>
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

