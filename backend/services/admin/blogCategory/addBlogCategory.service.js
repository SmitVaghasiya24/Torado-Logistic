import slugify from "slugify";
import { addBlogCategoryModel } from "../../../models/blogCategory.model.js";
import AppError from "../../../utils/AppError.js";

export const addBlogCategoryService = async (data, adminId) => {
    const { name, status } = data;

    if (!name || name.trim() === "") {
        throw new AppError("Category name is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const slug = slugify(name, { lower: true, strict: true });

    const result = await addBlogCategoryModel({
        name: name.trim(),
        slug,
        status: status || "active",
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError("Failed to add blog category", 500);
    }

    return result;
};
