import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RealTimeEditor } from "../Component/index";
import databaseService from "../appwrite/Database";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostForm({ post = null }) {
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const { handleSubmit, register, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    }); // Watch is Use for watch on any field

  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = (await data.image[0])
        ? databaseService.fileUpload(data.image[0])
        : null;

      if (file) {
        databaseService.deleteFile(post.featuredImage);
        setImageFile(null);
      }

      const dbPost = await databaseService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      console.log("TCL: submit -> dbPost", dbPost);

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await databaseService.fileUpload(data.image[0]);

      if (file) {
        setImageFile(file);
        const fileId = file.$id;
        console.log("TCL: submit -> fileId", fileId);
        data.featuredImage = fileId;
        const dbPost = await databaseService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch(() => {
      if (name == "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  console.log("post", post);

  if (post == []) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RealTimeEditor
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              {post.featuredImage && (
                <img
                  src={databaseService.getFilePreview(post.featuredImage)}
                  alt={post.title}
                  className="rounded-lg"
                />
              )}
            </div>
          )}

          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-8"
            {...register("status", { required: true })}
          />
          <button type="submit" className="w-full bg-blue-600 rounded-lg mt-3 ">
            {post ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    );
  }
}

export default PostForm;
