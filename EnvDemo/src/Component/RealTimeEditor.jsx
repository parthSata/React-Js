import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RealTimeEditor({ name, control, label, defaultValue = "" }) {


    return (
        <div className="w-full">
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "Content"}
                control={control} // this use to set all parent elememt control 
                render={({field:{onChange}}) => (
                    <Editor
                    apiKey='th8vf84xk945i7ab1o4mzzarq3qdbba5d42y37dejg0h1cos'
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                    />

                )}
            />
        </div>
    )
}

