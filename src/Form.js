import React from 'react'

export default function Form() {
    function onSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("input");
        let h1 = document.getElementById("name");
        h1.innerText = ""
        h1.innerText = `Hello ${name.value}`;
        name.value = "";
    }
    return (
        <>
            <h1 id="name">Hello </h1>
            <form action="" onSubmit={onSubmit}>
                <input type="text" id="input" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
