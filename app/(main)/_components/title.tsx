"use client"

import { useRef, useState } from "react"

import { Doc } from "@/convex/_generated/dataModel"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface TitleProps {
    initialData : Doc <"documents">
}

const Title = ({
    initialData
} : TitleProps) => {
    const update = useMutation(api.documents.update);

    const [isEditing,setIsEditing] = useState(false);
    const inputRef = useRef <HTMLInputElement> (null);
    const [title,setTitle] = useState(initialData.title || "Untitled");

    const enabledInput = () => {
        setTitle(initialData.title);
        setIsEditing(true);

        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(0,inputRef.current.value.length);
        }, 0)
    };

    const disabledInput = () => {
        setIsEditing(false);
    }

    const onChange = (
        e : React.ChangeEvent <HTMLInputElement>
    ) => {
        setTitle(e.target.value);
        update({
            id : initialData._id,
            title : e.target.value || "Untitled"
        })
    }

    const onKeyDown = (
        e : React.KeyboardEvent <HTMLInputElement>
    ) => {
        if(e.key === "Enter"){
            disabledInput();
        }
    }


    return (
        <div className="flex items-center gap-x-1">
            {!!initialData && <p>{initialData.icon}</p>}
            {isEditing ? (
                <Input
                    ref = {inputRef}
                    onClick={enabledInput}
                    onBlur={disabledInput}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={title}
                    className="h-7 px-2 focus-visible:ring-transparent"
                />
            ) : <Button
                    onClick={enabledInput}
                    variant="ghost"
                    className="font-normal h-auto p-1"
                >
                    <span className="truncate">
                        {initialData.title}
                    </span>
                </Button>
            }
        </div>
    )
}

export default Title;

Title.SkelTon = function TitleSkelton() {
    return (
        <Skeleton 
            className="h-6 w-20 rounded-md"
        />
    )
}
