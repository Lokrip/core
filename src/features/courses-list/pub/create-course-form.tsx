"use client";

import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createCourseAction } from "../actions";
import styles from "./create-course-form.module.scss"

const createCourseFormSchema = z.object({
    name: z.string().min(2).max(45),
    description: z.string()
})

export function CreateCourseForm({revalidatePagePath}: {revalidatePagePath: string}) {
    //zodResolver — это функция из @hookform/resolver/zod, которая позволяет использовать валидацию схем Zod вместе с react-hook-form.
    const [isCreateTransition, startCreateTransition] = useTransition()
    
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(createCourseFormSchema),
        defaultValues: {
            name: "",
            description: ""
        }
    })
    
    
    return (
        <form onSubmit={handleSubmit((data) => {
            startCreateTransition(async () => {
                await createCourseAction(data, revalidatePagePath);
            });
        })} className="m-10 p-10 bg-blend-darken">
            <div className="mt-5">
                <FormControl>
                    <InputLabel htmlFor="my-input">Название</InputLabel>
                    <Input id="name" {...register("name")} />
                    {errors.name && <FormHelperText>{errors.name.message}</FormHelperText>}
                </FormControl>
            </div>
            <div className="mt-5 mb-5">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Описание"
                    multiline
                    maxRows={4}
                    minRows={4}
                    {...register("description", { required: "Это поле обязательно" })}
                />
                {errors.description && <FormHelperText>{errors.description.message}</FormHelperText>}
            </div>
            <Button className="w-full" type="submit" disabled={isCreateTransition} variant="contained">
                {isCreateTransition ? "Добавление..." : "Добавить"}
            </Button>
        </form>
    )
}