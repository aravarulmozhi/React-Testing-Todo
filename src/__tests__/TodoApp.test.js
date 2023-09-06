/* eslint-disable testing-library/no-unnecessary-act */
import React from "react"
import {render, fireEvent, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoApp from "../TodoApp"

test("can add tasks to the list",()=>{
    render(<TodoApp/>)
    const input=screen.getByTestId("task-input")
    const addButton=screen.getByTestId("add-task-button")
    act(()=>{
        userEvent.type(input,"learn React Testing");
        fireEvent.click(addButton)
    })
    expect(screen.getByText("learn React Testing")).toBeInTheDocument()
})