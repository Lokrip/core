"use client";

import { Button, FormControl, FormHelperText, Input, InputLabel, TextareaAutosize } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, FormEventHandler } from "react";

const createCourseFormSchema = z.object({
    name: z.string().min(2).max(45),
    description: z.string()
})

export function CreateCourseForm() {
    //zodResolver — это функция из @hookform/resolver/zod, которая позволяет использовать валидацию схем Zod вместе с react-hook-form.
    const {handleSubmit,} = useForm({
        resolver: zodResolver(createCourseFormSchema),
        defaultValues: {
            name: "",
            description: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    
    
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
                <FormControl>
                    <InputLabel htmlFor="my-input">Название</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </div>
            <div className="mt-5">
                <FormControl>
                    <InputLabel htmlFor="my-input">Описание</InputLabel>
                    <TextareaAutosize id="my-textarea" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </div>
            <Button variant="contained" style={{width: "100%"}}>Submit</Button>
        </form>
    )
}