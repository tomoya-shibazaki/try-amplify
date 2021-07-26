import React, {Component, useEffect, useState} from 'react';
import './App.css';
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {GraphQLResult} from '@aws-amplify/api/lib/types';
import {listTodos} from "./graphql/queries";
import {createTodo} from "./graphql/mutations";
import awsmobile from './aws-exports';
import {ListTodosQuery} from './API';

Amplify.configure(awsmobile);

type Todo = {
  id: string,
  name: string,
  description: string | null,
  createdAt: string,
  updatedAt: string,
}


const Todos: React.FC = () => {
  const [state, setState] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    // query
    const response = (await API.graphql(
      graphqlOperation(listTodos)
    )) as GraphQLResult;
    const todos = response.data as ListTodosQuery;
    if (todos.listTodos != null) {
      setState(todos.listTodos.items as Todo[]);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      // mutation
      await API.graphql(
        graphqlOperation(createTodo, {
          input: {
            name: "買い物",
            description: "トマトを買う"
          }
        })
      )
      fetchTodos()
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <ol>
        {state.map(item => {
          return (
            <div>
              <li>{item.name}</li>
              <ul>{item.description}</ul>
            </div>
          )
        })}
      </ol>
      <button onClick={addTodo}>AddTodo</button>
    </div>
  );
}
export default Todos;