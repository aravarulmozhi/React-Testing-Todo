/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react"
import {render, fireEvent, screen, act, getByTestId } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoApp from "../TodoApp"

test("Adding to list",()=>{
render(<TodoApp/>)
const inputbox=screen.getByTestId("task-input")
const addButton=screen.getByTestId("add-task-button")
act(()=>{
    userEvent.type(inputbox,"to do 1st")
    fireEvent.click(addButton)
})
expect(screen.getByText("to do 1st")).toBeInTheDocument()

})

test("Deleting from the list",()=>{
    render(<TodoApp/>)
   
    
    act(()=>{
        const inputbox=screen.getByTestId("task-input")
        const addButton=screen.getByTestId("add-task-button")
        userEvent.type(inputbox,"first item")
        fireEvent.click(addButton)
    })
    expect(screen.getByText("first item")).toBeInTheDocument()  
   act(()=>{
    const deleteButton=screen.getByTestId("delete-task-button")
    fireEvent.click(deleteButton)
   })
   expect(screen.queryByText('first item')).not.toBeInTheDocument();
    // expect(screen.getByText("first item")).not.toBeInTheDocument()  

})

test("Update action",()=>{
    render(<TodoApp/>)
    const inputbox=screen.getByTestId("task-input")
    const addButton=screen.getByTestId("add-task-button")
    act(()=>{
        userEvent.type(inputbox,"first item")
        fireEvent.click(addButton)
    })
    expect(screen.getByText("first item")).toBeInTheDocument()

    act(()=>{
        const updateButton=screen.getByTestId("update-task-button")
        window.prompt=jest.fn(()=>"update the text")
        fireEvent.click(updateButton)
    })
    expect(screen.queryByText("update the text")).toBeInTheDocument()

})