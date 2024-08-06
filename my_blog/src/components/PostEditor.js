import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';

function PostEditor() {
    const mdRef = useRef(null);

    const [newCategory, setNewCategory] = useState('');
    const [categoryTemp, setCategoryTemp] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const makeNewCategory = async (newCategoryName)=>{
        console.log(newCategoryName);
        return 1;
    };

    const getCategoryFromServer = async ()=>{

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ category, title, content });
    };

    const changeHeight = ()=>{
        const textArea = mdRef.current;
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
    }

    useEffect(()=>{
        changeHeight();
    }, [content])

    return (
        <div className="content">
            <h2>글 쓰기</h2>

            <label htmlFor='makeCategory'>카테고리 새로 만들기</label>
            <input type='text' id='makeCategory' name='makeCategory' value={newCategory} 
            onChange={(e)=>setNewCategory(e.target.value)}/>
            <button id={0} className='categoryListElement' 
                onClick={(e)=>{
                    e.preventDefault();
                    if(makeNewCategory(newCategory))
                        alert('등록 오류');
                }}>
                만들기
            </button>

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="category">카테고리 지정</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={categoryTemp}
                    onChange={(e) => {
                        setCategoryTemp(e.target.value);
                        getCategoryFromServer();
                    }}
                />
                {categoryList}
            </div>


            <div className="form-group">
                <label htmlFor="title">제목</label>
                <input 
                type="text" 
                id="title" 
                name="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">내용</label>
                <textarea 
                id="content" 
                name="content"
                className="textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ref={mdRef}
                >
                </textarea>
                <Markdown id="content" 
                name="content"
                className="textarea"
                >{content}</Markdown>
            </div>
            <button type="submit">게시</button>
            </form>
        </div>
    );
}

export default PostEditor;
