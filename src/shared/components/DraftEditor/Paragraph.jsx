import React, { useEffect, useRef, useState } from "react";
import { AddParagraphButton, DeleteParagraphButton, EditorTextArea, ParagraphForm, ParagraphText, ParagraphTile, SavedParagraph } from "./styles";

export const Paragraph = ({paragraph, writeMode, onSaveParagraph, onDeleteParagraph}) => {
    const [text, setText] = useState("")
    const [formIsFocused, setIsFormFocused] = useState(true)
    const formRef = useRef(null)

    useEffect(() => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }, [text, ]);

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleSaveParagraph = (event) => {
        if(event) event.preventDefault()
        if(text.length === 0 || !onSaveParagraph) return
        onSaveParagraph(text)
        setText("")
    }

    const handleSpacePressed = (event) => {
        if (event.code === "Enter" || event.nativeEvent.key === "Enter") {
            handleSaveParagraph(event)
        }
    }

    const handleDeleteParagraph = () => {
        if(onDeleteParagraph) {
             onDeleteParagraph(paragraph.id)
        }
    }

    const handleFormFocus = (state) => {
        setIsFormFocused(state)
    }

    return(
        <ParagraphTile>
        {
            !writeMode ? (
            <SavedParagraph>
                <ParagraphText>{paragraph.text}</ParagraphText>
                <DeleteParagraphButton onClick={handleDeleteParagraph}><i className="bi bi-x"></i></DeleteParagraphButton>
            </SavedParagraph>
            ) : (
            <ParagraphForm ref={formRef}>
                <EditorTextArea
                    autoFocus
                    id="text"
                    name="text"
                    value={text}
                    placeholder="Digite aqui o seu texto..."
                    onChange={handleTextChange}
                    onKeyDown={handleSpacePressed}
                    onFocus={() => handleFormFocus(true)}
                >Digite aqui seu texto</EditorTextArea>
                <div>{text.length} caracteres</div>

                <AddParagraphButton 
                    type="submit" 
                    onClick={handleSaveParagraph}
                    disabled={text.length == 0}
                >
                    Adicionar
                </AddParagraphButton>
            </ParagraphForm>
            )
        }
        </ParagraphTile>
    )
}