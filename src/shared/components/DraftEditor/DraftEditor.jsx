import React, { useState } from "react";
import { Paragraph } from "./Paragraph";
import { EditorContainer, EditorDescription, EditorHeader, EditorHeaderTitle, ParagraphsList } from "./styles";

export const DraftEditor = () => {
    const[lastId, setLastId] = useState(-1)
    const[paragraphs, setParagraphs] = useState([])

    const handleAddParagraph = (text) => {
        setParagraphs([...paragraphs, {
            id: lastId+1,
            text
        }])
        setLastId(lastId+1)
    }

    const handleDeleteParagraph = (id) => {
        const newArray = paragraphs.filter(pr => pr.id !== id)
        setParagraphs(newArray)
    }

    return(
        <EditorContainer>
            <EditorHeader>
                <EditorHeaderTitle>DraftEditor</EditorHeaderTitle>
                <EditorDescription>Comece escrevendo seu rascunho abaixo...</EditorDescription>
            </EditorHeader>
            <ParagraphsList>
                {
                    paragraphs.map((paragraph) => (
                        <Paragraph key={paragraph.id} paragraph={paragraph} onDeleteParagraph={handleDeleteParagraph}/>
                    ))
                }
                <Paragraph 
                    writeMode 
                    onSaveParagraph={handleAddParagraph}
                    onDeleteParagraph={handleDeleteParagraph}
                />
            </ParagraphsList>
        </EditorContainer>
    )
}