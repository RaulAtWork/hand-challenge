# HAND CALLENGE
this is an application that solves the problem from [hand-challenge](https://github.com/jesus-seijas-sp/hand-challenge)

## Instructions

This language works with a memory of an indefinite size of bytes, with all values initialized to 0. This language haves 7 instructions:

- 👉 : moves the memory pointer to the next cell
- 👈 : moves the memory pointer to the previous cell
- 👆 : increment the memory cell at the current position
- 👇 : decreases the memory cell at the current position.
- 🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
- 🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
- 👊 : Display the current character represented by the ASCII code defined by the current position.
---
Notes
- As memory cells are bytes, from 0 to 255 value, if you decrease 0 you'll get 255, if you increment 255 you'll get 0.
- Loops of 🤜 and 🤛 can be nested.

## Tests 

    👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊 
    -> output: "Hello"

<br>

    👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊
    -> output: "Hello World!"