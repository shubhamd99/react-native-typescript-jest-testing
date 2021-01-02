import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Home from "../Home";

test("Render Home Component Properly", () => {
    // deeply renders given React element and returns helpers to query the output components.
    const { debug, getByTestId, getByText, getAllByTestId, queryByText, toContainElement } = render(<Home />);

    const input = getByTestId("adder-input");
    const button = getByText("Add");
    // debug();

    fireEvent.changeText(input, "itemabc"); // Entering in Input Field
    fireEvent.press(button); // Pressing Button to add the text string into the store

    const item = getByText("itemabc"); // Item should be present in the rendered items
    expect(item).toBeDefined();

    // Adding Second Item
    fireEvent.changeText(input, "item222"); // Entering in Input Field
    fireEvent.press(button); // Pressing Button to add the text string into the store
    const item2 = getByText("item222"); // Item should be present in the rendered items
    expect(item2).toBeDefined();

    // Delete Item
    const deleteButtons = getAllByTestId("cell-delete");
    fireEvent.press(deleteButtons[0]); // Press First Delete Item

    // Throw Error because if getByText cannot find item, it will throw error
    // expect(getByText("item abc")).not.toBeDefined(); 
    expect(queryByText("itemabc")).toBeNull(); // queryByText will return null if it cannot find the item

    // Testing List
    const list = getByTestId('list');
    expect(list).toContainElement(item2);

})