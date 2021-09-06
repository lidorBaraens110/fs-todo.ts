import { FC } from 'react';
import Header from '../component/Header';
import TodoList from '../component/TodoList'

const Home:FC=()=> {
    return (
        <div>
            <Header/>
            Home Page
            <TodoList/>
        </div>
    );
}

export default Home;