"use client";

import { Button, FormControl, FormHelperText, Input, InputLabel, TextareaAutosize } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, FormEventHandler, useTransition } from "react";
import { createCourseAction } from "../actions";

const createCourseFormSchema = z.object({
    name: z.string().min(2).max(45),
    description: z.string()
})

export function CreateCourseForm({revalidatePagePath}: {revalidatePagePath: string}) {
    //zodResolver — это функция из @hookform/resolver/zod, которая позволяет использовать валидацию схем Zod вместе с react-hook-form.
    const [isCreateTransition, startCreateTransition] = useTransition()
    
    const {handleSubmit,} = useForm({
        resolver: zodResolver(createCourseFormSchema),
        defaultValues: {
            name: "",
            description: ""
        }
    })
    
    
    return (
        <form onSubmit={handleSubmit((data) => {
            startCreateTransition(async () => {
                createCourseAction(data, revalidatePagePath);
            })
        })}>
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
            <Button type="submit" disabled={isCreateTransition} variant="contained" style={{width: "100%"}}>Добавить</Button>
        </form>
    )
}