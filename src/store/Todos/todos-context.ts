import React from 'react';

interface Todo {
  id: string;
  items: any[];
}

export type todosContextObj = {
  items: Todo[];
};

export const todosContext = React.createContext<todosContextObj>({
  items: [],
});
