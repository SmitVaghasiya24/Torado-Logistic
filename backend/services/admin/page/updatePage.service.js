import { updatePage } from "../../../models/page.model.js";
import AppError from "../../../utils/AppError.js";

export const updatePageService = async (id, data, adminId) => {
    const { title, content, status } = data;

    if (!id) {
        throw new AppError("Page ID is required", 400);
    }

    if (!title || title.trim() === "") {
        throw new AppError("Title is required", 400);
    }

    if (!content || content.trim() === "") {
        throw new AppError("Content is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await updatePage({
        id,
        title: title.trim(),
        content,
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Page not found or no changes made",
            404
        );
    }

    return {
        id,
        title,
        content,
        status,
    };
};
