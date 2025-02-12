import styled from "styled-components";

export const EditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0 20vw;

    @media (max-width: 1180px) {
        padding: 0 12vw;
    }

    @media (max-width: 800px) {
        padding: 0 8vw;
    }
`

export const EditorHeader = styled.div`
    margin-bottom: 50px;
    text-align: center;
`

export const EditorHeaderTitle = styled.h1`
    margin: auto;
    font-size: 35px;
`

export const EditorDescription = styled.div`
    font-size: 22px;
`
export const ParagraphsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`
export const ParagraphText = styled.p`
    font-size: 18px !important;
    margin: 0;
    display: flex;
    width: 100%;
`

export const SavedParagraph = styled.div`
    display: flex;
    width: 100%;
    word-break: break-all;
    padding: 10px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(0,0,0,.1);
    }
`
export const ParagraphTile = styled.li`
    width: 100%;
`

export const ParagraphForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 100px;
`
export const EditorTextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 170px;
    padding: 8px 1.5vw;
    border-radius: 5px;
`

export const AddParagraphButton = styled.button`
    all: unset;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    border-radius: 8px;

    padding: 20px 20px;

    background-color:rgb(0, 0, 0);
    &:hover{
        background-color: #555555;
    }

    &:active{
        background-color:rgb(118, 199, 64);
    }

    &:disabled{
        background-color:rgb(201, 201, 201);
        cursor: auto;
    }

    @media (max-width: 860px) {  
        padding: 20px 20px;

    }   

`

export const DeleteParagraphButton = styled.button`
    all: unset;
    cursor: pointer;
    padding: 3px 3px;
    border-radius: 8px;
    color:rgb(126, 126, 126);

    &:hover{
       background-color: rgba(0, 0, 0, .3);
       color: white;
    }

`